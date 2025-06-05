import { css } from 'lit';

export const segmentSwitcherStyle = css`
    :host {
        display: inline-block;
        width: 100%;
    }

    .awc-segment-switcher {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(32px, 1fr));
        justify-content: space-between;
        align-items: center;
        border-radius: var(--corner-radius-s);
        background-color: var(--colors-light-stroke);
        overflow: hidden;
        padding: 2px;
    }

    .slider {
        position: absolute;
        height: 32px;
        background-color: var(--colors-light-white);
        border-radius: var(--corner-radius-s);
    }
`;
