import { css } from 'lit';

export const emptyStateStyle = css`
    /* Large awc-empty-state */

    :host([size='large']) {
        display: flex;
        max-width: 700px;
    }

    :host([size='large']) .awc-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--spacing-l);
    }

    :host([size='large']) .awc-empty-state__main {
        font: var(--awc-font-text-regular-15);
        color: var(--colors-light-text);
    }

    :host([size='large']) .awc-empty-state__title {
        margin: 0;
        margin-bottom: 12px;
        color: var(--colors-light-titles);
        font: var(--awc-font-h3-medium);
    }

    :host([size='large']) .awc-empty-state__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--spacing-l);
    }

    :host([size='large']) .awc-empty-state__links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--spacing-l);
    }

    :host([size='large']) .awc-empty-state__links ::slotted(awc-empty-state-link:not(:last-child))::after {
        content: '';
        display: flex;
        width: 3px;
        height: 3px;
        background-color: var(--colors-dark-secondary);
        border-radius: var(--corner-radius-circular);
    }

    /* Small awc-empty-state */

    :host([size='small']) {
        display: flex;
        max-width: 320px;
    }

    :host([size='small']) .awc-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--spacing-s);
    }

    :host([size='small']) .awc-empty-state__title {
        margin: 0;
        margin-bottom: 8px;
        color: var(--colors-light-titles);
        font: var(--awc-font-text-medium-15);
    }

    :host([size='small']) .awc-empty-state__main {
        font: var(--awc-font-text-regular-15);
        color: var(--colors-dark-secondary);
    }

    :host([size='small']) .awc-empty-state__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--spacing-s);
    }

    :host([size='small']) .awc-empty-state__links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--spacing-s);
    }

    @media screen and (max-width: 768px) {
        .awc-empty-state__links ::slotted(awc-empty-state-link:not(:last-child))::after {
            display: none;
        }
    }
`;
