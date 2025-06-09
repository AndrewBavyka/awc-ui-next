const AwcSpinnerVariantTypes = ['primary', 'secondary'] as const;
export type AwcSpinnerVariant = (typeof AwcSpinnerVariantTypes)[number];

const AwcSpinnerSizeTypes = ['s', 'm', 'l'] as const;
export type AwcSpinnerSize = (typeof AwcSpinnerSizeTypes)[number];
