import { css } from 'lit';

export const userInfoStyle = css`
    :host {
        display: inline-flex;

        --awc-user-info-name-color: var(--awc-user-info-name-theme);
        --awc-user-info-status-color: var(--awc-user-info-status-theme);
        --awc-user-info-name-font-size: var(--awc-font-text-regular-14);
        --awc-user-info-description-font-size: var(--awc-font-caption-2-regular);
    }

    p {
        margin: 0;
    }

    .awc-user-info__wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .awc-user-info--link {
        text-decoration: none;
    }

    .awc-user-info--link .awc-user-info__name {
        transition: color 0.25s ease-in-out;
    }

    .awc-user-info--link:hover .awc-user-info__name {
        color: var(--colors-light-primary-hover);
    }

    .awc-user-info__main {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .awc-user-info__description {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .awc-user-info__description--reverse {
        flex-direction: column-reverse;
    }

    .awc-user-info__name {
        font: var(--awc-user-info-name-font-size);
        color: var(--awc-user-info-name-color);
    }

    .awc-user-info__status {
        font: var(--awc-user-info-description-font-size);
        color: var(--awc-user-info-status-color);
    }

    .awc-user-info__additional {
        display: none;
        font: var(--awc-font-text-regular-14);
        padding: 12px 16px;
        border-radius: 0 var(--corner-radius-l) var(--corner-radius-l) var(--corner-radius-l);
        overflow-wrap: anywhere;
    }

    .awc-user-info__additional.empty:not(.awc-user-info__additional--none) {
        display: block;
    }

    .awc-user-info__additional--complete {
        background-color: rgba(53, 211, 172, 0.1);
    }

    .awc-user-info__additional--complete {
        color: var(--colors-light-success);
    }

    .awc-user-info__additional--fail {
        background-color: rgba(255, 113, 136, 0.1);
    }

    .awc-user-info__additional--fail {
        color: var(--colors-light-warning);
    }
`;
