import { css } from 'lit';

export const avatarGroupStyle = css`
    :host {
        display: inline-flex;
    }

    .awc-avatar-group {
        display: inline-flex;
        align-items: center;
    }

    .awc-avatar-group__counter {
        display: block;
        position: relative;
        z-index: 1;
        margin-left: -10px;
        display: flex;
        min-width: 24px;
        height: 24px;
        font: var(--awc-font-caption-2-regular);
        align-items: center;
        justify-content: center;
        background-color: var(--colors-light-secondary);
    }

    .awc-avatar-group__counter p {
        color: var(--colors-light-white);
    }

    .awc-avatar-group__counter.circle {
        border-radius: var(--corner-radius-circular);
        border: 2px solid var(--colors-light-white);
    }

    .awc-avatar-group__counter.size_24 {
        width: 24px;
        height: 24px;
    }

    .awc-avatar-group__counter.size_24 p {
        font: var(--awc-font-caption-2-regular);
    }

    .awc-avatar-group__counter.size_32 {
        width: 32px;
        height: 32px;
    }

    .awc-avatar-group__counter.size_32 p {
        font: var(--awc-font-caption-1-regular);
    }

    .awc-avatar-group__counter.hidden {
        display: none;
    }
`;
