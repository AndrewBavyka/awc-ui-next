export const AwcInputTypes = ['text', 'email', 'date', 'time', 'datetime-local', 'month', 'week', 'password', 'number', 'tel', 'url', 'search', 'hidden'] as const;
export type AwcInputType = typeof AwcInputTypes[number];

export const AwcInputAutocompleteTypes = ['on', 'off'] as const;
export type AwcInputAutocompleteType = typeof AwcInputAutocompleteTypes[number];

const AwcInputSizeTypes = ['small', 'medium', 'large'] as const;
export type AwcInputSize = typeof AwcInputSizeTypes[number];
