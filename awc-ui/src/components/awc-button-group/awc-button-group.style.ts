import { css } from 'lit';

export const awcButtonGroupStyle = css`
    :host {
        display: inline-block;
    }

    .awc-button-group {
        display: inline-flex;
        align-items: center;
    }

    :host([disabled]) .awc-button-group {
        pointer-events: none;
        opacity: 0.5;
        touch-action: none;
    }
`;
