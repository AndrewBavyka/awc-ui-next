import { css } from 'lit';

export const awcAvatarBadgeStyle = css`
    :host {
        display: inline-flex;
        box-sizing: border-box;
        --badge-size: 12px;
        --badge-shadow-size: 2px;
    }

    :host([status='none']) {
        display: none;
    }

    .awc-avatar-badge > svg {
        width: 100%;
        height: 100%;
    }

    :host([size='8']) {
        --badge-size: 8px;
    }
    :host([size='10']) {
        --badge-size: 10px;
    }
    :host([size='12']) {
        --badge-size: 12px;
    }
    :host([size='14']) {
        --badge-size: 14px;
    }
    :host([size='24']) {
        --badge-size: 24px;
    }
    :host([size='32']) {
        --badge-shadow-size: 6px;
        --badge-size: 32px;
    }

    :host([size='4'][status='online']),
    :host([size='4'][status='offline']) {
        --badge-size: 4px;
    }
    :host([size='5'][status='online']),
    :host([size='5'][status='offline']) {
        --badge-size: 5px;
    }
    :host([size='6'][status='online']),
    :host([size='6'][status='offline']) {
        --badge-size: 6px;
    }
    :host([size='8'][status='online']),
    :host([size='8'][status='offline']) {
        --badge-size: 8px;
    }
    :host([size='24'][status='online']),
    :host([size='24'][status='offline']) {
        --badge-size: 24px;
    }
    :host([size='32'][status='online']),
    :host([size='32'][status='offline']) {
        --badge-shadow-size: 6px;
        --badge-size: 32px;
    }

    .awc-avatar-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--badge-size);
        height: var(--badge-size);
        border-radius: var(--corner-radius-circular);
        box-shadow: 0 0 0 var(--badge-shadow-size) var(--colors-light-white);
    }
`;
