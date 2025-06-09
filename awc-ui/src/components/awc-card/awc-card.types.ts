const AwcCardTargetTypes = ['_blank', '_self', '_parent', '_top'] as const;
export type AwcCardTarget = (typeof AwcCardTargetTypes)[number];
