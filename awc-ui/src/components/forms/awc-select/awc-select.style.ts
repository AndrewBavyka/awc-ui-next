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
