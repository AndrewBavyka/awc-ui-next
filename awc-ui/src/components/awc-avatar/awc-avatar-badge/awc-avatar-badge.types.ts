const AwcAvatarBadgeStatusTypes = ['none', 'online', 'offline', 'complete', 'fail', 'dnd'] as const;
export type AwcAvatarBadgeStatus = (typeof AwcAvatarBadgeStatusTypes)[number];

const AwcAvatarBadgeSizeTypes = ['4', '5', '6', '8', '10', '12', '14', '24', '32'] as const;
export type AwcAvatarBadgeSize = (typeof AwcAvatarBadgeSizeTypes)[number];
