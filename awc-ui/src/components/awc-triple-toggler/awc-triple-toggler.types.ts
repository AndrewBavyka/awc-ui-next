const AwcToggleStateTypes = ['first', 'second', 'third'] as const;
export type AwcToggleState = typeof AwcToggleStateTypes[number];