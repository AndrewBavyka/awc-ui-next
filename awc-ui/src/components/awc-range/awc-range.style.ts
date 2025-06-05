import { css } from 'lit';

export const awcRangeStyle = css`
    .awc-range-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    /* Для WebKit (Chrome, Safari и др.) */
    .awc-range {
        width: 100%;
        height: 4px;
        -webkit-appearance: none;
        background-color: var(--colors-light-stroke);
        border-radius: 99px;
    }

    :host([disabled]) {
        opacity: 0.5;
        touch-action: none;
        pointer-events: none;
    }

    :host([disabled]) .awc-range::-webkit-slider-thumb {
        border: 4px solid #97a3b080;
    }

    :host([disabled]) .awc-range::-moz-range-thumb {
        background-color: var(--colors-light-white);
        border: 4px solid #97a3b080;
    }

    .awc-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        cursor: grab;
        border: 4px solid var(--colors-light-primary);
        transition: border 0.25s ease;
    }

    .awc-range::-webkit-slider-thumb:hover {
        border: 6px solid var(--colors-light-primary);
    }

    /* Для Firefox */
    .awc-range::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--colors-light-white);
        cursor: grab;
        border: 4px solid var(--colors-light-primary);
        transition: border 0.25s ease;
    }

    .awc-range::-moz-range-thumb:hover {
        border: 6px solid var(--colors-light-primary);
    }

    .awc-range::-moz-range-track {
        width: 100%;
        height: 4px;
        background-color: var(--colors-light-stroke);
        border-radius: 99px;
    }

    .awc-range__markers {
        position: relative;
        justify-content: space-between;
        padding: 0;
        margin: 16px 0 16px 0;
        display: flex;
        align-items: center;
    }

    .awc-range-label {
        display: flex;
        align-items: center;
        gap: 4px;
        font: var(--awc-font-text-medium-14);
    }

    .awc-range-label__value {
        margin: 0;
        font: var(--awc-font-text-regular-14);
    }
`;
