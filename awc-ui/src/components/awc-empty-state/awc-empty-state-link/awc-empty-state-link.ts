import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emptyStateLinkStyle } from '../awc-empty-state-link/awc-empty-state-link.style';

export const awcEmptyStateTag = 'awc-empty-state-link';

export enum EmptyLinkTargetType {
    Blank = '_blank',
    Self = '_self',
    Parent = '_parent',
    Top = '_top',
}

@customElement(awcEmptyStateTag)
export default class AwcEmtyStateLink extends LitElement {
    /**
     * Задает адрес документа, на который следует перейти.
     * @type {String}
     * @default
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Тип перехода по ссылке
     * @type {String}
     * @default _self
     */
    @property({ type: String, reflect: true }) target: EmptyLinkTargetType = EmptyLinkTargetType.Self;

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
