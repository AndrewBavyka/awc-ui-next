import { css } from 'lit';

export const accordionItemStyle = css`
    :host {
        display: block;

        --awc-accordion-item-box-shadow: inset 0 -1px 0 0 var(--awc-accordion-item-divider-theme);
        --awc-accordion-item-color-title: var(--awc-accordion-item-title-theme);
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        background: none;
    }

    .awc-accordion-item {
        box-shadow: var(--awc-accordion-item-box-shadow);
    }

    .awc-accordion-item__button {
        position: relative;
        cursor: pointer;
        padding: var(--awc-accordion-item-padding-title, 0 16px 0 0);
        min-block-size: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font: var(--awc-font-headline-medium-16);
        color: var(--awc-accordion-item-color-title);
    }

    .awc-accordion-item__button:focus-visible {
        outline: 1px solid var(--colors-light-focus);
        border-radius: var(--corner-radius-m);
    }

    .awc-accordion-item__arrow {
        transition: transform 0.3s ease-in-out;
    }

    :host([active]) .awc-accordion-item__arrow {
        transform: rotate(180deg);
    }

    :host([disabled]) .awc-accordion-item__button {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }

    :host([disabled][active]) .awc-accordion-item__wrapper {
        opacity: 0.5;
        pointer-events: none;
        touch-action: none;
    }

    .awc-accordion-item__wrapper {
        display: grid;
        opacity: 0;
        grid-template-rows: 0fr;
        transition:
            padding 0.3s,
            opacity 0.3s,
            grid-template-rows 0.3s;
    }

    .awc-accordion-item__wrapper.active {
        opacity: 1;
        grid-template-rows: 1fr;
        padding: 0 0 16px 0;
    }

    .awc-accordion-item__content {
        overflow-y: hidden;
    }

    /* 
  .awc-accordion-item__button:focus-visible:before {
    content: "";
    position: absolute;
    border: 3px solid #839ff633;
    inset: -3px;
    border-radius: var(--corner-radius-l);
    pointer-events: none;
  }
  */
`;
