import { computePosition, autoUpdate, offset, arrow, flip, shift, size as floatingSize } from '@floating-ui/dom';

export type Placement = 'top' | 'bottom' | 'left' | 'right';

export interface PositioningOptions {
    position: Placement;
    strategy: 'absolute' | 'fixed';
    spacing: number;
    matchReferenceWidth?: boolean;
    middleware?: any[];
    onPlacementChange?: (placement: Placement) => void; // <-- новый колбэк
}

export function setupFloating(referenceEl: HTMLElement, floatingEl: HTMLElement, arrowEl: HTMLElement | null, options: PositioningOptions) {
    const { position, strategy, spacing, middleware = [], matchReferenceWidth, onPlacementChange } = options;

    const updatePosition = () => {
        computePosition(referenceEl, floatingEl, {
            placement: position,
            strategy: strategy,
            middleware: [
                offset(spacing),
                flip(),
                shift({ padding: 8 }),
                ...(arrowEl ? [arrow({ element: arrowEl })] : []),
                ...(matchReferenceWidth
                    ? [
                          floatingSize({
                              apply({ elements }) {
                                  elements.floating.style.width = `${elements.reference.getBoundingClientRect().width}px`;
                              },
                          }),
                      ]
                    : []),
                ...middleware,
            ],
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(floatingEl.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            const [mainPlacement] = placement.split('-') as [Placement];

            if (onPlacementChange && mainPlacement !== position) {
                onPlacementChange(mainPlacement);
            }

            if (arrowEl && middlewareData.arrow) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow;

                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement.split('-')[0]] as 'top' | 'bottom' | 'left' | 'right' | undefined;

                if (staticSide) {
                    Object.assign(arrowEl.style, {
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: '-4px',
                    });
                }
            }
        });
    };

    const cleanup = autoUpdate(referenceEl, floatingEl, updatePosition);

    return cleanup;
}
