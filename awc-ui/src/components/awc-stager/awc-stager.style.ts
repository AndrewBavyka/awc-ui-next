import { css } from 'lit';

export const stagerStyle = css`
    .awc-stager {
        overflow: hidden;
        border-radius: var(--corner-radius-circular);
    }

    .awc-stager__progress {
        display: flex;
        align-items: center;
        gap: 2px;
        width: 100%;
        height: 10px;
        border-radius: var(--corner-radius-s);
    }

    .awc-stager__item {
        width: 100%;
        background-color: #d6dbe5;
        height: inherit;
    }

    .awc-stager__item--current {
        background-color: var(--colors-light-primary);
    }
`;
