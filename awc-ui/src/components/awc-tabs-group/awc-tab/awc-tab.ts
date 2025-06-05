import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tabStyle } from './awc-tab.style';

/**
 * Элемент таб
 *
 * Используется только в составе группы <awc-tabs-group>
 * @element awc-tab
 */

export const awcTabTag = 'awc-tab';
@customElement(awcTabTag)
export default class AwcTab extends LitElement {
    /**
     * Устанавливает активность таба.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) active = false;

    private _handleTabClick(): void {
        this.active = !this.active;
        this._onChange();
    }

    private _onChange(): void {
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }

    protected render(): TemplateResult {
        return html` <span class="awc-tab" ?active=${this.active} @click=${this._handleTabClick}><slot></slot></span> `;
    }

    /**
     * @ignore
     */
    static styles = [tabStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcTabTag]: AwcTab;
    }
}
