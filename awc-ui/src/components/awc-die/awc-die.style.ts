import { css } from 'lit';

export const dieStyle = css`
    :host {
        display: block;
        contain: content;
    }

    .awc-die {
        overflow: hidden;
        position: relative;
        padding: 8px 14px 8px 16px;
        max-height: 44px;
        height: calc(44px - 16px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: var(--corner-radius-s);
        gap: var(--spacing-sm);
        z-index: 1;
    }

    .awc-die::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: var(--awc-opacity, 0.1);
        background-color: var(--awc-die-color);
        z-index: -1;
    }

    .awc-die::after {
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: var(--awc-die-color);
    }

    .awc-die__main {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 22px;
        display: flex;
        align-items: center;
        gap: var(--spacing-s);
    }

    .awc-die__content {
        font: var(--awc-font-text-medium-15);
        color: var(--colors-light-titles);
        position: absolute;
        margin: 0;
        white-space: nowrap;
    }

    .awc-die__content.awc-die__content--edit {
        outline: none;
        padding: 0;
        width: 100%;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        font: var(--awc-font-text-medium-15);
        color: var(--colors-light-titles);
    }

    .awc-die__icon {
        cursor: move;
        position: relative;
        display: flex;
    }

    .awc-die__slotted {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }
`;
