import { css } from 'lit';

export const dropdownStyle = css`
    :host {
        display: var(--awc-dropdown-display, inline-flex);
    }

    .awc-dropdown,
    .awc-dropdown__nested {
        display: inherit;
    }

    .awc-dropdown__list {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: hidden auto;
        max-height: 300px;
        padding: var(--awc-dropdown-padding, 0);
    }

    :host([scroll-off]),
    :host([scroll-off]) .awc-dropdown__list {
        --awc-popover-max-height: max-content;
        --awc-popover-overflow: hidden clip;
        overflow-y: clip;
        max-height: max-content;
    }
`;
