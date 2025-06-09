const AwcBadgeColorTypes = ['primary', 'warning'] as const;
export type AwcBadgeColor = (typeof AwcBadgeColorTypes)[number];
