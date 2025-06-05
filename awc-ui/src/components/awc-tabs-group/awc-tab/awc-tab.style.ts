import { css } from 'lit';

export const tabStyle = css`
    :host {
        display: flex;
        padding: 12px 0;
        box-sizing: border-box;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-secondary);
        position: relative;
        cursor: pointer;
        max-width: max-content;
        transition:
            background-color 0.3s,
            color 0.3s,
            border-color 0.3s;
    }

    .awc-tab {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    :host(:hover) {
        color: var(--colors-light-text);
    }

    :host::before,
    :host::after {
        content: '';
        position: absolute;
        display: block;
        opacity: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: rgba(55, 97, 233, 0.35);
        border-radius: var(--corner-radius-m);
        transform-origin: 50% 100%;
        transition:
            0.3s ease,
            transform 0.3s ease;
        transform: scaleX(0);
    }

    :host(:hover)::before,
    :host(:hover)::after {
        transition:
            width 0.3s,
            transform 0.3s ease;
        opacity: 1;
        transform-origin: 50% 100%;
        transform: scaleX(1);
    }

    :host([active]),
    :host([active]:hover) {
        color: var(--colors-light-text);
    }

    :host([active])::before,
    :host([active])::after {
        opacity: 1;
        transform: scaleX(1);
        width: 100%;
        transition:
            width 0.3s ease,
            background-color 0.3s ease;
        background-color: var(--colors-light-primary);
    }

    :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
    }

    :host([hidden]) {
        display: none;
    }
`;
