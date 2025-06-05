import { css } from 'lit';

export const splitButtonStyle = css`
    :host {
        display: inline-block;
        --awc-button-remove-border-radius: 0px;
        --awc-split-button-border-radius: var(--corner-radius-s);
        --awc-split-button-padding: 0 8px;
    }

    :host ::slotted(awc-button) {
        --awc-button-border-radius: var(--awc-split-button-border-radius) var(--awc-button-remove-border-radius) var(--awc-button-remove-border-radius)
            var(--awc-split-button-border-radius);
        border-radius: var(--awc-button-border-radius);
    }

    .awc-split-button {
        display: flex;
        align-items: center;
    }

    awc-button.awc-button-toggler {
        --awc-button-padding-regular: var(--awc-split-button-padding);
        --awc-button-border-radius: var(--awc-button-remove-border-radius) var(--awc-split-button-border-radius) var(--awc-split-button-border-radius)
            var(--awc-button-remove-border-radius);
        border-radius: var(--awc-button-border-radius);

        position: relative;
    }

    .awc-button-toggler::after {
        content: '';
        cursor: pointer;

        position: absolute;
        left: 0;
        top: 4px;
        bottom: 4px;

        width: 1px;

        background-color: var(--colors-light-white);
        opacity: 0.2;
    }
`;
