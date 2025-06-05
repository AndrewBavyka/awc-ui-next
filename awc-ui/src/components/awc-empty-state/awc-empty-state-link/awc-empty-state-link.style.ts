import { css } from 'lit';

export const emptyStateLinkStyle = css`
    :host {
        display: inline-flex;
        align-items: center;
        gap: 20px;
    }

    .awc-empty-state-link {
        text-decoration: none;
        font: var(--awc-font-text-regular-15);
        color: var(--colors-light-primary);
        transition: color 0.3s ease;
        cursor: pointer;
    }

    .awc-empty-state-link:hover {
        color: var(--colors-light-link-hover);
    }
`;
