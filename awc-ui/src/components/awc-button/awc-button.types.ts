export const ButtonProps = {
    ButtonTypes: ['button', 'submit', 'reset'] as const,
    SizeTypes: ['large', 'regular', 'small', 'extrasmall'] as const,
    VariantTypes: ['primary', 'secondary', 'transparent', 'link'] as const,
    ColorTypes: ['blue', 'red', 'green', 'gray'] as const,
    TargetTypes: ['_blank', '_self', '_parent', '_top'] as const,
};

export type ButtonType = (typeof ButtonProps.ButtonTypes)[number];
export type SizeType = (typeof ButtonProps.SizeTypes)[number];
export type VariantType = (typeof ButtonProps.VariantTypes)[number];
export type ColorType = (typeof ButtonProps.ColorTypes)[number];
export type TargetType = (typeof ButtonProps.TargetTypes)[number];
