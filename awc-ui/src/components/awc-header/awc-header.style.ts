import { css } from 'lit';

export const headerStyle = css`
    :host {
        display: inline-flex;
        width: 100%;
        max-width: 100%;
    }

    .awc-header {
        padding: 0 24px;
        background: var(--colors-light-white);
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid var(--colors-light-stroke);
    }

    .awc-header__main {
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .awc-header__toolbar {
        display: flex;
        align-items: center;
    }

    .awc-header__tab {
        display: block;
        width: 100%;
    }
`;
