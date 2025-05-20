import { css } from 'lit';

export const awcAlertStyles = css`
    :host {
        display: block;

        --awc-alert-background-primary: #2a8ce31a;
        --awc-alert-background-warning: #ff71881a;
        --awc-alert-background-success: #24b8871a;
        --awc-alert-background-attention: #fd90381a;

        --awc-alert-text-primary: var(--global-cyan-500);
        --awc-alert-text-warning: var(--global-red-400);
        --awc-alert-text-success: var(--global-green-500);
        --awc-alert-text-attention: var(--global-orange-400);
    }

    :host([variant='message']) {
        border-radius: 0 var(--corner-radius-m) var(--corner-radius-m) var(--corner-radius-m);
    }

    :host([variant='block']) {
        border-radius: var(--corner-radius-m);
    }

    :host([color='primary']) {
        background-color: var(--awc-alert-background-primary);
        color: var(--awc-alert-text-primary);
    }

    :host([color='warning']) {
        background-color: var(--awc-alert-background-warning);
        color: var(--awc-alert-text-warning);
    }

    :host([color='success']) {
        background-color: var(--awc-alert-background-success);
        color: var(--awc-alert-text-success);
    }

    :host([color='attention']) {
        background-color: var(--awc-alert-background-attention);
        color: var(--awc-alert-text-attention);
    }

    .awc-alert {
        padding: 12px 16px;
        text-align: start;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font: var(--awc-font-text-regular-14);
    }

    .awc-alert__title {
        margin: 0;
        padding: 0;
    }
`;
