import { css } from 'lit';

export const buttonStyle = css`
    :host {
        display: var(--awc-button-display, inline-flex);
        max-width: 100%;

        --awc-button-border-radius: var(--corner-radius-s);

        --awc-button-padding-large: 0 20px;
        --awc-button-padding-regular: 0 16px;
        --awc-button-padding-small: 0 12px;
        --awc-button-padding-extrasmall: 0 10px;
    }

    .awc-button {
        position: relative;
        text-decoration: none;
        padding: 0;
        border: none;
        position: relative;
        width: 100%;
        gap: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: var(--awc-button-border-radius, var(--awc-button-remove-border-radius));
        cursor: pointer;
        color: var(--colors-light-white);
        transition:
            background-color 0.3s ease,
            color 0.3s,
            border-color 0.3s ease,
            transform 0.3s ease;
        font: var(--awc-font-caption-1-regular);
        background-color: var(--button-background);
    }

    .awc-button:focus {
        outline: none;
    }

    awc-spinner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
    }

    :host ::slotted(awc-spinner) {
        pointer-events: none;
        touch-action: none;
    }

    .awc-button:focus-visible {
        outline: 2px solid var(--colors-light-secondary);
    }

    /* .awc-button:focus-visible:before {
        content: "";
        position: absolute;
        border: 3px solid #839ff633;
        inset: -3px;
        border-radius: var(--corner-radius-m);
        pointer-events: none;
    } */

    :host([disabled]) {
        user-select: none;
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    :host([loading]) {
        pointer-events: none;
        touch-action: none;
        user-select: none;
    }

    .awc-button--disable {
        pointer-events: none;
        touch-action: none;
        user-select: none;
    }

    :host([loading]) .awc-button {
        color: transparent !important;
    }

    /* isBlock */
    :host([block]) .awc-button {
        width: 100%;
    }

    /* Color Primary */
    :host([background='blue']) .awc-button {
        --button-background: var(--colors-light-primary);
    }

    :host([filling]) .awc-button ::slotted(awc-icon) {
        transition: fill 0.3s ease;
        fill: var(--colors-light-white);
    }

    :host([background='blue']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-link-hover);
    }

    :host([background='red']) .awc-button {
        --button-background: var(--colors-light-warning);
    }

    :host([background='red']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
    }

    :host([background='green']) .awc-button {
        --button-background: var(--colors-light-success);
    }

    :host([background='green']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-green-400);
    }

    :host([background='gray']) .awc-button {
        --button-background: var(--colors-light-secondary);
    }

    :host([background='gray']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-secondary-hover);
    }

    /* Color Secondary */
    :host([background='blue'][variant='secondary']) .awc-button {
        --button-background: rgba(55, 97, 233, 0.1);
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-primary-hover);
        color: var(--colors-light-white);
    }

    :host([background='blue'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='red'][variant='secondary']) .awc-button {
        --button-background: rgba(255, 0, 0, 0.1);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
        color: var(--colors-light-white);
    }

    :host([background='red'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='green'][variant='secondary']) .awc-button {
        --button-background: rgba(53, 211, 172, 0.1);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-green-400);
        color: var(--colors-light-white);
    }

    :host([background='green'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary']) .awc-button {
        --button-background: rgba(145, 155, 182, 0.1);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-secondary-hover);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='secondary'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Color transparent */
    :host([background='blue'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #3761e959;
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='transparent']:not([disabled])) .awc-button:hover {
        --button-background: var(--colors-light-primary-hover);
        color: var(--colors-light-white);
    }

    :host([background='blue'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='red'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #ff000059;
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='transparent']:not([disabled])) .awc-button:hover {
        --button-background: var(--global-red-500);
        color: var(--colors-light-white);
    }

    :host([background='red'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='green'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid #35d3ac59;
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='transparent']:not([disabled])) .awc-button:hover {
        background-color: var(--global-green-400);
        color: var(--colors-light-white);
    }

    :host([background='green'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    :host([background='gray'][variant='transparent']) .awc-button {
        --button-background: transparent;
        border: 1px solid var(--colors-light-stroke-hover);
        color: var(--colors-light-text);
    }

    :host([background='gray'][variant='transparent'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-text);
    }

    :host([background='gray'][variant='transparent']:not([disabled])) .awc-button:hover {
        border-color: var(--colors-light-secondary-hover);
        --button-background: var(--colors-light-secondary-hover);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='transparent'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Color link */
    :host([background='blue'][variant='link']) .awc-button {
        --button-background: transparent;
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(55, 97, 233, 0.1);
        color: var(--colors-light-primary);
    }

    :host([background='blue'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-primary);
    }

    :host([background='red'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='red'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(255, 0, 0, 0.1);
        color: var(--colors-light-warning);
    }

    :host([background='red'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-warning);
    }

    :host([background='green'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='green'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(53, 211, 172, 0.1);
        color: var(--colors-light-success);
    }

    :host([background='green'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-success);
    }

    :host([background='gray'][variant='link']) .awc-button {
        --button-background: var(--colors-light-white);
        color: var(--colors-light-text);
    }

    :host([background='gray'][variant='link'][filling]) .awc-button ::slotted(awc-icon) {
        fill: var(--colors-light-text);
    }

    :host([background='gray'][variant='link']:not([disabled])) .awc-button:hover {
        --button-background: rgba(145, 155, 182, 0.1);
        color: var(--colors-light-white);
    }

    :host([background='gray'][variant='link'][filling]) .awc-button:hover ::slotted(awc-icon) {
        fill: var(--colors-light-white);
    }

    /* Size */

    :host([size='large']) .awc-button {
        padding: var(--awc-button-padding-large);
        height: 40px;
        font: var(--awc-font-text-medium-14);
    }

    :host([size='regular']) .awc-button {
        padding: var(--awc-button-padding-regular);
        height: 36px;
        font: var(--awc-font-caption-1-medium);
    }

    :host([size='small']) .awc-button {
        padding: var(--awc-button-padding-small);
        height: 30px;
        font: var(--awc-font-caption-2-regular);
    }

    :host([size='extrasmall']) .awc-button {
        padding: var(--awc-button-padding-extrasmall);
        height: 24px;
        font: var(--awc-font-caption-3-regular);
    }
`;
