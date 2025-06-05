import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { toolbarGroupStyle } from './awc-toolbar-group.style';

/**
 * Элемент группа тулбаров
 *
 * Ипользуется в роли обретки для группы тулбаров.
 *
 * Может быть использвоаны в группе <awc-toolbar-button> так и <awc-button>
 * @element awc-toolbar-group
 */
@customElement('awc-toolbar-group')
export default class AwcToolbarGroup extends LitElement {
    protected render(): TemplateResult {
        return html`
            <div class="awc-toolbar-group">
                <slot></slot>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [toolbarGroupStyle];
}
