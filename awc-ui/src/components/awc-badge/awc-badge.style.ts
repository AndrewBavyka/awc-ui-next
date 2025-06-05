import { css } from 'lit';

export const badgeStyle = css`
    :host {
        display: inline-block;
        contain: content;
    }

    :host .awc-badge {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: var(--corner-radius-circular);
    }

    .awc-badge.warning {
        background-color: var(--colors-light-warning);
    }

    .awc-badge.primary {
        background-color: var(--colors-light-primary);
    }
`;
