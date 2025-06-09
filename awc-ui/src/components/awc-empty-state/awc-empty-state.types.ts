const AwcEmptyStateSizeTypes = ['small', 'large'] as const;
export type AwcEmptyStateSize = (typeof AwcEmptyStateSizeTypes)[number];
