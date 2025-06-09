const AwcPopoverPositionTypes = [
    'top',
    'top-end',
    'top-start',
    'bottom',
    'bottom-end',
    'bottom-start',
    'left',
    'left-end',
    'left-start',
    'right',
    'right-end',
    'right-start',
] as const;
export type AwcPopoverPosition = (typeof AwcPopoverPositionTypes)[number];

const AwcPopoverSpacingTypes = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40] as const;
export type AwcPopoverSpacing = (typeof AwcPopoverSpacingTypes)[number];

const AwcPopoverStrategyTypes = ['absolute', 'fixed'] as const;
export type AwcPopoverStrategy = (typeof AwcPopoverStrategyTypes)[number];

const AwcPopoverTriggerTypeTypes = ['hover', 'click', 'focus', 'manual'] as const;
export type AwcPopoverTriggerType = (typeof AwcPopoverTriggerTypeTypes)[number];
