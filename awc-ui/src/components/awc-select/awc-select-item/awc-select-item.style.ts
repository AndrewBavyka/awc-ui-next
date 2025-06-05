import { css } from 'lit';

export const awcSelectItemStyles = css`
    :host {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
    }

    :host([disabled]),
    :host([disabled]) .awc-select-item {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }

    .awc-select-item {
        font: var(--awc-base-font, var(--awc-font-text-regular-14));
        color: var(--colors-light-text);
        cursor: pointer;
        list-style-type: none;
        padding: var(--awc-select-item-padding, 10px 12px);
        transition:
            background-color 0.3s ease,
            border 0.3s ease;
        user-select: none;
        background-color: var(--awc-select-item-background, transparent);
        border: 1px solid transparent;
        position: relative;
    }

    :host(:focus) .awc-select-item,
    :host(:focus-visible) .awc-select-item {
        outline: none;
        border: 1px solid var(--colors-light-focus);
    }

    :host(:not([selected])) .awc-select-item:hover {
        background-color: var(--colors-light-input-background-hover);
    }

    :host([selected]) .awc-select-item {
        background-color: var(--awc-select-item-background, var(--colors-light-input-background-hover));
    }
`;
