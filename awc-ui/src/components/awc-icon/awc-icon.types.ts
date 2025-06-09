const AwcIconTypes = ['icon', 'module'] as const;
export type AwcIconType = typeof AwcIconTypes[number];

const AwcIconSizeTypes = ['16', '20', '24', '32', '40'] as const;
export type AwcIconSize = typeof AwcIconSizeTypes[number];