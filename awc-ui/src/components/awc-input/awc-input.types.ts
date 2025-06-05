export const InputTypes = ['text', 'email', 'date', 'time', 'datetime-local', 'month', 'week', 'password', 'number', 'tel', 'url', 'search', 'hidden'] as const;
export type InputType = (typeof InputTypes)[number];

export const InputAutocompletes = ['on', 'off'] as const;
export type InputAutocompleteType = (typeof InputAutocompletes)[number];

export const InputSizes = ['small', 'medium', 'large'] as const;
export type InputSizeType = (typeof InputSizes)[number];
