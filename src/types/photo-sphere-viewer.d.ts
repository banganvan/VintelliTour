declare module 'photo-sphere-viewer' {
  export interface ViewerOptions {
    container: HTMLElement;
    panorama: string;
    navbar?: string[];
    defaultZoomLvl?: number;
    defaultLong?: number;
    defaultLat?: number;
    mousewheel?: boolean;
    mousewheelCtrlKey?: boolean;
    touchmoveTwoFingers?: boolean;
    plugins?: [any, any][];
  }

  export interface HotspotOptions {
    id: string;
    longitude: number;
    latitude: number;
    tooltip?: string;
    html?: string;
    data?: any;
  }

  export class Viewer {
    constructor(options: ViewerOptions);
    destroy(): void;
    setPanorama(panorama: string, options?: { transition?: number; showLoader?: boolean }): Promise<void>;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
    getPlugin<T>(plugin: new (...args: any[]) => T): T;
    clearHotspots(): void;
    addHotspot(hotspot: HotspotOptions): void;
    addEventListener(event: string, callback: (e: any) => void): void;
    removeEventListener(event: string, callback: (e: any) => void): void;
  }
}

declare module 'photo-sphere-viewer/dist/plugins/markers' {
  export interface MarkerStyle {
    color?: string;
    backgroundColor?: string;
    borderRadius?: string;
    cursor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
  }

  export interface MarkerOptions {
    id: string;
    longitude: number;
    latitude: number;
    tooltip?: string;
    html?: string;
    style?: MarkerStyle;
    data?: any;
  }

  export class MarkersPlugin {
    clearMarkers(): void;
    addMarker(options: MarkerOptions): void;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
    removeEventListener(eventName: string, callback: (e: any) => void): void;
  }
} 