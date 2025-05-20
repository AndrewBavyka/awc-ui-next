import { css } from 'lit';

export const awcTooltipStyle = css`
    :host {
        display: var(--awc-tooltip-display, contents);
        box-sizing: border-box;
    }

    .awc-tooltip {
        left: -9999px;
        isolation: isolate;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        z-index: 99999;
        max-width: 240px;
        width: max-content;
        background-color: var(--colors-light-tooltip);
        border-radius: var(--corner-radius-s);
        transform: scale(0.9);
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        will-change: transform, opacity;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
    }

    :host([match-width]) .awc-tooltip {
        width: unset;
        max-width: none;
    }

    :host([strategy='fixed']) .awc-tooltip {
        position: fixed;
    }

    .awc-tooltip.visible {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

    .awc-tooltip__message {
        cursor: default;
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-white);
        padding: var(--awc-tooltip-message-padding, 6px 10px);
        white-space: pre-wrap;
        overflow-wrap: break-word;
        text-align: center;
        margin: 0;
    }

    :host([match-width]) .awc-tooltip__message {
        text-align: start;
    }

    .awc-tooltip__arrow {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--colors-light-tooltip);
        transform: rotate(45deg);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.2s ease-out;
        backface-visibility: hidden;
    }

    .awc-tooltip.visible .awc-tooltip__arrow {
        opacity: 1;
    }

    :host([disabled]) .awc-tooltip {
        display: none;
    }

    :host([position='top']) .awc-tooltip {
        transform-origin: center bottom;
    }

    :host([position='bottom']) .awc-tooltip {
        transform-origin: center top;
    }

    :host([position='left']) .awc-tooltip {
        transform-origin: right center;
    }

    :host([position='right']) .awc-tooltip {
        transform-origin: left center;
    }
`;
