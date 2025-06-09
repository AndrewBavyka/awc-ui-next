const AwcDropdownItemTargetTypes = ['_self', '_blank', '_parent', '_top', 'framename'] as const;
export type AwcDropdownItemTarget = (typeof AwcDropdownItemTargetTypes)[number];
