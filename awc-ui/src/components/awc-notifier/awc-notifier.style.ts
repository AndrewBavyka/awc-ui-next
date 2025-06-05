import { css } from 'lit';

export const notifierStyle = css`
    :host {
        display: block;
    }

    .awc-notifier__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 20px;
        min-height: calc(64px - 28px);
        background-color: var(--colors-light-success);
    }

    .awc-notifier__main {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        gap: 40px;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-white);
    }

    .awc-notifier__button {
        cursor: pointer;
        padding: 0;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-notifier__icon {
        fill: var(--colors-light-white);
    }

    .awc-notifier__button:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        border-radius: var(--corner-radius-s);
    }

    .awc-notifier__button .awc-notifier__icon {
        transition: opacity 0.3s ease;
    }

    .awc-notifier__button:hover .awc-notifier__icon,
    .awc-notifier__button:active .awc-notifier__icon {
        opacity: 0.7;
    }
`;
