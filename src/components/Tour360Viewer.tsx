'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { Box, Button, Stack, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Viewer } from 'photo-sphere-viewer';
import { MarkersPlugin } from 'photo-sphere-viewer/dist/plugins/markers';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import 'photo-sphere-viewer/dist/plugins/markers.css';

interface SceneConfig {
  id: string;
  image: string;
  title: string;
  hotspots?: Array<{
    id: string;
    longitude: number;
    latitude: number;
    targetSceneId: string;
    text: string;
  }>;
}

interface Tour360ViewerProps {
  scenes: SceneConfig[];
}

const ViewerContainer = styled(Box)({
  width: '100%',
  height: '500px',
  marginTop: '2rem',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
});

const ControlContainer = styled(Stack)({
  marginTop: '1rem',
  gap: '1rem',
});

// Định nghĩa CSS cho marker
const markerStyle = `
  .tour-marker {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgba(0, 100, 255, 0.8);
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .tour-marker:hover {
    transform: scale(1.2);
  }
`;

export default function Tour360Viewer({ scenes }: Tour360ViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const pSViewer = useRef<Viewer | null>(null);
  const markersPlugin = useRef<any>(null);
  const [currentSceneId, setCurrentSceneId] = React.useState<string>(scenes[0]?.id);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isInitialized, setIsInitialized] = React.useState(false);

  const addMarkersToScene = useCallback((scene: SceneConfig) => {
    if (!markersPlugin.current) return;

    try {
      markersPlugin.current.clearMarkers();
      
      scene.hotspots?.forEach(hotspot => {
        markersPlugin.current.addMarker({
          id: hotspot.id,
          longitude: hotspot.longitude,
          latitude: hotspot.latitude,
          tooltip: hotspot.text,
          html: `<div class="tour-marker">➔</div>`,
          data: {
            targetSceneId: hotspot.targetSceneId
          }
        });
      });
    } catch (error) {
      console.error('Error adding markers:', error);
    }
  }, []);

  const switchScene = useCallback(async (sceneId: string) => {
    const scene = scenes.find(s => s.id === sceneId);
    if (scene && pSViewer.current) {
      try {
        setIsLoading(true);
        await pSViewer.current.setPanorama(scene.image);
        setCurrentSceneId(sceneId);
        addMarkersToScene(scene);
      } catch (error) {
        console.error('Error switching scene:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [scenes, addMarkersToScene]);

  // Thêm style vào head khi component mount
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = markerStyle;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Khởi tạo viewer và thiết lập event listeners
  useEffect(() => {
    let handleMarkerSelect: ((e: any) => void) | null = null;
    let handleClick: ((e: any) => void) | null = null;

    const initializeViewer = async () => {
      if (!viewerRef.current || pSViewer.current || !scenes.length) return;

      try {
        const firstScene = scenes[0];
        const container = viewerRef.current;

        // Đảm bảo container đã được render
        await new Promise(resolve => setTimeout(resolve, 0));

        pSViewer.current = new Viewer({
          container,
          panorama: firstScene.image,
          navbar: [
            'autorotate',
            'zoom',
            'fullscreen',
          ],
          defaultZoomLvl: 0,
          defaultLong: 0,
          defaultLat: 0,
          mousewheel: true,
          mousewheelCtrlKey: true,
          touchmoveTwoFingers: true,
          plugins: [
            [MarkersPlugin, {
              markers: []
            }],
          ],
        });

        // Đợi viewer load xong
        await new Promise<void>((resolve) => {
          pSViewer.current?.on('ready', () => {
            resolve();
          });
        });

        markersPlugin.current = pSViewer.current.getPlugin(MarkersPlugin);
        addMarkersToScene(firstScene);

        // Thiết lập event listeners
        handleMarkerSelect = (e: any) => {
          if (e.marker?.data?.targetSceneId) {
            switchScene(e.marker.data.targetSceneId);
          }
        };

        handleClick = (e: any) => {
          if (e.data.rightclick) {
            console.log('Position:', {
              longitude: e.data.longitude,
              latitude: e.data.latitude
            });
          }
        };

        if (markersPlugin.current) {
          markersPlugin.current.on('select-marker', handleMarkerSelect);
        }

        pSViewer.current.on('click', handleClick);

        setIsInitialized(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing viewer:', error);
        setIsLoading(false);
      }
    };

    initializeViewer();

    return () => {
      if (handleMarkerSelect && markersPlugin.current) {
        markersPlugin.current.off('select-marker', handleMarkerSelect);
      }
      if (handleClick && pSViewer.current) {
        pSViewer.current.off('click', handleClick);
      }
      if (pSViewer.current) {
        pSViewer.current.destroy();
        pSViewer.current = null;
      }
    };
  }, [scenes, addMarkersToScene, switchScene]);

  if (!isInitialized && isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <ViewerContainer ref={viewerRef}>
        {isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1000,
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}
      </ViewerContainer>
      <ControlContainer direction="row" spacing={2}>
        {scenes.map((scene) => (
          <Button
            key={scene.id}
            variant={currentSceneId === scene.id ? "contained" : "outlined"}
            onClick={() => switchScene(scene.id)}
            disabled={isLoading}
          >
            {scene.title}
          </Button>
        ))}
      </ControlContainer>
    </>
  );
} 