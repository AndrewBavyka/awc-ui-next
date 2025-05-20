import { css } from 'lit';

export const dividerStyle = css`
    :host {
        --spacing-none: 0;
        --awc-divider-background: var(--awc-divider-background-theme);
        --awc-divider-text-color: var(--awc-divider-text-theme);
    }

    .awc-divider {
        position: relative;
        padding: var(--awc-divider-spacing) 0;
        text-align: center;
        color: var(--awc-divider-text-color);
    }

    .awc-divider__line {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background-color: var(--awc-divider-background);
    }

    .awc-divider__text::before {
        content: '';
        top: 50%;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: var(--awc-divider-background);
    }

    .awc-divider__text {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 11px;
        font: var(--awc-font-caption-1-regular);
        position: relative;
        white-space: nowrap;
    }

    .awc-divider__text::after {
        content: '';
        top: 50%;
        right: 0;
        height: 1px;
        width: 100%;
        background-color: var(--awc-divider-background);
    }
`;
