const AwcAlertVariantTypes = ['block', 'message'] as const;
export type AwcAlertVariant = (typeof AwcAlertVariantTypes)[number];

const AwcAlertColorTypes = ['primary', 'warning', 'success', 'attention'] as const;
export type AwcAlertColor = (typeof AwcAlertColorTypes)[number];
