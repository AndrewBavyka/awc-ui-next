import { css } from 'lit';

export const awcTripleToggleStyle = css`
    :host {
        --awc-triple-toggler-width: 47px;
        --awc-triple-toggler-height: 20px;
        --awc-triple-toggler-padding: 3px;
        --awc-triple-toggler-width-calc: calc(var(--awc-triple-toggler-width) - var(--awc-triple-toggler-padding));

        --awc-triple-toggler-background-first: var(--colors-light-warning);
        --awc-triple-toggler-background-second: var(--colors-light-primary);
        --awc-triple-toggler-background-third: var(--colors-light-success);
    }

    .awc-triple-toggler {
        outline: 1px solid transparent;
        position: relative;
        display: flex;
        width: var(--awc-triple-toggler-width-calc);
        height: var(--awc-triple-toggler-height);
        border-radius: 50px;
        padding: 0 var(--awc-triple-toggler-padding);
        transition:
            background-color 0.3s ease-in-out,
            outline 0.3s ease;
    }

    .awc-triple-toggler:focus-visible {
        outline: 1px solid var(--colors-light-focus);
    }

    :host([state='first']) .awc-triple-toggler {
        background-color: var(--awc-triple-toggler-background-first);
    }

    :host([state='second']) .awc-triple-toggler {
        background-color: var(--awc-triple-toggler-background-second);
    }

    :host([state='third']) .awc-triple-toggler {
        background-color: var(--awc-triple-toggler-background-third);
    }

    .awc-triple-toggler__track {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
    }

    .awc-triple-toggler__thumb {
        position: absolute;
        width: 14px;
        height: 14px;
        background-color: white;
        border-radius: 50%;
        transition: transform 0.3s ease;
        top: 50%;
        transform: translateY(-50%);
    }

    .awc-triple-toggler__thumb.first {
        transform: translate(0, -50%);
    }

    .awc-triple-toggler__thumb.second {
        transform: translate(15px, -50%);
    }

    .awc-triple-toggler__thumb.third {
        transform: translate(30px, -50%);
    }

    .awc-triple-toggler__option {
        flex: 1;
        height: 100%;
        cursor: pointer;
    }
`;
