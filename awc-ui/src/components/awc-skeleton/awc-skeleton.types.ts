const AwcSkeletonEffectTypes = ['none', 'pulse', 'wave'] as const;
export type AwcSkeletonEffect = typeof AwcSkeletonEffectTypes[number];

const AwcSkeletonRoundedTypes = ['8', '12', 'rounded'] as const;
export type AwcSkeletonRounded = typeof AwcSkeletonRoundedTypes[number];

const AwcSkeletonColorTypes = ['primary', 'secondary'] as const;
export type AwcSkeletonColor = typeof AwcSkeletonColorTypes[number];
