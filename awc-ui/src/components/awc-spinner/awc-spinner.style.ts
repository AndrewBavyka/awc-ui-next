import { css } from 'lit';

export const spinnerStyle = css`
    :host {
        display: inline-flex;
    }

    :host([size='s']) {
        --awc-spinner-size: 16px;
        --awc-spinner-border-width: 2px;
    }

    :host([size='m']) {
        --awc-spinner-size: 20px;
        --awc-spinner-border-width: 2.5px;
    }

    :host([size='l']) {
        --awc-spinner-size: 28px;
        --awc-spinner-border-width: 3px;
    }

    :host([variant='primary']) {
        --awc-spinner-thumb: rgba(55, 97, 233, 0.12);
        --awc-spinner-track: var(--colors-light-primary);
    }

    :host([variant='secondary']) {
        --awc-spinner-thumb: rgba(255, 255, 255, 0.12);
        --awc-spinner-track: var(--colors-light-white);
    }

    .awc-spinner {
        position: relative;
        width: var(--awc-spinner-size);
        height: var(--awc-spinner-size);
        border: var(--awc-spinner-border-width) solid var(--awc-spinner-thumb);
        border-bottom-color: var(--awc-spinner-track);
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: awc-spinner 0.8s linear infinite;
    }

    @keyframes awc-spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
