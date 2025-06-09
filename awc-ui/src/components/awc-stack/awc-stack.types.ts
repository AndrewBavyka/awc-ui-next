const AwcStackFlexDirectionTypes = ['row', 'column'] as const;
export type AwcStackFlexDirection = (typeof AwcStackFlexDirectionTypes)[number];

const AwcStackAlignItemsTypes = ['start', 'center', 'end'] as const;
export type AwcStackAlignItems = (typeof AwcStackAlignItemsTypes)[number];

const AwcStackJustifyContentTypes = ['center', 'start', 'end', 'baseline', 'space-between', 'space-around', 'space-evenly', undefined] as const;
export type AwcStackJustifyContent = (typeof AwcStackJustifyContentTypes)[number];

const AwcStackGapTypes = ['none', '2xs', 'xs', 's', 'sm', 'm', 'l', 'xl', '2xl', '3xl'] as const;
export type AwcStackGap = (typeof AwcStackGapTypes)[number];

const AwcStackFlexWrapTypes = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export type AwcStackFlexWrap = (typeof AwcStackFlexWrapTypes)[number];
