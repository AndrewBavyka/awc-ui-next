// export type AwcAlertColor = 'primary' | 'warning' | 'success' | 'attention';
export type AwcAlertVariant = 'block' | 'message';

export const AlertColor = ['primary', 'warning', 'success', 'attention'] as const;
export type AwcAlertColor = (typeof AlertColor)[number];
