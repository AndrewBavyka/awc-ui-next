import { css } from 'lit';

export const tagStyle = css`
    :host {
        display: inline-flex;
    }

    .awc-tag {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .awc-tag__text {
        margin: 0;
        transition: color 0.3s ease;
    }

    :host([variant='square']) .awc-tag {
        padding: 6px 9px;
        border-radius: var(--corner-radius-m);
        background-color: var(--awc-tag-color);
    }

    :host([variant='square']) .awc-tag__text {
        font: var(--awc-font-caption-1-regular);
        color: var(--awc-tag-text-color);
    }

    :host([variant='circle']) .awc-tag {
        position: relative;
        overflow: hidden;
        padding: 5px 10px;
        border-radius: var(--corner-radius-circular);
    }

    :host([variant='circle']) .awc-tag::before {
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 0.1;
        background-color: var(--awc-tag-color);
    }

    :host([variant='circle']) .awc-tag__text {
        font: var(--awc-font-caption-2-regular);
        color: var(--awc-tag-color);
    }

    :host([variant='bullet']) .awc-tag {
        position: relative;
        overflow: hidden;
        padding: 3px 7px;
        border-radius: var(--corner-radius-2xl) var(--corner-radius-circular) var(--corner-radius-circular) var(--corner-radius-2xl);
    }

    :host([variant='bullet']) .awc-tag::before {
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 0.2;
        background-color: var(--awc-tag-color);
    }

    :host([variant='bullet']) .awc-tag__text {
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-dark-blue);
    }
`;
