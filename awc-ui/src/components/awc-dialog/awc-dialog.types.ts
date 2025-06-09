const AwcDialogVariantTypes = ['info', 'error',] as const;
export type AwcDialogVariant = typeof AwcDialogVariantTypes[number];