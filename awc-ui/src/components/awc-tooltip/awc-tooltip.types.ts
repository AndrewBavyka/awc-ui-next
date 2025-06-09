export const AwcTooltipSpacingTypes = [2, 4, 8, 12, 16, 20, 24, 32, 40] as const;
export type AwcTooltipSpacing = typeof AwcTooltipSpacingTypes[number];

export const AwcTooltipPositionTypes = ['top', 'bottom', 'left', 'right'] as const;
export type AwcTooltipPosition = typeof AwcTooltipPositionTypes[number];

export const AwcTooltipStrategyTypes = ['absolute', 'fixed'] as const;
export type AwcTooltipStrategy = typeof AwcTooltipStrategyTypes[number];
