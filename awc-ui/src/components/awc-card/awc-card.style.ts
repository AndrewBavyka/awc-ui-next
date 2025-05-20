import { css } from 'lit';

export const cardStyle = css`
    :host {
        display: flex;
    }

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .awc-card {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: var(--corner-radius-l);
        background-color: var(--colors-light-white);
        border: 1px solid var(--colors-light-stroke);
        transition:
            border 0.3s ease,
            box-shadow 0.3s ease;
    }

    .awc-card:hover {
        border: 1px solid transparent;
        box-shadow: 0px 5px 20px 0px #4048621a;
    }

    .awc-card:focus-visible {
        outline: none;
        border: 1px solid var(--colors-light-secondary);
        box-shadow: 0px 5px 20px 0px #4048621a;
    }

    .awc-card__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .awc-card__icon {
        position: relative;
        padding: var(--awc-card-icon-padding, 12px);
        z-index: 1;
    }

    .awc-card__icon::before {
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--corner-radius-circular);
        background-color: var(--awc-card-color);
        opacity: 0.1;
        z-index: -1;
    }

    .awc-card__icon ::slotted(awc-icon[type='icon']) {
        fill: var(--awc-card-color);
    }

    .awc-card__icon.awc-card__icon--module::before {
        background-color: var(--colors-light-input-background);
        opacity: 1;
    }

    .awc-card__main {
        margin-top: var(--spacing-sm);
        display: flex;
        flex-direction: column;
        gap: 4px;
        word-wrap: break-word;
        text-align: start;
    }

    .awc-card__title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-titles);
    }

    .awc-card__subtitle {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }

    .awc-card__footer {
        padding-right: 15px;
    }
`;
