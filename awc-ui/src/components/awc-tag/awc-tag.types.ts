const AwcTagVariantTypes = ['square', 'circle', 'bullet'] as const;
export type AwcTagVariant = (typeof AwcTagVariantTypes)[number];

const AwcTagColorTypes = [
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
export type AwcTagColor = (typeof AwcTagColorTypes)[number];
