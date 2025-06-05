import { LitElement, html, TemplateResult, CSSResultGroup, PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tableWrapperStyles } from './awc-table-wrapper.style';

export const awcTableWrapperTag = 'awc-table-wrapper';

@customElement(awcTableWrapperTag)
export default class AwcTableWrapper extends LitElement {
    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    protected render(): TemplateResult {
        return html``;
    }

    /**
     * @ignore
     */
    static styles?: CSSResultGroup = [tableWrapperStyles];
}
