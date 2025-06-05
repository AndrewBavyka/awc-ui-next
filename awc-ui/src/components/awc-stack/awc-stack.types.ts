export const FlexDirectionTypes = ['row', 'column'] as const;
export type FlexDirectionType = (typeof FlexDirectionTypes)[number];

export const AlignItemsTypes = ['start', 'center', 'end'] as const;
export type AlignItemsType = (typeof AlignItemsTypes)[number];

export const JustifyContentTypes = ['center', 'start', 'end', 'baseline', 'space-between', 'space-around', 'space-evenly', undefined] as const;
export type JustifyContentType = (typeof JustifyContentTypes)[number];

export const GapTypes = ['none', '2xs', 'xs', 's', 'sm', 'm', 'l', 'xl', '2xl', '3xl'] as const;
export type GapType = (typeof GapTypes)[number];

export const FlexWrapTypes = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export type FlexWrapType = (typeof FlexWrapTypes)[number];
