export type AwcToastType = 'info' | 'error' | 'success' | 'warning';
export type AwcToastPosition = 'top-center' | 'bottom-left';
export type AwcToastSanitizeLevel = 'unsafe' | 'sanitize' | 'safety';

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
