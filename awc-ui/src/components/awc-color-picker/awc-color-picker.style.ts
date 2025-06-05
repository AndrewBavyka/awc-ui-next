import { css } from 'lit';

export const colorPickerStyle = css`
    :host {
        display: inline-flex;

        --awc-color-picker-bg: var(--colors-light-input-background);
        --awc-color-picker-hover-bg: var(--colors-light-stroke);
        /* --awc-color-picker-popover-bg: */
    }

    .awc-color-picker-activator {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-s);
        padding: 8px;
        background-color: var(--awc-color-picker-bg);
        border-radius: var(--corner-radius-m);
        transition: background-color 0.3s ease;
    }

    .awc-color-picker-activator:focus-visible {
        outline: 1px solid var(--colors-light-focus);
    }

    .awc-color-picker-current-color {
        display: block;
        border-radius: var(--corner-radius-s);
        width: 24px;
        height: 24px;
    }

    .awc-color-picker-activator:hover {
        background-color: var(--awc-color-picker-hover-bg);
    }

    .awc-color-picker-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
    }

    .awc-color-picker-arrow.open {
        transform: rotate(180deg);
    }

    .awc-color-picker {
        padding: 16px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: var(--corner-radius-s);
        background-color: var(--colors-light-white);
        box-shadow: 0px 0px 20px 5px rgba(64, 72, 98, 0.2);
        max-height: 264px;
    }

    .awc-color-pciker__header ::slotted(awc-tabs-group) {
        padding-bottom: var(--spacing-m);
    }

    .awc-color-picker__tabs {
        position: relative;
    }

    .awc-color-picker__reset {
        display: inline-flex;
        position: absolute;
        top: 30%;
        right: 0;
        cursor: pointer;
    }

    .awc-color-picker__main {
        min-width: 232px;
    }

    .awc-color-picker__view {
        display: none;
    }

    .awc-color-picker__view--active {
        display: block;
    }

    .awc-color-picker__palete {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: var(--spacing-s);
    }

    .awc-color-picker__color {
        cursor: pointer;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: var(--corner-radius-m);
        transition: transform 0.3s ease;
        will-change: transform;
        transform: scale3d(1, 1, 1);
    }

    .awc-color-picker__color:hover {
        transform: scale3d(1.05, 1.05, 1.05);
    }

    .awc-color-picker__color:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        transform: scale3d(1.05, 1.05, 1.05);
    }

    .awc-color-picker__color.active-color {
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L1.29289 8.70711C0.902369 8.31658 0.902369 7.68342 1.29289 7.29289C1.68342 6.90237 2.31658 6.90237 2.70711 7.29289L6 10.5858L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289Z' fill='white'/%3E%3C/svg%3E%0A");
    }

    .awc-color-picker__input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0;
        width: 100%;
        height: 32px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .awc-color-picker__input::-webkit-color-swatch {
        border-radius: var(--corner-radius-s);
        border: none;
    }

    .awc-color-picker__input::-moz-color-swatch {
        border-radius: var(--corner-radius-s);
        border: none;
    }
`;
