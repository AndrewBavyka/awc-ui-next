import { css } from 'lit';

export const stepsStyle = css`
    .awc-steps {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .awc-steps__status {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .awc-steps__sticker {
        font: var(--awc-font-caption-1-regular);
        background-color: var(--colors-light-secondary);
        color: var(--colors-light-white);
        border-radius: var(--corner-radius-l);
        padding: 4px 9px;
    }

    .awc-steps__report {
        color: var(--colors-light-titles);
        font: var(--awc-font-headline-medium-16);
    }

    .awc-steps__progress {
        width: 100%;
        display: flex;
        gap: 4px;
        overflow: hidden;
        overflow-x: auto;
        padding-bottom: 3px;
    }

    .progress-item {
        min-width: 50px;
        width: 100%;
        height: 6px;
        border-radius: var(--corner-radius-s);
        background-color: var(--colors-light-secondary);
        opacity: 0.4;
    }

    .progress-item--current {
        background-color: var(--colors-light-primary);
        opacity: 1;
    }
    .progress-item--past {
        background-color: var(--colors-light-primary);
        opacity: 0.7;
    }

    .progress-item--completed {
        background-color: var(--colors-light-success);
        opacity: 1;
    }

    .progress-item--error {
        background-color: var(--colors-light-warning);
        opacity: 1;
    }
`;
