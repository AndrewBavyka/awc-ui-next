import { css } from 'lit';

export const checkboxStyle = css`
    :host {
        display: inline-flex;

        --awc-checkbox-size: var(--awc-checkbox-size-regular);
        --awc-checkbox-mark: var(--awc-checkbox-mark-regular);

        --awc-checkbox-mark-regular: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        --awc-checkbox-mark-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 10L9 13L15 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

        --awc-checkbox-size-small: 16px;
        --awc-checkbox-size-regular: 20px;

        --awc-checkbox-background: var(--awc-checkbox-background-theme);
        --awc-checkbox-background-hover: var(--awc-checkbox-background-hover-theme);

        --awc-checkbox-background-checked: var(--awc-checkbox-custom-color, var(--awc-checkbox-background-checked-theme));
        --awc-checkbox-background-checked-hover: var(--awc-checkbox-background-checked-hover-theme);

        --awc-checkbox-border-color: var(--awc-checkbox-custom-color, var(--awc-checkbox-border-theme));
        --awc-checkbox-border-color-hover: var(--awc-checkbox-border-hover-theme);

        --awc-checkbox-border-color-checked: var(--awc-checkbox-background);

        --awc-checkbox-label: var(--awc-checkbox-label-theme);
    }

    :host([size='small']) {
        --awc-checkbox-size: var(--awc-checkbox-size-small);
        --awc-checkbox-mark: var(--awc-checkbox-mark-small);
    }

    .awc-checkbox__wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .awc-checkbox__container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: var(--awc-checkbox-size);
        height: var(--awc-checkbox-size);
    }

    /* :host([focused]:hover) span {
    background-color: var(--colors-light-primary-hover);
    border-color: var(--colors-light-primary-hover);
  } */

    :host([checked]) .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        outline-color: var(--awc-checkbox-border-color-checked);
        transition: background-color 0.3s ease-out;
    }

    :host([checked]) .awc-checkbox__label:hover .awc-checkbox {
        transition: background-color 0.3s ease-out;
        background-color: var(--awc-checkbox-background-checked-hover);
        outline-color: var(--awc-checkbox-border-color-checked);
    }

    :host([checked][custom-color]) .awc-checkbox__label:hover .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        filter: brightness(95%);
    }

    :host([disabled]) .awc-checkbox,
    :host([disabled]) .awc-checkbox__label,
    :host([disabled]) .checkbox {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    :host([disabled]:hover) .awc-checkbox {
        background-color: var(--colors-light-white);
    }

    :host([disabled][checked]:hover) .awc-checkbox {
        background-color: var(--awc-checkbox-background-checked);
        /* border-color: var(--awc-checkbox-border-color); */
    }

    .awc-checkbox {
        box-sizing: border-box;
        cursor: pointer;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: var(--awc-checkbox-size);
        height: var(--awc-checkbox-size);
        max-width: var(--awc-checkbox-size);
        max-height: var(--awc-checkbox-size);

        border-radius: var(--corner-radius-s);
        border: 1px solid var(--awc-checkbox-border-color);
        background-color: var(--awc-checkbox-background);

        transition:
            background-color 0.3s ease,
            outline-color 0.3s ease-out;
    }

    .awc-checkbox__label:hover .awc-checkbox {
        transition:
            background-color 0.3s,
            outline-color 0.3s;
        background-color: var(--awc-checkbox-background-hover);
        outline-color: var(--awc-checkbox-border-color-hover);
    }

    .awc-checkbox::after {
        content: var(--awc-checkbox-mark);

        /* display: flex;
    justify-content: center;
    align-items: center; */

        max-width: inherit;
        max-height: inherit;

        transform: scale3d(0, 0, 0);
        transition: transform 0.3s ease;
    }

    :host([checked]) .awc-checkbox::after {
        transform: scale3d(1, 1, 1);
    }

    .checkbox {
        cursor: pointer;
        width: inherit;
        height: inherit;

        position: absolute;

        opacity: 1;
        margin: 0;

        -webkit-appearance: none;
        border-radius: var(--corner-radius-s);
    }

    .checkbox:focus-visible {
        outline-offset: 0px;
        outline: 1px solid var(--colors-light-focus);
    }

    /* :host .checkbox:focus-visible::before {
    content: "";
    position: absolute;
    border: 3px solid #839ff633;
    inset: -3px;
    border-radius: var(--corner-radius-m);
    pointer-events: none;
  }

  :host([checked]) .checkbox:focus-visible {
    border: 1px solid var(--colors-light-primary);
  } */

    .awc-checkbox__label {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        color: var(--awc-checkbox-label);
        font: var(--awc-base-font, var(--awc-font-text-regular-14));
    }

    :host([static-error]) .awc-checkbox__label.checkbox--error,
    .awc-checkbox__label.checkbox--error {
        color: var(--colors-light-warning);
    }

    .awc-checkbox__error {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-warning);
    }

    .checkbox.checkbox--error {
        outline: 1px solid var(--colors-light-warning);
    }

    :host([static-error][custom-error][required]) .awc-checkbox {
        outline-color: var(--colors-light-warning);
    }
`;
