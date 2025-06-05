import { css } from 'lit';

export const checkboxGroupStyle = css`
    :host {
        --awc-checkbox-group-title-color: var(--awc-checkbox-group-title-theme);
    }

    .awc-checkbox-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .awc-checkbox-group__label {
        color: var(--awc-checkbox-group-title-color);
        font: var(--awc-font-text-medium-14);
    }

    .awc-checkbox-group__options {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-l);
    }

    :host([horizontal]) .awc-checkbox-group__options {
        flex-direction: row;
    }

    .awc-checkbox-group__hint {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }
`;
