import { css } from 'lit';

export const dropdownGroupStyle = css`
    :host([label]) .awc-dropdown-group__label {
        display: inline-flex;
        align-items: center;
        height: 30px;
        padding: 0 16px;
        pointer-events: none;
        color: var(--colors-light-secondary);
        font: var(--awc-font-caption-1-regular);
    }

    .awc-dropdown-group__content {
        display: flex;
        flex-direction: column;
    }
`;
