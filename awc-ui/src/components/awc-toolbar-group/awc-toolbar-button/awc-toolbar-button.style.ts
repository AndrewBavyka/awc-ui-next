import { css } from 'lit';

export const toolbarButtonStyle = css`
    :host {
        display: inline-flex;
    }

    .awc-toolbar-button {
        position: relative;
        cursor: pointer;
        border: 1px solid transparent;
        max-width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        background-color: transparent;
        border-radius: var(--corner-radius-s);
        transition:
            border 0.3s ease-in-out,
            background-color 0.3s ease;
        max-width: 36px;
        max-height: 36px;
    }

    .awc-toolbar-button:hover {
        transition: background-color 0.3s ease;
        background-color: rgba(5, 35, 125, 0.05);
    }

    .awc-toolbar-button:active {
        transition: background-color 0.3s ease;
        background-color: rgba(5, 35, 125, 0.08);
    }

    .awc-toolbar-button:focus {
        outline: none;
    }

    .awc-toolbar-button:focus-visible {
        outline: none;
        border: 1px solid var(--colors-light-focus);
        transition: background-color 0.3s ease;
        background-color: rgba(5, 35, 125, 0.05);
    }

    /* .awc-toolbar-button:focus-visible::before{
        content: "";
        position: absolute;
        inset: -3px;
        border: 3px solid #839ff633;
        pointer-events: none;
        border-radius: var(--corner-radius-m);
    } */
`;
