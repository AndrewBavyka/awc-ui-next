const AwcFileDisplayTypes = ['grid', 'list_block', 'list'] as const;
export type AwcFileDisplayType = (typeof AwcFileDisplayTypes)[number];

const AwcFileVariantTypes = ['accordion', 'regular', 'compact'] as const;
export type AwcFileVariant = (typeof AwcFileVariantTypes)[number];
