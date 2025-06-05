import { css } from 'lit';

export const dropdownItemStyle = css`
    :host {
        cursor: pointer;
    }

    .awc-dropdown-item:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        border-radius: var(--corner-radius-m);
    }

    :host([warning]) .awc-dropdown-item,
    :host([warning]) .awc-dropdown-item ::slotted(awc-icon) {
        color: var(--awc-dropdown-item-color-warning, var(--colors-dark-warning));
        fill: var(--awc-dropdown-item-color-warning, var(--colors-dark-warning));
    }

    .awc-dropdown-item {
        width: 100%;
        background: none;
        border: none;
        box-sizing: border-box;
        padding: 0 16px;
        min-height: 36px;
        display: flex;
        align-items: center;
        gap: calc(var(--spacing-2xs) + var(--spacing-s));
        word-wrap: break-word;
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-text);
        text-align: start;
        text-decoration: none;
        outline-offset: -2px;
        outline: 1px solid transparent;
        transition: background-color 0.3s ease;
    }

    .awc-dropdown-item:hover {
        cursor: pointer;
        background-color: var(--colors-light-input-background);
    }

    .awc-dropdown-item__container {
        width: inherit;
        margin-right: auto;
        display: flex;
        align-items: center;
        gap: calc(var(--spacing-2xs) + var(--spacing-s));
        min-height: inherit;
    }

    :host .awc-dropdown-item__container ::slotted(:nth-child(2)) {
        margin-left: auto !important;
    }

    .awc-dropdown-item__selected {
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--colors-light-primary);
    }
`;
