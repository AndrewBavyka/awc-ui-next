import { css } from 'lit';

export const awcRangeItemStyle = css`
    :host {
        transform: translateX(calc(-50% + 16px));
    }

    .awc-range-item {
        cursor: pointer;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .awc-range-item__text {
        margin: 0;
        color: var(--colors-light-secondary);
        font: var(--awc-font-caption-2-regular);
        transition: color 0.3s ease;
    }

    .awc-range-item__text:hover {
        color: var(--colors-light-primary);
    }

    @media screen and (max-width: 768px) {
        :host {
            transform: translateX(calc(-50% + 2px));
        }
    }
`;
