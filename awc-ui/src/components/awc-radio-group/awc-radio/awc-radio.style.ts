import { css } from 'lit';

export const radioStyle = css`
    :host {
        display: inline-flex;
        position: relative;

        --awc-radio-background: var(--awc-radio-background-theme);
        --awc-radio-background-hover: var(--awc-radio-background-hover-theme);

        --awc-radio-checked-background: var(--awc-radio-custom-color, var(--awc-radio-background-checked-theme));

        --awc-radio-checked-background-hover: var(--awc-radio-background-checked-hover-theme);

        --awc-radio-border: var(--awc-radio-border-theme);

        --awc-radio-label: var(--awc-radio-label-theme);

        --awc-radio-size: var(--awc-radio-size-regular);
        --awc-radio-checked: var(--awc-radio-checked-regular);

        --awc-radio-size-regular: 20px;
        --awc-radio-checked-regular: 6px;

        --awc-radio-size-small: 16px;
        --awc-radio-checked-small: 4.5px;
    }

    :host([size='small']) {
        --awc-radio-size: var(--awc-radio-size-small);
        --awc-radio-checked: var(--awc-radio-checked-small);
    }

    .awc-radio__wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .awc-radio__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .awc-radio:focus {
        outline: none;
    }

    .awc-radio:focus-visible > .awc-radio__label::before {
        outline: 1px solid var(--colors-light-focus);
    }

    .awc-radio__label {
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin: 0;

        font: var(--awc-base-font, var(--awc-font-text-regular-14));
        color: var(--awc-radio-label);
    }

    .awc-radio__label::before {
        content: '';
        display: inline-block;
        box-sizing: border-box;

        outline: 1px solid transparent;

        height: var(--awc-radio-size);
        width: var(--awc-radio-size);

        border-radius: var(--corner-radius-circular);
        border: 1px solid var(--awc-radio-border);

        transition:
            background-color 0.25s ease,
            filter 0.25s ease,
            border-color 0.25s ease,
            outline-color 0.25s ease-in-out;
        animation: borderDecreaseAnimation 0.25s ease forwards;
    }

    @keyframes borderDecreaseAnimation {
        from {
            border-width: var(--awc-radio-checked);
        }
        to {
            border-width: 1px;
        }
    }

    .checked .awc-radio__label::before {
        animation: borderIncreaseAnimation 0.25s ease forwards;
        border: 6px solid var(--awc-radio-checked-background);
        background-color: var(--awc-radio-background);
    }

    :host(:not([disabled])) .awc-radio__wrapper:hover .awc-radio__label::before {
        transition:
            background-color 0.25s,
            filter 0.25s ease;
        background-color: var(--awc-radio-background-hover);
    }

    :host([checked]:not([disabled])) .awc-radio__wrapper:hover .awc-radio__label::before {
        transition:
            background-color 0.25s,
            filter 0.25s ease;
        border-color: var(--awc-radio-checked-background-hover);
        background-color: var(--awc-radio-background);
    }

    :host([checked][custom-color]:not([disabled])) .awc-radio__wrapper:hover .awc-radio__label::before {
        filter: brightness(90%);
        border-color: var(--awc-radio-checked-background);
        transition:
            border-color 0.25s,
            filter 0.25s ease;
    }

    :host([disabled]) .awc-radio {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
    }

    @keyframes borderIncreaseAnimation {
        from {
            border-width: 1px;
        }
        to {
            border-width: var(--awc-radio-checked);
        }
    }

    .awc-radio__label.radio--error::before {
        border-color: var(--colors-light-warning);
    }

    :host([static-error]) .awc-radio__label.radio--error,
    .awc-radio__label.radio--error {
        color: var(--colors-light-warning);
    }

    .awc-radio__error {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-warning);
    }

    /* :host .radio:focus-visible::before{
    content: '';
    position: absolute;
    border: 3px solid #839FF633; 
    inset: -3px;
    border-radius: var(--corner-radius-circular);
    pointer-events: none;
    }

    :host([checked]) .radio:focus-visible {
    border: 1px solid var(--colors-light-primary);;
    }  
  */
`;
