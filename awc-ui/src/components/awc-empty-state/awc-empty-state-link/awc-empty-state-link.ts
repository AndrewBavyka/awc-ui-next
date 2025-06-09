import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emptyStateLinkStyle } from '../awc-empty-state-link/awc-empty-state-link.style';
import { AwcEmptyStateLinkTarget } from './awc-empty-state-link.types';

export const awcEmptyStateTag = 'awc-empty-state-link';

@customElement(awcEmptyStateTag)
export default class AwcEmtyStateLink extends LitElement {
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Тип перехода по ссылке
     * @property {AwcEmptyStateLinkTarget}
     * @default _self
     */
    @property({ type: String, reflect: true }) target: AwcEmptyStateLinkTarget = "_self";

    protected render(): TemplateResult {
        return this.href
            ? html`
                  <a class="awc-empty-state-link" href=${this.href} target=${this.target} tabindex="0">
                      <slot></slot>
                  </a>
              `
            : html`
                  <div class="awc-empty-state-link" href=${this.href} target=${this.target} tabindex="0">
                      <slot></slot>
                  </div>
              `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [emptyStateLinkStyle];
}
