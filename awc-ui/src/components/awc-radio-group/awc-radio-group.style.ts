import { css } from 'lit';

export const radioGroupStyle = css`
    :host {
        --awc-radio-group-title-color: var(--awc-radio-group-title-theme);
    }

    .awc-radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .awc-radio-group__label {
        color: var(--awc-radio-group-title-color);
        font: var(--awc-font-text-medium-14);
    }

    .awc-radio-group__options {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-l);
    }

    :host([horizontal]) .awc-radio-group__options {
        flex-direction: row;
    }

    .awc-radio-group__hint {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }
`;
