const AwcSwitcherVariantTypes = ['primary', 'gray', 'white'] as const;
export type AwcSwitcherVariant = typeof AwcSwitcherVariantTypes[number];

const AwcSwitcherSizeTypes = ['regular', 'small'] as const;
export type AwcSwitcherSize = typeof AwcSwitcherSizeTypes[number];
