const AwcDividerSpacingTypes = ['none', '2xs', 'xs', 's', 'sm', 'm', 'l', 'xl', '2xl', '3xl'] as const;
export type AwcDividerSpacing = (typeof AwcDividerSpacingTypes)[number];
