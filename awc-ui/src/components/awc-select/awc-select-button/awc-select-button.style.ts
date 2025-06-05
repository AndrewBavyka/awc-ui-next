import { css } from 'lit';

export const selectButtomStyle = css`
    .awc-select-button {
        padding: 0 14px;
        gap: 10px;
        width: 100%;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        background: none;
        outline: none;
        border: 1px solid transparent;
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-primary);
    }

    .awc-select-button:hover {
        background-color: #f3f4f9;
        transition: 0.3s ease-in-out;
    }

    .awc-select-button__icon {
        fill: var(--colors-light-primary);
    }

    .awc-select-button:focus-visible {
        transition: border 0.3s ease;
        border: 1px solid #839ff6;
        border-radius: var(--corner-radius-m);
    }
`;
