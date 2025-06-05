import { css } from 'lit';

export const inputStyle = css`
    :host {
        --small: 36px;
        --medium: 40px;
        --large: 48px;

        --awc-input-background-color: var(--awc-input-background-theme);
        --awc-input-background-hover-color: var(--awc-input-background-hover-theme);
        --awc-input-background-focus-color: var(--awc-input-background-focus-theme);

        --awc-input-label-color: var(--awc-input-title-theme);
        --awc-input-text-color: var(--awc-input-text-theme);
        --awc-input-placeholder-color: var(--awc-input-placeholder-theme);

        --awc-input-border-focus-color: var(--awc-input-border-focus-theme);
    }

    .awc-input__main {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .awc-input__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .awc-input__slot ::slotted(*) {
        padding-left: var(--spacing-s);
    }

    .awc-input__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
    }

    .awc-input {
        position: relative;
        padding: 0 14px;
        max-width: 100%;

        font: var(--awc-font-text-regular-15);

        color: var(--awc-input-text-color);
        background-color: var(--awc-input-background-color);

        border: none;
        border-radius: var(--corner-radius-m);
        outline: 1px solid transparent;

        transition:
            outline-color 0.25s ease-out,
            background-color 0.25s ease,
            border-color 0.25s ease;
    }

    :host([size='small']) .awc-input {
        height: var(--small);
    }

    :host([size='medium']) .awc-input {
        height: var(--medium);
    }

    :host([size='large']) .awc-input {
        height: var(--large);
    }

    .awc-input::placeholder {
        color: var(--awc-input-placeholder-color);
    }

    .awc-input:hover {
        background: var(--awc-input-background-hover-color);
    }

    .awc-input:focus {
        outline: 1px solid var(--awc-input-border-focus-color);
        background-color: var(--awc-input-background-focus-color);
    }

    /* .awc-input:focus {
    outline: none;
    background: var(--colors-light-white);
    border: 1px solid #839ff6;
  }

  .awc-input:focus + .awc-input__focus {
    content: "";
    z-index: 1;
    position: absolute;
    border: 3px solid #839ff633;
    inset: -3px;
    border-radius: var(--corner-radius-l);
    pointer-events: none;
  } */

    .awc-input__label {
        max-width: max-content;
        display: inline-block;
        padding: 0;
        margin-bottom: var(--spacing-s);
        font: var(--awc-base-font, var(--awc-font-text-medium-14));
        color: var(--awc-input-label-color);
    }

    :host([required]) .awc-input__label::after {
        content: '*';
        color: var(--colors-light-warning);
        margin-left: 4px;
    }

    :host([disabled]) .awc-input {
        opacity: 0.5;
        cursor: not-allowed;
    }

    :host([readonly]) .awc-input {
        cursor: not-allowed;
    }

    .awc-input__password {
        display: flex;
        position: absolute;
        border: none;
        padding: 0;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        cursor: pointer;
    }

    .awc-input.has-padding-icon {
        padding: 0 55px 0 14px;
    }

    .awc-input__progress {
        display: flex;
        align-items: stretch;
        justify-content: flex-end;
        width: 22px;
        height: 22px;
        border-radius: var(--corner-radius-circular);
        position: absolute;
        border: none;
        padding: 0;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        transition: background 0.3s ease;
        background: conic-gradient(var(--colors-light-primary) var(--progress), var(--colors-light-stroke) 0deg);
    }

    .awc-input__progress.awc-input__progress--percent {
        background: conic-gradient(var(--colors-light-secondary) var(--progress), var(--colors-light-stroke) 0deg);
    }

    .awc-input__progress::before {
        content: attr(length);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 50%;
        background-color: var(--colors-light-white);
        margin: 3px;
        width: 100%;
    }

    .awc-input__progress.awc-input__progress--length-warning {
        background: var(--colors-light-warning);
    }

    .awc-input__progress--length-warning.awc-input__progress::before {
        background: none;
        color: var(--colors-light-white);
        font: var(--awc-font-caption-3-regular);
        letter-spacing: -0.5px;
    }

    .awc-input__progress--length-warning.awc-input__progress--small-font.awc-input__progress::before {
        font-size: 8px;
    }

    .awc-input__arrows {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        border: none;
        padding: 0;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
    }

    .awc-input__arrow--up,
    .awc-input__arrow--down {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-input__arrow--up svg,
    .awc-input__arrow--down svg {
        transition: color 0.3s ease;
        color: var(--colors-light-secondary);
    }

    .awc-input__arrow--up:hover svg,
    .awc-input__arrow--down:hover svg {
        color: var(--colors-dark-dark-violet);
    }

    .awc-input__arrow--up {
        transform: rotate(270deg);
    }

    .awc-input__arrow--down {
        transform: rotate(90deg);
    }

    .awc-input__error,
    .awc-input__hint {
        margin-top: var(--spacing-s);
        font: var(--awc-font-caption-1-regular);
    }

    .awc-input__hint {
        color: var(--colors-light-secondary);
    }

    .awc-input__error {
        color: var(--colors-light-warning);
    }

    .awc-input.awc-input--error {
        border-color: var(--colors-light-warning);
    }

    :host([static-error][custom-error][required]) .awc-input {
        border-color: var(--colors-light-warning);
    }

    .awc-input[type='search']::-webkit-search-decoration,
    .awc-input[type='search']::-webkit-search-cancel-button,
    .awc-input[type='search']::-webkit-search-results-button,
    .awc-input[type='search']::-webkit-search-results-decoration {
        -webkit-appearance: none;
    }

    .awc-input[type='number']::-webkit-inner-spin-button,
    .awc-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .awc-input[type='number'] {
        -moz-appearance: textfield;
    }

    .awc-input__search {
        display: inline-flex;
        position: absolute;
        border: none;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
    }
`;
