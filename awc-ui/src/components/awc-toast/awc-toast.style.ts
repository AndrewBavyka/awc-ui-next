import { css } from 'lit';

export const awcToastStyle = css`
    .awc-toast {
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        cursor: var(--awc-toast-cursor, pointer);
        border-radius: var(--corner-radius-m);
        box-shadow: var(--awc-toast-box-shadow, 0px 5px 20px 0px #4048621a);
        padding: var(--awc-toast-padding, 0 16px);
        max-width: var(--awc-toast-max-width, 300px);
        width: var(--awc-toast-width, 100%);
        min-width: var(--awc-toast-min-width, 300px);
        height: var(--awc-toast-height, 48px);
        min-height: var(--awc-toast-min-height, 48px);
        transition: background-color 0.3s ease;
    }

    :host([variant='success']) .awc-toast {
        background: var(--awc-toast-background-color-success, #2fc998eb);
    }

    :host([variant='success']) .awc-toast:hover {
        background: var(--awc-toast-background-color-success-hover, #24b887eb);
    }

    :host([variant='error']) .awc-toast {
        background: var(--awc-toast-background-color-error, #ff7188eb);
    }

    :host([variant='error']) .awc-toast:hover {
        background: var(--awc-toast-background-color-error-hover, #e44662eb);
    }

    :host([variant='info']) .awc-toast {
        background: var(--awc-toast-background-color-info, #919bb6eb);
    }

    :host([variant='info']) .awc-toast:hover {
        background: var(--awc-toast-background-color-info-hover, #7d87a2eb);
    }

    :host([variant='warning']) .awc-toast {
        background: var(--awc-toast-background-color-info, #fd9038eb);
    }

    :host([variant='warning']) .awc-toast:hover {
        background: var(--awc-toast-background-color-info-hover, #fb7c28eb);
    }

    .awc-toast__main {
        width: 100%;
        height: inherit;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 8px;
        min-width: 0;
    }

    .awc-toast__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--awc-toast-icon-color, var(--colors-light-white));
    }

    .awc-toast__text {
        display: flex;
        align-items: center;
        font: var(--awc-font-text-regular-14);
        color: var(--awc-toast-text-color, var(--colors-light-white));
        flex-shrink: 1;
        overflow: hidden;
        white-space: nowrap;
        height: inherit;
    }

    .awc-toast__content {
        display: flex;
        align-items: center;
        font: var(--awc-font-text-regular-14);
        color: var(--awc-toast-content-color, var(--colors-light-white));
        flex-shrink: 0;
        height: inherit;
    }

    .awc-toast__close {
        position: relative;
        z-index: 99999;
        margin-left: auto;
        display: flex;
        cursor: pointer;
    }

    .awc-toast__close svg {
        transition: fill 0.3s ease;
        fill: var(--awc-toast-close-icon-color, rgba(255, 255, 255, 0.5));
    }

    .awc-toast__close:hover svg {
        fill: var(--awc-toast-close-icon-color-hover, var(--colors-light-white));
    }

    ::slotted(.awc-toast-slotted__text) {
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
