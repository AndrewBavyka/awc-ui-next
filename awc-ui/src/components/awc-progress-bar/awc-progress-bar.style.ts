import { css } from 'lit';

export const progressBarStyle = css`
    :host {
        display: inline-flex;
        width: 100%;
    }

    :host([size='extrasmall']) .awc-progress-bar__track {
        height: 2px;
    }

    :host([size='small']) .awc-progress-bar__track {
        height: 4px;
    }

    :host([size='medium']) .awc-progress-bar__track {
        height: 6px;
    }

    :host([size='large']) .awc-progress-bar__track {
        height: 8px;
    }

    .awc-progress-bar {
        width: inherit;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .awc-progress-bar__label {
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
    }

    .awc-progress-bar__value {
        font: var(--awc-font-text-medium-14);
    }

    .awc-progress-bar__track {
        position: relative;
        width: inherit;
        overflow: hidden;
        border-radius: var(--corner-radius-s);
        background-color: var(--colors-light-stroke-hover);
    }

    .awc-progress-bar__filler {
        width: 0%;
        border-radius: var(--corner-radius-s);
        height: 100%;
        background-color: var(--colors-light-primary);
        transition: width 0.3s ease;
    }
`;
