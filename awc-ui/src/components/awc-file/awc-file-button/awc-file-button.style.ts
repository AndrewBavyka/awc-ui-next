import { css } from 'lit';

export const awcFileButtonStyles = css`
    :host {
        display: var(--awc-file-button-display, inline-flex);
        max-width: 100%;
        position: relative;
    }

    .awc-file-button {
        --awc-file-button-height: 40px;

        cursor: pointer;
        width: 100%;
        height: var(--awc-file-button-height);
        padding: 10px 16px;
        display: flex;
        align-items: center;
        user-select: none;
        justify-content: var(--awc-file-button-justify, space-between);
        gap: var(--spacing-s);
        border: 1px solid var(--awc-file-button-border-color, rgba(55, 97, 233, 0.35));
        border-radius: var(--corner-radius-s);
        color: var(--colors-light-primary);
        font: var(--awc-font-text-medium-14);
        background: var(--awc-file-button-background, transparent);
        transition: var(--awc-file-button-transition, background 0.3s ease);
    }

    .awc-file-button__label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .awc-file-button:focus-visible {
        outline: none;
    }

    .awc-file-button:focus-visible {
        border-color: var(--colors-light-secondary);
    }

    @media (hover: hover) {
        .awc-file-button:hover {
            background: var(--awc-file-button-background-hover, rgba(55, 97, 233, 0.08));
        }

        .awc-file-button:active {
            background: var(--awc-file-button-background-hover, rgba(55, 97, 233, 0.16));
        }
    }

    @media (hover: none) {
        .awc-file-button:active {
            background: var(--awc-file-button-background-hover, rgba(55, 97, 233, 0.1));
        }
    }
`;
