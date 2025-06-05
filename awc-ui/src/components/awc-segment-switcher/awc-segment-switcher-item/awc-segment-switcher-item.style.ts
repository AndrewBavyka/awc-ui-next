import { css } from 'lit';

export const segmentSwitcherItemStyle = css`
    :host {
        width: 100%;
        display: inline-block;
        contain: content;
    }

    .awc-segment-switcher__item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font: var(--awc-font-caption-1-medium);
        height: 32px;
        text-align: center;
        text-decoration: none;
        margin: 0;
        border-radius: var(--corner-radius-s);
        color: var(--colors-light-text);
        transition: opacity 0.3s ease;
    }

    /* :host(:not([active])) .awc-segment-switcher__item:hover {
    background-color: rgba(0, 0, 0, 0.07);
  } */

    :host(:not([active])) .awc-segment-switcher__item:active {
        opacity: 0.75;
    }

    :host([active]) .awc-segment-switcher__item {
        /* color: var(--colors-light-titles);
    background-color: var(--colors-light-white);
    border-radius: var(--corner-radius-s); */
    }
`;
