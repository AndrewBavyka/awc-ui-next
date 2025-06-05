import { css } from 'lit';

export const stackStyle = css`
    :host {
        display: flex;
    }

    /* isInlineFlex */
    :host([inline-flex]) {
        display: inline-flex;
    }

    :host([full-width]) {
        width: 100%;
    }

    /* flex-direction */
    :host([flex-direction='row']) {
        flex-direction: row;
    }

    :host([flex-direction='column']) {
        flex-direction: column;
    }

    /* align-items */

    :host([align-items='start']) {
        align-items: flex-start;
    }

    :host([align-items='center']) {
        align-items: center;
    }

    :host([align-items='end']) {
        align-items: flex-end;
    }

    :host([justify-content='center']) {
        justify-content: center;
    }

    :host([justify-content='start']) {
        justify-content: start;
    }

    :host([justify-content='end']) {
        justify-content: end;
    }

    :host([justify-content='baseline']) {
        justify-content: baseline;
    }

    :host([justify-content='space-between']) {
        justify-content: space-between;
    }

    :host([justify-content='space-around']) {
        justify-content: space-around;
    }

    :host([justify-content='space-evenly']) {
        justify-content: space-evenly;
    }

    /* gap */
    :host([gap='none']) {
        gap: 0;
    }

    :host([gap='2xs']) {
        gap: var(--spacing-2xs);
    }

    :host([gap='xs']) {
        gap: var(--spacing-xs);
    }
    :host([gap='s']) {
        gap: var(--spacing-s);
    }

    :host([gap='sm']) {
        gap: var(--spacing-sm);
    }

    :host([gap='m']) {
        gap: var(--spacing-m);
    }

    :host([gap='l']) {
        gap: var(--spacing-l);
    }

    :host([gap='xl']) {
        gap: var(--spacing-xl);
    }

    :host([gap='2xl']) {
        gap: var(--spacing-2xl);
    }

    :host([gap='3xl']) {
        gap: var(--spacing-3xl);
    }

    :host([gap='3xl']) {
        gap: var(--spacing-3xl);
    }

    /* flex-wrap */
    :host([flex-wrap='nowrap']) {
        flex-wrap: nowrap;
    }

    :host([flex-wrap='wrap']) {
        flex-wrap: wrap;
    }

    :host([flex-wrap='wrap-reverse']) {
        flex-wrap: wrap-reverse;
    }
`;
