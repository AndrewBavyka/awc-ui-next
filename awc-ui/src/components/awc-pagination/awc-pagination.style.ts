import { css } from 'lit';

export const paginationStyle = css`
    :host {
        display: inline-flex;
    }

    ul {
        list-style-type: none;
    }

    ul,
    li {
        padding: 0;
        margin: 0;
    }

    .awc-pagination {
        display: inline-flex;
        gap: var(--spacing-s);
    }

    .awc-pagination__list {
        display: flex;
        gap: var(--spacing-s);
        align-items: center;
    }

    .awc-pagination__item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow-wrap: break-word;
        white-space: nowrap;
        outline: 0;
        height: 36px;
        width: 36px;
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-titles);
        border-radius: var(--corner-radius-s);
        transition:
            color 0.3s,
            background-color 0.3s ease-out;
    }

    .awc-pagination__item.active {
        background-color: var(--colors-light-primary);
        color: var(--colors-light-white);
    }

    .awc-pagination__item:not(.active):focus-visible {
        background-color: var(--colors-light-input-background);
    }

    .awc-pagination__item:focus-visible,
    .awc-pagination__button:focus-visible {
        outline: 1px solid var(--colors-light-secondary);
        outline-offset: 1px;
    }

    .awc-pagination__item:not(.active):hover {
        transition:
            color 0.3s,
            background-color 0.3s ease-in;
        background-color: var(--colors-light-input-background);
    }

    .awc-pagination__button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 36px;
        width: 36px;
        cursor: pointer;
        border-radius: var(--corner-radius-s);
        transition: background-color 0.3s ease-out;
    }

    .awc-pagination__button:hover {
        transition: background-color 0.3s ease-in;
        background-color: var(--colors-light-input-background);
    }

    .ellipsis {
        cursor: default;
        pointer-events: none;
    }

    .ellipsis::after {
        content: '...';
        color: var(--colors-light-secondary);
    }
`;
