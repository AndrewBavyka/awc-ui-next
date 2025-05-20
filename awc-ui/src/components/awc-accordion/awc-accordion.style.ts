import { css } from 'lit';

export const accordionStyle = css`
    :host {
        display: block;
    }

    :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }
`;
