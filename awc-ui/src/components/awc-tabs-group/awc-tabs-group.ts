import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import AwcTab, { awcTabTag } from './awc-tab/awc-tab';
('./awc-tab/awc-tab');
import { tabsGroupStyle } from './awc-tabs-group.style';

export const awcTabsGroupTag = 'awc-tabs-group';
@customElement(awcTabsGroupTag)
export default class AwcTabsGroup extends LitElement {
    /**
     * Флаг, чтобы убрать линию у группы.
     * @property {String}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'no-divider' }) noDivider: boolean = false;

    get tabs(): AwcTab[] {
        return [...this.querySelectorAll(awcTabTag)];
    }

    private _handleTabClick(event: Event): void {
        const target = event.target as AwcTab;

        this.tabs.forEach((tab) => {
            tab.active = false;
        });

        target.active = true;
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-tabs-container">
                <slot @click=${this._handleTabClick}></slot>
            </div>
            ${this.noDivider ? '' : html`<awc-divider spacing="none"></awc-divider>`}
        `;
    }

    /**
     * @ignore
     */
    static styles = [tabsGroupStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcTabsGroupTag]: AwcTabsGroup;
    }
}
