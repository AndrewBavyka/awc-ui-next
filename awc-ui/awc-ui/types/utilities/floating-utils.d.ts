export type Placement = 'top' | 'bottom' | 'left' | 'right';
export interface PositioningOptions {
    position: Placement;
    strategy: 'absolute' | 'fixed';
    spacing: number;
    matchReferenceWidth?: boolean;
    middleware?: any[];
    onPlacementChange?: (placement: Placement) => void;
}
export declare function setupFloating(referenceEl: HTMLElement, floatingEl: HTMLElement, arrowEl: HTMLElement | null, options: PositioningOptions): () => void;
