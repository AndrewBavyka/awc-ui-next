import { css } from 'lit';

export const dialogStyle = css`
    .awc-dialog {
        transition-duration: 0.3s;
        animation-name: fade-dialog-out;
    }

    :host([opened]) .awc-dialog {
        position: fixed;
        z-index: 9998;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.55);
        animation-name: fade-dialog-in;
        transition-duration: 0.2s;
    }

    @keyframes fade-dialog-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fade-dialog-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    :host([opened]) .awc-dialog__content {
        display: block;
        animation: scale-animation 0.3s ease forwards;
    }

    .awc-dialog__content:focus {
        outline: none;
    }

    @keyframes scale-animation {
        0% {
            transform: translate(-50%, -50%) scale3d(0.7, 0.7, 0.7);
        }
        45% {
            transform: translate(-50%, -50%) scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: translate(-50%, -50%) scale3d(0.97, 0.97, 0.97);
        }
        100% {
            transform: translate(-50%, -50%) scale3d(1, 1, 1);
        }
    }

    :host .awc-dialog__content {
        display: none;
        position: absolute;
        left: -9999px;
        width: 100%;
        max-width: 420px;
        overflow: hidden;
        position: absolute;
        z-index: 9999;
        border-radius: var(--corner-radius-xl);
        margin: auto;
        top: 50%;
        left: 50%;
        box-shadow: var(--effects-hover-block);
    }

    :host([variant='info']) .awc-dialog__content {
        background-color: var(--colors-light-primary);
    }

    :host([variant='error']) .awc-dialog__content {
        background-color: var(--colors-light-warning);
    }

    .awc-dialog__body {
        padding: 24px 30px;
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-l);
    }

    .awc-dialog__heading {
        margin: 0;
        user-select: none;
        max-width: 295px;
        text-align: start;
        color: var(--colors-light-white);
        font: var(--awc-font-h4-regular);
        font-size: 22px;
    }

    .awc-dialog__description {
        margin: var(--spacing-2xs) 0 0 0;
        opacity: 0.7;
        color: var(--colors-light-white);
        font: var(--awc-font-text-regular-15);
    }

    .awc-dialog__footer {
        background-color: var(--colors-dark-white);
        flex-wrap: wrap;
    }

    .awc-dialog__buttons {
        flex-wrap: wrap;
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
    }

    .awc-dialog__buttons ::slotted(awc-button) {
        min-width: 110px;
        max-width: 110px;
    }

    @media screen and (max-width: 768px) {
        .awc-dialog__body {
            flex-direction: column;
        }
    }
`;
