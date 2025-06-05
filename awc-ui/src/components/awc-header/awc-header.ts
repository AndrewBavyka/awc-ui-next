import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { headerStyle } from './awc-header.style';

export const awcHeaderTag = 'awc-header';

@customElement(awcHeaderTag)
export default class AwcHeader extends LitElement {
    protected render(): TemplateResult {
        return html`
            <section class="awc-header">
                <div class="awc-header__main">
                    <div class="awc-header__content"><slot></slot></div>
                    <div class="awc-header__toolbar">
                        <slot name="toolbar"></slot>
                    </div>
                </div>

                <div class="awc-header__tab">
                    <slot name="awc-header-tab"></slot>
                </div>
            </section>
        `;
    }

    /**
     * @ignore
     */
    static styles?: CSSResultGroup = [headerStyle];
}
