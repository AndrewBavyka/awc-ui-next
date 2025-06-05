import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { toolbarButtonStyle } from './awc-toolbar-button.style';

/**
 * Элемент тулбар-кнопка
 * @element awc-toolbar-button
 */
@customElement('awc-toolbar-button')
export default class AwcToolbarButton extends LitElement {
    protected render(): TemplateResult {
        return html`
            <button type="button" tabindex="0" class="awc-toolbar-button">
                <slot></slot>
            </button>
        `;
    }

    /**
     * @ignore
     */
    static styles = [toolbarButtonStyle];
}
