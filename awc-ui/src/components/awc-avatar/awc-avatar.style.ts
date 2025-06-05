import { css } from 'lit';

export const awcAvatarStyle = css`
    :host {
        box-sizing: border-box;
        display: var(--awc-avatar-display, block);
        max-width: var(--awc-avatar-size);
        max-height: var(--awc-avatar-size);
    }

    a {
        text-decoration: none;
    }

    .awc-avatar {
        position: relative;
        width: var(--awc-avatar-size, 36px);
        height: var(--awc-avatar-size, 36px);
        border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
        outline: var(--awc-avatar-border, none);
        transition: transform 0.3s ease;
    }

    .awc-avatar--sliced {
        --awc-avatar-margin: 10px;
        --awc-avatar-border: 2px solid var(--colors-light-white);
        margin-left: calc(-1 * var(--awc-avatar-margin));
    }

    .awc-avatar--hovered:hover {
        --awc-avatar-transform: 5px;
        transform: translate(calc(-1 * var(--awc-avatar-transform)));
    }

    :host([rounded='circle']) {
        --awc-avatar-border-radius: var(--corner-radius-circular);
    }

    :host([rounded='square']) {
        --awc-avatar-border-radius: var(--corner-radius-l);
    }

    :host([size='20']) {
        --awc-avatar-size: 20px;
        --awc-avatar-font: var(--awc-font-text-medium-14);
    }

    :host([size='24']) {
        --awc-avatar-size: 24px;
        --awc-avatar-font: var(--awc-font-text-medium-14);
    }

    :host([size='32']) {
        --awc-avatar-size: 32px;
        --awc-avatar-font: var(--awc-font-h5-medium);
    }

    :host([size='36']) {
        --awc-avatar-size: 36px;
        --awc-avatar-font: var(--awc-font-h5-medium);
    }

    :host([size='40']) {
        --awc-avatar-size: 40px;
        --awc-avatar-font: var(--awc-font-h4-medium);
    }

    :host([size='48']) {
        --awc-avatar-size: 48px;
        --awc-avatar-font: var(--awc-font-h3-medium);
    }

    :host([size='72']) {
        --awc-avatar-size: 72px;
        --awc-avatar-font: var(--awc-font-h2-medium);
    }

    :host([size='128']) {
        --awc-avatar-size: 128px;
        --awc-avatar-font: 500 64px/52px 'Inter';
    }

    :host([size='160']) {
        --awc-avatar-size: 160px;
        --awc-avatar-font: 500 96px/52px 'Inter';
    }

    :host([invisible]) {
        display: none !important;
    }

    .awc-avatar__status {
        --badge-translate: 0;
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(var(--badge-translate), var(--badge-translate));
    }

    :host([size='20'][status='online']) .awc-avatar__status,
    :host([size='20'][status='offline']) .awc-avatar__status,
    :host([size='24'][status='online']) .awc-avatar__status,
    :host([size='24'][status='offline']) .awc-avatar__status {
        --badge-translate: 0;
        bottom: 1px;
        right: 1px;
    }

    :host([size='32'][status='online']) .awc-avatar__status,
    :host([size='32'][status='offline']) .awc-avatar__status {
        --badge-translate: 0;
        bottom: 2px;
        right: 2px;
    }

    :host([size='36'][status='online']) .awc-avatar__status,
    :host([size='36'][status='offline']) .awc-avatar__status,
    :host([size='40'][status='online']) .awc-avatar__status,
    :host([size='40'][status='offline']) .awc-avatar__status,
    :host([size='48'][status='online']) .awc-avatar__status,
    :host([size='48'][status='offline']) .awc-avatar__status,
    :host([size='72'][status='online']) .awc-avatar__status,
    :host([size='72'][status='offline']) .awc-avatar__status {
        --badge-translate: 0;
        bottom: 3px;
        right: 3px;
    }

    :host([size='128']) .awc-avatar__status,
    :host([size='128']) .awc-avatar__status,
    :host([size='160']) .awc-avatar__status,
    :host([size='160']) .awc-avatar__status {
        --badge-translate: -10%;
        bottom: 0;
        right: 0;
    }

    .awc-avatar--image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
    }

    .awc-avatar--no-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--colors-light-white);
        font: var(--awc-avatar-font);
        cursor: not-allowed;
        pointer-events: none;
        background-color: var(--awc-avatar-bg-color, var(--awc-avatar-custom-color));
        border-radius: var(--awc-avatar-border-radius, var(--corner-radius-circular));
    }

    .awc-avatar--no-image svg {
        max-width: var(--awc-avatar-icon-size, 85%);
        max-height: var(--awc-avatar-icon-size, 85%);
        fill: var(--awc-avatar-icon-fill, var(--colors-light-white));
    }

    .awc-avatar--no-image.group,
    .awc-avatar--no-image.user {
        --awc-avatar-bg-color: #f2f3fa;
        --awc-avatar-icon-fill: #91a2b6;
        --awc-avatar-icon-size: 67%;
    }

    .awc-avatar--no-image.deleted,
    .awc-avatar--no-image.anonymous {
        --awc-avatar-bg-color: #919bb6;
        --awc-avatar-icon-size: 50%;
    }

    .awc-avatar--no-image.anonymous {
        --awc-avatar-bg-color: var(--colors-light-titles);
    }

    .awc-avatar--no-image.robot {
        --awc-avatar-bg-color: #8dadd0;
    }

    .awc-avatar--no-image.undefined {
        --awc-avatar-bg-color: #919bb6a3;
        --awc-avatar-icon-size: 50%;
    }
`;
