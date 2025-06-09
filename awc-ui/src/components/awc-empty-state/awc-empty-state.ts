import { LitElement, html, TemplateResult, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emptyStateStyle } from './awc-empty-state.style';
import { AwcEmptyStateSize } from './awc-empty-state.types';
import AwcIcon, { awcIconTag } from '../awc-icon/awc-icon';
import AwcButton, { awcButtonTag } from '../awc-button/awc-button';

export const awcEmptyStateTag = 'awc-empty-state';

@customElement(awcEmptyStateTag)
export default class AwcEmtyState extends LitElement {
    /**
     * Задает заголовок компонента.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) head: string;
    /**
     * Задает рамзер компонента.
     * @property {String}
     * @default large
     */
    @property({ type: String, reflect: true }) size: AwcEmptyStateSize = "large";

    get icons(): AwcIcon[] {
        return [...this.querySelectorAll(awcIconTag)]!;
    }

    get buttons(): AwcButton[] {
        return [...this.querySelectorAll(awcButtonTag)]!;
    }

    private _scalingIcon(): void {
        if (this.icons) {
            this.icons.forEach((icon) => {
                if (this.size === "large") {
                    icon.iconScale = '78px';
                } else {
                    icon.iconScale = '48px';
                }
            });
        }
    }

    private _setCurrentButtons(): void {
        if (this.buttons) {
            this.buttons.forEach((button) => {
                if (this.size === "large") {
                    button.size = 'large';
                } else {
                    button.size = 'regular';
                }

                button.variant = 'primary';
                button.background = 'blue';
            });
        }
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        this._scalingIcon();
        this._setCurrentButtons();
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-empty-state">
                <div class="awc-empty-state__head">
                    <slot @slotchange="${this._scalingIcon}" name="icon"></slot>
                </div>
                <div class="awc-empty-state__main">
                    ${this.head ? html`<h3 class="awc-empty-state__title">${this.head}</h3>` : ''}
                    <slot></slot>
                </div>
                <div class="awc-empty-state__buttons">
                    <slot @slotchange="${this._setCurrentButtons}" name="button"></slot>
                </div>
                <div class="awc-empty-state__links">
                    <slot name="link"></slot>
                </div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [emptyStateStyle];
}
