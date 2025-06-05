import { css } from 'lit';

export const textareaStyle = css`
    :host {
        display: block;

        --awc-textarea-background-color: var(--awc-textarea-background-theme);
        --awc-textarea-background-hover-color: var(--awc-textarea-background-hover-theme);
        --awc-textarea-background-focus-color: var(--awc-textarea-background-focus-theme);
        --awc-textarea-label-color: var(--awc-textarea-title-theme);
        --awc-textarea-text-color: var(--awc-textarea-text-theme);
        --awc-textarea-placeholder-color: var(--awc-textarea-placeholder-theme);
        --awc-textarea-border-focus-color: var(--awc-textarea-border-focus-theme);
    }

    .awc-textarea-container {
        display: flex;
        gap: var(--spacing-s);
        flex-direction: column;
    }

    label {
        font: var(--awc-font-text-medium-14);
        color: var(--awc-textarea-label-color);
    }

    :host([disabled]) .awc-textarea {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .awc-textarea {
        width: 100%;
        padding: 9.5px 14px;
        resize: none;
        overflow: auto;
        outline: none;

        background-color: var(--awc-textarea-background-color);
        color: var(--awc-textarea-text-color);
        font: var(--awc-font-text-regular-15);

        border: 1px solid transparent;
        border-radius: var(--corner-radius-m);

        transition:
            background-color 0.25s,
            border-color 0.25s;
    }

    .awc-textarea::placeholder {
        color: var(--colors-light-secondary);
    }

    .awc-textarea:hover {
        background-color: var(--awc-textarea-background-hover-color);
        transition: background-color 0.3s ease;
    }

    .awc-textarea-wrapper {
        display: flex;
        position: relative;
    }

    .awc-textarea:focus {
        outline: none;
        background-color: var(--awc-textarea-background-focus-color);
        border: 1px solid var(--awc-textarea-border-focus-color);
        transition:
            background-color 0.3s ease,
            border 0.3s;
    }

    /* .awc-textarea:focus + .awc-textarea__focus {
    content: "";
    z-index: 1;
    position: absolute;
    inset: -3px;
    border: 3px solid #839ff633;
    pointer-events: none;
    border-radius: var(--corner-radius-l);
  } */

    :host([resize]) .awc-textarea {
        resize: both;
    }
`;
