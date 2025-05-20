import { css } from 'lit';

export const popoverStyle = css`
    :host {
        box-sizing: border-box;
        display: var(--awc-popover-display, contents);
    }

    .awc-popover {
        box-sizing: border-box;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        z-index: 99999;
        box-shadow: var(--awc-popover-box-shadow, 0px 2px 15px 0px rgba(64, 72, 98, 0.2));
        transform: scale(0.9);
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        will-change: opacity, transform;
        min-width: var(--awc-popover-min-width);
        max-width: var(--awc-popover-max-width);
        min-height: var(--awc-popover-min-height, 10px);
        max-height: var(--awc-popover-max-height, 300px);
        padding: var(--awc-popover-padding, 12px);
        background-color: var(--colors-light-white);
        border-radius: var(--awc-popover-border-radius, var(--corner-radius-s));
        overflow: var(--awc-popover-overflow, visible);
    }

    :host([strategy='fixed']) .awc-popover {
        position: fixed;
    }

    :host([no-padding]) .awc-popover {
        padding: 0;
    }

    .awc-popover.visible {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        pointer-events: auto;
    }

    :host([position='top']) .awc-popover {
        transform-origin: center bottom;
    }

    :host([position='bottom']) .awc-popover {
        transform-origin: center top;
    }

    :host([position='left']) .awc-popover {
        transform-origin: right center;
    }

    :host([position='right']) .awc-popover {
        transform-origin: left center;
    }

    :host([disabled]) .awc-popover {
        display: none;
    }
`;
