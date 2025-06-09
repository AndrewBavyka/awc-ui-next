export const AwcAvatarSizeTypes = ['20', '24', '32', '36', '40', '48', '72', '128', '160'] as const;
export type AwcAvatarSize = (typeof AwcAvatarSizeTypes)[number];

export const AwcAvatarRoundedTypes = ['circle', 'square'] as const;
export type AwcAvatarRounded = (typeof AwcAvatarRoundedTypes)[number];

export const AwcAvatarColorTypes = [
    'global-red-2-600',
    'global-red-2-500',
    'global-orange-500',
    'global-yellow-500',
    'global-yellow-300',
    'global-light-green-400',
    'global-light-green-600',
    'global-green-600',
    'global-green-300',
    'global-turquoise-300',
    'global-turquoise-400',
    'global-cyan-300',
    'global-cyan-500',
    'global-blue-600',
    'global-blue-400',
    'global-deep-purple-400',
    'global-deep-purple-600',
    'global-purple-600',
    'global-purple-400',
    'global-red-500',
    'global-red-400',
    'colors-light-secondary',
    'colors-light-text',
    'colors-light-dark-blue',
] as const;
export type AwcAvatarColor = (typeof AwcAvatarColorTypes)[number];

export const AwcAvatarIconTypes = ['none', 'robot', 'user', 'group', 'deleted', 'anonymous', 'undefined'] as const;
export type AwcAvatarIcon = (typeof AwcAvatarIconTypes)[number];

export const AwcAvatarTargetTypes = ['_blank', '_self', '_parent', '_top'] as const;
export type AwcAvatarTargetType = (typeof AwcAvatarTargetTypes)[number];
