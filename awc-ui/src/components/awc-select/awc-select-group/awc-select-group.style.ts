import { css } from 'lit';

export const selectGroupStyle = css`
    :host {
        width: 100%;
    }

    :host([hidden]) {
        display: none;
    }

    .awc-select-group {
        display: flex;
        flex-direction: column;
    }

    .awc-select-group__label {
        color: var(--colors-light-secondary);
        font: var(--awc-font-caption-1-regular);
        padding: 2px 10px;
        margin: 0;
    }
`;
