export interface IProgressUpdateEvent {
    value: number;
    maxReached: boolean;
}

const AwcProgressBarSizeTypes = ['extrasmall', 'small', 'medium', 'large'] as const;
export type AwcProgressBarSize = typeof AwcProgressBarSizeTypes[number];