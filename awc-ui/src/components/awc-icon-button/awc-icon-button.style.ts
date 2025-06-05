import { css } from 'lit';

export const awcIconButtonStyles = css`
    :host {
        display: inline-flex;
        box-sizing: border-box;

        --awc-icon-button-background-hover: var(--awc-icon-button-background-hover-theme);
        --awc-icon-button-background-active: var(--awc-icon-button-background-active-theme);
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }

    :host([disabled]),
    :host([disabled]) .awc-icon-button {
        opacity: 0.5;
        pointer-events: none;
    }

    :host([size='20']) .awc-icon-button {
        --awc-icon-button-width: 20px;
        --awc-icon-button-height: 20px;
    }

    :host([size='24']) .awc-icon-button {
        --awc-icon-button-width: 24px;
        --awc-icon-button-height: 24px;
    }

    :host([size='28']) .awc-icon-button {
        --awc-icon-button-width: 28px;
        --awc-icon-button-height: 28px;
    }

    :host([size='30']) .awc-icon-button {
        --awc-icon-button-width: 30px;
        --awc-icon-button-height: 30px;
    }

    :host([size='32']) .awc-icon-button {
        --awc-icon-button-width: 32px;
        --awc-icon-button-height: 32px;
    }

    :host([size='36']) .awc-icon-button {
        --awc-icon-button-width: 36px;
        --awc-icon-button-height: 36px;
    }

    :host([size='40']) .awc-icon-button {
        --awc-icon-button-width: 40px;
        --awc-icon-button-height: 40px;
    }

    .awc-icon-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--awc-icon-button-height);
        width: var(--awc-icon-button-width);
        border-radius: var(--corner-radius-s);
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.3s ease;
    }

    @media (hover: hover) {
        .awc-icon-button:hover {
            background-color: var(--awc-icon-button-background-hover);
        }

        .awc-icon-button:active {
            background-color: var(--awc-icon-button-background-active);
        }
    }

    @media (hover: none) {
        .awc-icon-button:active {
            background-color: var(--awc-icon-button-background-active);
        }
    }

    .awc-icon-button:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        background-color: var(--awc-icon-button-background-hover);
    }

    .awc-icon-button::slotted(awc-icon) {
        position: absolute;
        left: 0;
        top: 0;
    }
`;
