import { css } from 'lit';

export const avatarCounterStyle = css`
    :host {
        display: inline-flex;
        box-sizing: border-box;
    }

    .awc-avatar-group__counter {
        box-sizing: border-box;
        position: relative;
        display: flex;
        min-width: 24px;
        height: 24px;
        font: var(--awc-font-caption-2-regular);
        align-items: center;
        justify-content: center;
        background-color: var(--colors-light-secondary);
    }

    .awc-avatar-group__counter--sliced {
        --awc-avatar-margin: 10px;
        margin-left: calc(-1 * var(--awc-avatar-margin));
    }

    .awc-avatar-group__counter p {
        user-select: none;
        margin: 0;
        color: var(--colors-light-white);
    }

    :host([counter-rounded='circle']) .awc-avatar-group__counter {
        border-radius: var(--corner-radius-circular);
        outline: 2px solid var(--colors-light-white);
    }

    :host([counter-size='24']) .awc-avatar-group__counter {
        width: 24px;
        height: 24px;
        font: var(--awc-font-caption-2-regular);
    }

    :host([counter-size='32']) .awc-avatar-group__counter {
        width: 32px;
        height: 32px;
        font: var(--awc-font-caption-1-regular);
    }
`;
