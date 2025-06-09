const AwcToastTypes = ['info', 'error', 'success', 'warning'] as const;
export type AwcToastType = typeof AwcToastTypes[number];

const AwcToastPositionTypes = ['top-center', 'bottom-left'] as const;
export type AwcToastPosition = typeof AwcToastPositionTypes[number];

const AwcToastSanitizeLevelTypes = ['unsafe', 'sanitize', 'safety'] as const;
export type AwcToastSanitizeLevel = typeof AwcToastSanitizeLevelTypes[number];

export interface IAwcToastOptions {
    timeOut?: number;
    position?: AwcToastPosition;
    textSanitize?: AwcToastSanitizeLevel;
    contentSanitize?: AwcToastSanitizeLevel;
    onShown?: () => void;
    onHidden?: () => void;
    onClick?: () => void;
    onCloseClick?: () => void;
}
