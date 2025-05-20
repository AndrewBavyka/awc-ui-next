import { css } from 'lit';

export const iconStyle = css`
    :host {
        display: flex;
        fill: var(--colors-light-secondary);
        // fixes incorrect display in firefox (verified by awc-die)
        min-height: 16px;
        min-width: 16px;
    }

    .awc-icon {
        display: flex;
        max-width: max-content;
    }

    :host([icon-scale]) .awc-icon {
        width: var(--awc-icon-size);
        height: var(--awc-icon-size);
    }

    .awc-icon {
        width: var(--awc-icon-size);
        height: var(--awc-icon-size);
    }
`;
