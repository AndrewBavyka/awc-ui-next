import { css } from 'lit';

export const modalStyles = css`
    :host {
        --awc-modal-user-min-height: var(--awc-modal-min-height);
        --awc-modal-padding: 20px;
    }

    .awc-modal {
        display: none;
    }

    :host([opened]) .awc-modal {
        display: block;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        min-height: var(--awc-modal-user-min-height, auto);
        background-color: rgba(0, 0, 0, 0.55);
        animation: fade-modal 0.3s;
        overflow-y: auto;
        pointer-events: auto;
    }

    @keyframes fade-modal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    :host([opened]) .awc-modal__content {
        visibility: visible;
        width: clamp(90vw, 20em, 100vw);
        transform: translateX(0px) translateY(-50%) translateZ(0px) perspective(1px);
    }

    @keyframes scale-animation {
        0% {
            transform: scale3d(0.5, 0.5, 0.5);
            opacity: 0;
        }
        100% {
            transform: scale3d(1, 1, 1);
            opacity: 1;
        }
    }

    :host .awc-modal__content {
        margin: 0 auto;
        visibility: hidden;
        position: relative;
        top: 50vh;
        max-height: calc(100vh - 96px);
        max-width: 610px;
        transform: translateX(-50%) translateY(-50%);
        background-color: transparent;
    }

    .awc-modal-container {
        will-change: transform;
        display: block;
        background-color: var(--colors-light-white);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transform: scale3d(1, 1, 1);
        animation: scale-animation 0.3s ease-out forwards;
        border-radius: var(--corner-radius-xl);
    }

    :host(:not([customizable])) .awc-modal-container {
        overflow: hidden;
    }

    :host([heading]) .awc-modal__header--modal {
        justify-content: flex-end;
        align-items: center;
    }

    .awc-modal__header--modal {
        position: sticky;
        z-index: 1;
        top: 0;
        background-color: var(--colors-light-white);
        display: flex;
    }

    .awc-modal-title {
        margin: 0;
        padding: 0;
        font: var(--awc-font-h4-regular);
        color: var(--colors-light-titles);
    }

    .awc-modal__close {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
    }

    .awc-modal__close svg {
        transition: fill 0.3s ease;
        fill: var(--colors-light-secondary);
    }

    .awc-modal__close:hover svg {
        fill: var(--colors-light-primary);
    }

    .awc-modal__body {
        position: relative;
        max-height: clamp(50vh, 75vh, 100vh);
        overflow-y: auto;
        padding: var(--awc-modal-padding);
    }

    .awc-modal__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 15px 20px;
        border-top: 1px solid var(--colors-light-stroke);
    }

    .awc-modal__footer--popup {
        border-top: none;
        padding: 0;
    }

    .awc-modal__footer--none {
        display: none;
    }

    .awc-modal__description {
        margin: 0;
        padding: 0;
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }

    .awc-modal__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-sm);
    }

    @media screen and (max-width: 576px) {
        .awc-modal__body {
            position: relative;
            max-height: clamp(50vh, 20rem, 100vh);
            overflow-y: auto;
        }

        .awc-modal__footer {
            flex-direction: column;
            padding: 6px 20px;
            gap: var(--spacing-m);
        }

        .awc-modal__buttons {
            flex-direction: column;
            width: 100%;
        }

        .awc-modal__buttons ::slotted(awc-button) {
            display: flex;
            width: 100%;
        }
    }
`;
