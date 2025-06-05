import { css } from 'lit';

export const awcSelectStyles = css`
    :host {
        display: var(--awc-select-display, block);
        box-sizing: border-box;
    }

    .awc-select {
        /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start; */
    }

    .awc-select__label {
        display: inline-block;
        padding: 0;
        margin-bottom: var(--spacing-s);
        font: var(--awc-base-font, var(--awc-font-text-medium-14));
        color: var(--awc-input-label-color);
    }

    :host([required]) .awc-select__label::after {
        content: '*';
        color: var(--colors-light-warning);
        margin-left: 4px;
    }

    /* :host([placeholder]) .awc-select__head {
        color: var(--colors-light-secondary);
    } */

    .awc-select__head {
        --awc-select-item-padding: 0;
        --awc-select-item-background: none;

        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--spacing-s);
        cursor: pointer;
        box-sizing: border-box;
        min-height: var(--awc-select-min-height, 40px);
        padding: var(--awc-select-head-padding, 10px 12px);
        border-radius: var(--awc-select-head-border-radius, var(--corner-radius-m));
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
        transition: border-radius 0.3s ease;
    }

    .awc-select__head:focus {
        outline: none;
    }

    .awc-select__head:focus-visible {
        outline: 1px solid var(--colors-light-focus);
    }

    .awc-select__placeholder {
        color: var(--colors-light-secondary);
        font: var(--awc-font-text-regular-14);
    }

    :host([html]) .awc-select__head {
        padding: var(--awc-select-head-padding, 0 12px);
    }

    :host([variant='fill']) .awc-select__head {
        background-color: var(--awc-select-head-background-color, var(--colors-light-input-background));
    }

    .awc-select__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        padding: 0;
    }

    .awc-select__input {
        cursor: auto;
        border: none;
        border-bottom: 1px solid var(--colors-light-stroke);
        padding: 0 8px;
        background-color: transparent;
        width: 100%;
        box-sizing: border-box;
        min-height: 36px;
        margin: 0 auto;
        transition: border-color 0.3s ease;
        font: var(--awc-font-caption-1-regular);
    }

    .awc-select__input:focus {
        outline: none;
        border-bottom: 1px solid var(--colors-dark-primary);
    }

    .awc-select__error,
    .awc-select__hint {
        display: block;
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
    }

    .awc-select__hint {
        color: var(--colors-light-secondary);
    }

    .awc-select__error {
        color: var(--colors-light-warning);
    }

    :host([static-error][custom-error][required]) .awc-select__head {
        border: 1px solid var(--colors-light-warning);
        border-radius: var(--corner-radius-m);
    }

    awc-popover {
        --awc-popover-overflow: hidden auto;
    }

    awc-popover[position='bottom'] {
        --awc-popover-border-radius: 0 0 var(--corner-radius-m) var(--corner-radius-m);
        --awc-popover-box-shadow: 0px 10px 20px 0px rgba(64, 72, 98, 0.2);
    }

    awc-popover[position='bottom'][active] .awc-select__head {
        border-radius: var(--corner-radius-m) var(--corner-radius-m) 0 0;
    }

    awc-popover[position='top'] {
        --awc-popover-border-radius: var(--corner-radius-m) var(--corner-radius-m) 0 0;
        --awc-popover-box-shadow: 0px -2px 15px 0px rgba(64, 72, 98, 0.2);
    }

    awc-popover[position='top'][active] .awc-select__head {
        border-radius: 0 0 var(--corner-radius-m) var(--corner-radius-m);
    }
`;
