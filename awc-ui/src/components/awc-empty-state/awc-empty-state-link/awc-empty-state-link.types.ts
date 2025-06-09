const AwcEmptyStateLinkTargetTypes = ['_blank', '_self', '_parent', '_top'] as const;
export type AwcEmptyStateLinkTarget = typeof AwcEmptyStateLinkTargetTypes[number];
