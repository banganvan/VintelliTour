declare module 'marzipano' {
  // Define HotspotContainer interface
  export interface HotspotContainer {
    createHotspot(element: HTMLElement, position: { yaw: number; pitch: number }): Hotspot;
    destroy(): void;
  }

  // Define Hotspot interface (optional, can use 'any' if specific methods aren't needed)
  export interface Hotspot {
    // Define methods if needed, e.g., destroy(), show(), hide()
  }

  export class Viewer {
    constructor(element: HTMLElement);
    createScene(data: SceneData): Scene;
    destroy(): void;
  }

  export class Scene {
    switchTo(): void;
    hotspotContainer(): HotspotContainer; // Add hotspotContainer method
  }

  export class ImageUrlSource {
    static fromString(url: string): ImageUrlSource;
  }

  export class EquirectGeometry {
    constructor(levels: Array<{ width: number }>);
  }

  export class RectilinearView {
    static limit: {
      traditional(resolution: number, fov: number): any;
    };
    constructor(params: { yaw: number }, limiter: any);
  }

  export interface SceneData {
    source: ImageUrlSource;
    geometry: EquirectGeometry;
    view: RectilinearView;
    pinFirstLevel?: boolean;
  }
} 