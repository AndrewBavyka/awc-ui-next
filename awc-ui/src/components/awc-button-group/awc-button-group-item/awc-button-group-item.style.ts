import { css } from 'lit';

export const awcButtonGroupItemStyle = css`
    :host {
        display: inline-block;
    }

    .awc-button-group-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 0;
        height: 36px;
        max-height: 36px;
        min-width: 36px;
        padding: 5px;
        border-radius: var(--corner-radius-s);
        border: 1px solid var(--colors-light-stroke);
        background-color: var(--colors-light-white);
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
        border-top: 1px solid var(--colors-light-stroke);
        border-bottom: 1px solid var(--colors-light-stroke);
        transition: border-color 0.2s ease;
    }

    .awc-button-group-item.first {
        border-right: none;
        border-radius: var(--corner-radius-s) 0 0 var(--corner-radius-s);
    }

    .awc-button-group-item.last {
        border-left: none;
        border-radius: 0 var(--corner-radius-s) var(--corner-radius-s) 0;
    }

    .awc-button-group-item.inner-last {
        border-right: 1px solid var(--colors-light-stroke);
    }

    .awc-button-group-item.inner {
        border-radius: 0px;
        border-top: 1px solid var(--colors-light-stroke);
        border-bottom: 1px solid var(--colors-light-stroke);
        transition: color 0.3s ease-in-out 0s;
        border-right: none;
    }

    .awc-button-group-item.inner.inner-last {
        border-right: 1px solid var(--colors-light-stroke);
    }

    .awc-button-group-item > ::slotted(awc-icon) {
        transition: fill 0.3s ease-in-out;
    }

    .awc-button-group-item:hover > ::slotted(awc-icon),
    .awc-button-group-item.inner:hover {
        fill: var(--colors-light-primary);
        color: var(--colors-light-primary);
    }

    :host([expanded]) .awc-button-group-item {
        padding: 8px 20px;
    }

    :host([readonly]) .awc-button-group-item {
        pointer-events: none;
        touch-action: none;
    }

    :host([disabled]) .awc-button-group-item {
        pointer-events: none;
        touch-action: none;
        opacity: 0.5;
    }

    .awc-button-group-item:focus,
    .awc-button-group-item:focus-visible {
        outline: none;
    }

    .awc-button-group-item:focus-visible,
    .awc-button-group-item.inner-last:focus-visible {
        border: 1px solid var(--colors-light-focus);
    }

    /* .awc-button-group-item:focus-visible::before {
    content: "";
    z-index: 1;
    position: absolute;
    inset: -3px;
    border: 3px solid #839ff633;
    pointer-events: none;
    border-radius: var(--corner-radius-s);
  } */

    .awc-button-group-item.first:focus-visible::before {
        border-radius: var(--corner-radius-l) 0 0 var(--corner-radius-l);
    }

    .awc-button-group-item.inner:focus-visible::before {
        border-radius: 0;
    }

    .awc-button-group-item.last:focus-visible::before {
        border-radius: 0 var(--corner-radius-l) var(--corner-radius-l) 0;
    }
`;
