const AwcRadioSizeTypes = ['regular', 'small'] as const;
export type AwcRadioSize = typeof AwcRadioSizeTypes[number];