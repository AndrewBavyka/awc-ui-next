import { css } from 'lit';

export const chipsStyle = css`
    :host {
        display: inline-block;
    }

    .awc-chips {
        display: flex;
        align-items: center;
        padding: 4px 12px;
        gap: 6px;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
        background-color: var(--colors-light-stroke-hover);
        border-radius: var(--corner-radius-2xl);
        transition: background-color 0.3s ease-in-out;
    }

    .awc-chips.awc-chips__avatar {
        padding: 4px 12px 4px 3px;
    }

    :host([reset-button]) {
        cursor: pointer;
    }

    :host([reset-button]:hover) .awc-chips {
        background-color: var(--colors-light-stroke);
    }

    :host([reset-button]) .awc-chips__reset {
        fill: var(--colors-light-secondary);
        transition: fill 0.3s ease-in-out;
    }

    :host([reset-button]:hover) .awc-chips__reset {
        fill: var(--colors-light-primary);
    }
`;
