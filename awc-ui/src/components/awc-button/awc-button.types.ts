const AwcButtonVariantTypes = ['primary', 'secondary', 'transparent', 'link'] as const;
export type AwcButtonVariant = typeof AwcButtonVariantTypes[number];

const AwcButtonSizeTypes = ['large', 'regular', 'small', 'extrasmall'] as const;
export type AwcButtonSize = typeof AwcButtonSizeTypes[number];

const AwcButtonColorTypes = ['blue', 'red', 'green', 'gray'] as const;
export type AwcButtonColor = typeof AwcButtonColorTypes[number];

const AwcButtonTypes = ['button', 'submit', 'reset'] as const;
export type AwcButtonType = typeof AwcButtonTypes[number];

const AwcButtonTargetTypes = ['_blank', '_self', '_parent', '_top'] as const;
export type AwcButtonTarget = typeof AwcButtonTargetTypes[number];
