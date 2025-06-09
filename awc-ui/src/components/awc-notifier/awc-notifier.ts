import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { notifierStyle } from './awc-notifier.style';
import { AWC_NOTIFIER_CLOSE_ICON } from './awc-notifier.icons';

export const awcNotifierTag = 'awc-notifier';

@customElement(awcNotifierTag)
export default class AwcNotifier extends LitElement {
    private _onChange(e: Event) {
        if (e.target) this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-notifier">
                <div class="awc-notifier__wrapper">
                    <div class="awc-notifier__main">
                        <slot></slot>
                        <slot name="button"></slot>
                    </div>
                    <button @click=${this._onChange} class="awc-notifier__button" type="button">${AWC_NOTIFIER_CLOSE_ICON}</button>
                </div>
            </div>
        `;
    }

    /**
     *  @ignore
     */
    static styles: CSSResultGroup = [notifierStyle];
}
