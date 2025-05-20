export declare const ButtonProps: {
    ButtonTypes: readonly ["button", "submit", "reset"];
    SizeTypes: readonly ["large", "regular", "small", "extrasmall"];
    VariantTypes: readonly ["primary", "secondary", "transparent", "link"];
    ColorTypes: readonly ["blue", "red", "green", "gray"];
    TargetTypes: readonly ["_blank", "_self", "_parent", "_top"];
};
export type ButtonType = (typeof ButtonProps.ButtonTypes)[number];
export type SizeType = (typeof ButtonProps.SizeTypes)[number];
export type VariantType = (typeof ButtonProps.VariantTypes)[number];
export type ColorType = (typeof ButtonProps.ColorTypes)[number];
export type TargetType = (typeof ButtonProps.TargetTypes)[number];
