import { css } from 'lit';

export const switcherStyle = css`
    :host {
        display: inline-block;
        --awc-switcher-width: var(--awc-switcher-width-regular);
        --awc-switcher-height: var(--awc-switcher-height-regular);

        --awc-switcher-roller: var(--awc-switcher-roller-regular);
        --awc-switcher-roller-move: var(--awc-switcher-roller-move-regular);

        --awc-switcher-background: var(--awc-switcher-background-theme);
        --awc-switcher-background-hover: var(--awc-switcher-background-hover-theme);

        --awc-switcher-background-checked: var(--awc-switcher-custom-color, var(--awc-switcher-background-checked-theme));

        --awc-switcher-background-checked-hover: var(--awc-switcher-background-checked-hover-theme);

        --awc-switcher-label-color: var(--awc-switcher-label-theme);

        --awc-switcher-width-regular: 35px;
        --awc-switcher-height-regular: 20px;

        --awc-switcher-width-small: 28px;
        --awc-switcher-height-small: 16px;

        --awc-switcher-roller-regular: 14px;
        --awc-switcher-roller-small: 12px;

        --awc-switcher-roller-move-regular: 3px;
        --awc-switcher-roller-move-small: 2px;
    }

    :host([size='small']) {
        --awc-switcher-width: var(--awc-switcher-width-small);
        --awc-switcher-height: var(--awc-switcher-height-small);
        --awc-switcher-roller: var(--awc-switcher-roller-small);
        --awc-switcher-roller-move: var(--awc-switcher-roller-move-small);
    }

    .awc-switcher__label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        color: var(--awc-switcher-label-color);
        font: var(--awc-base-font, var(--awc-font-text-regular-14));
    }

    .awc-switch {
        position: relative;
        cursor: pointer;
        width: var(--awc-switcher-width);
        height: var(--awc-switcher-height);
        background-color: var(--awc-switcher-background);
        display: flex;
        align-items: center;
        border-radius: var(--corner-radius-circular);
        transition:
            background-color 0.3s ease-in-out,
            filter 0.3s ease-in-out;
    }

    .awc-switch:focus-visible {
        outline: 1px solid var(--colors-light-focus);
    }

    /* TODO add gray color variable */
    :host([variant='gray'][checked]) .awc-switch {
        background-color: #929bb6;
    }

    :host([variant='gray'][checked]:hover) .awc-switch {
        background-color: #929bb6;
        opacity: 0.9;
    }

    :host([variant='white']) .awc-switch {
        border: 1px solid transparent;
    }

    :host([variant='white'][checked]) .awc-switch {
        background-color: var(--colors-light-white);
        border: 1px solid #929bb6;
    }

    :host([variant='white'][checked]:hover) .awc-switch {
        background-color: var(--colors-light-white);
        opacity: 0.9;
    }

    :host([variant='white'][checked]) .awc-switch::before {
        background-color: #929bb6;
    }

    .awc-switch::before {
        content: '';
        position: relative;
        left: var(--awc-switcher-roller-move);
        width: var(--awc-switcher-roller);
        height: var(--awc-switcher-roller);
        background-color: var(--colors-light-white);
        border-radius: var(--corner-radius-circular);
        transition: transform 0.3s ease;
    }

    :host([checked]) .awc-switch::before {
        transform: translateX(100%);
    }

    :host(:hover) .awc-switch {
        background-color: var(--awc-switcher-background-hover);
    }

    :host([checked]) .awc-switch {
        background-color: var(--awc-switcher-background-checked);
    }

    :host([checked]) .awc-switch::after {
        transform: translateX(100%);
    }

    :host([checked]:hover) .awc-switch {
        background-color: var(--awc-switcher-background-checked-hover);
    }

    :host([checked][custom-color]:hover) .awc-switch {
        background-color: var(--awc-switcher-custom-color);
        filter: brightness(95%);
    }

    :host([disabled]) {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    /* .awc-switch:focus-visible .awc-switch__focus {
    content: '';
    position: absolute;
    border: 3px solid #839FF633; 
    inset: -3px;
    border-radius: var(--corner-radius-circular);
    pointer-events: none;
  } */
`;
