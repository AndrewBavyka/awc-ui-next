const AwcCheckboxSizeTypes = ['regular', 'small'] as const;
export type AwcCheckboxSize = typeof AwcCheckboxSizeTypes[number];