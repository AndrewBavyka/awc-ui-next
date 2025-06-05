import { css } from 'lit';

export const counterStyle = css`
    :host {
        display: block;
        contain: content;
        max-width: max-content;
    }

    .awc-counter {
        content: '';
        font: var(--awc-font-caption-3-regular);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--colors-light-white);
        background-color: var(--colors-light-primary);
        padding: 0 4px;
        min-width: 8px;
        height: 16px;
        border-radius: var(--corner-radius-circular);
    }

    .awc-counter.more::after {
        content: '+';
        display: block;
    }

    .awc-counter.none {
        display: none;
    }
`;
