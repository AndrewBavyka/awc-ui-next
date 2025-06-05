import { css } from 'lit';

export const awcFileItemStyles = css`
    /* Host Styles */
    :host {
        display: flex;
        box-sizing: border-box;
    }

    :host([is-interactive]) {
        cursor: pointer;
    }

    :host([external-file-link]:not(:host([view='grid']))),
    :host([external-file-link]) .awc-file-item__preview {
        cursor: pointer;
    }

    /* Grid View Styles */
    :host([view='grid']) {
        flex-direction: column;
        gap: var(--spacing-s);
        height: 100%;
    }

    :host([view='grid']) .awc-file-item__preview {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: var(--corner-radius-m);
        border: var(--awc-file-item-border, 1px solid var(--colors-light-stroke));
        background-color: var(--awc-file-item-background, var(--colors-light-white));
        transition:
            background-color 0.3s ease,
            border 0.3s ease;
        overflow: hidden;
    }

    :host([view='grid']) .awc-file-item__preview:hover:not(:has(.awc-file-item-button:hover)),
    :host([view='grid']) .awc-file-item__preview:hover:not(:has(awc-icon-button:hover)) {
        background-color: #05237d0d;
    }

    :host([view='grid']) .awc-file-item__preview .awc-file-item__dropdown {
        position: absolute;
        z-index: 1;
        top: 6px;
        right: 6px;
    }

    :host([view='grid']) .awc-file-item__info {
        flex-direction: column;
        align-items: flex-start;
    }

    :host([view='grid']) .awc-file-item__name {
        max-width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :host([view='grid']) .awc-file-item__subinfo {
        gap: var(--spacing-2xs);
    }

    :host([view='grid']) .awc-file-item__preview .awc-file-item__icon svg {
        display: flex;
        width: 36px;
        height: 36px;
    }

    /* List View Styles */
    :host([view='list']) .awc-file-item__preview .awc-file-item__image {
        box-sizing: border-box;
        border: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-xs);
    }

    :host([view='list']) .awc-file-item__preview,
    :host([view='list']) .awc-file-item__preview .awc-file-item__icon svg {
        width: 24px;
        height: 24px;
    }

    :host([view='list']) .awc-file-item__info {
        gap: var(--spacing-s);
        display: grid;
        align-items: center;
        grid-template-columns: auto auto;
        width: 100%;
    }

    :host([view='list']) .awc-file-item__name {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        overflow: hidden;
    }

    :host([view='list']) .awc-file-item__subinfo {
        gap: var(--spacing-m);
        margin-left: auto;
    }

    :host([view='list']) .awc-file-item__buttons {
        position: relative;
        right: 0;
        height: inherit;
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-xs);
        align-items: center;
        background-color: var(--colors-light-light-background);
    }

    :host([view='list']) .awc-file-item__text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    :host([view='list']) {
        position: relative;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sm);
        width: 100%;
        height: 36px;
        padding: 0 6px;
        max-height: 36px;
        transition: background-color 0.3s ease;
        box-sizing: border-box;
    }

    :host([view='list']:hover) {
        background-color: var(--colors-light-light-background);
        border-radius: var(--corner-radius-m);
    }

    /* List Block View Styles */
    :host([view='list_block']) .awc-file-item__preview,
    :host([view='list_block']) .awc-file-item__preview .awc-file-item__icon svg {
        border-radius: var(--corner-radius-s);
        display: flex;
        width: 36px;
        height: 36px;
    }

    :host([view='list_block']) .awc-file-item__preview .awc-file-item__image {
        box-sizing: border-box;
        border: 1px solid var(--colors-light-stroke);
        background: var(--awc-file-item-preview-background, var(--colors-light-white));
        border-radius: inherit;
    }

    :host([view='list_block']) .awc-file-item__info {
        flex-direction: column;
        align-items: flex-start;
        max-width: 80%;
        overflow: hidden;
    }

    :host([view='list_block']) .awc-file-item__name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    :host([view='list_block']) {
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sm);
        border-radius: var(--corner-radius-m);
        padding: var(--awc-file-item-padding, 0 12px);
        max-width: var(--awc-file-item-max-width, 300px);
        width: var(--awc-file-item-width, 100%);
        max-height: var(--awc-file-item-max-height, 56px);
        height: var(--awc-file-item-height, 56px);
        border: var(--awc-file-item-border, 1px solid var(--colors-light-stroke));
        background-color: var(--awc-file-item-background, var(--colors-light-white));
    }

    :host([view='list_block']) .awc-file-item__subinfo {
        gap: var(--spacing-xs);
    }

    :host([view='list_block']) .awc-file-item__buttons {
        display: flex;
        gap: var(--spacing-xs);
        align-items: center;
        margin-left: auto;
        justify-content: flex-end;
    }

    /* Preview Styles */
    :host([view='grid'][external-file-link]) .awc-file-item__preview {
        cursor: pointer;
    }

    .awc-file-item__preview {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__preview .awc-file-item__image {
        object-fit: contain;
        width: inherit;
        height: inherit;
    }

    .awc-file-item__icon {
        display: flex;
    }

    /* Info Styles */
    .awc-file-item__info {
        display: flex;
        align-items: center;
    }

    .awc-file-item__name,
    .awc-file-item__text {
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-titles);
        margin: 0;
    }

    .awc-file-item__subinfo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 16px;
    }

    .awc-file-item__size,
    .awc-file-item__type,
    .awc-file-item__date {
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-secondary);
        white-space: nowrap;
    }

    .awc-file-item__type {
        text-transform: uppercase;
    }

    .awc-file-item__provider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__provider svg {
        width: 16px;
        height: 16px;
    }

    .awc-file-item__subtext {
        color: var(--colors-light-secondary);
        font: var(--awc-font-caption-2-regular);
    }

    .awc-file-item-wrapper {
        width: 210px;
        padding: 6px 0;
    }

    .awc-file-item-button {
        position: absolute;
        right: 5px;
        top: 5px;
    }

    :host([view='grid']) .awc-file-item-button,
    :host([view='grid']) awc-icon-button {
        background-color: var(--colors-light-white);
        border-radius: var(--corner-radius-s);
    }

    @media screen and (max-width: 512px) {
        :host([view='list']) .awc-file-item__date {
            display: none;
        }
    }
`;
