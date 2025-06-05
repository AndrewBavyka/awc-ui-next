import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcButtonGroupStyle } from './awc-button-group.style';
import AwcButtonGroupItem, { awcButtonGroupItemTag } from './awc-button-group-item/awc-button-group-item';

export const awcButtonGroupTag = 'awc-button-group';

@customElement(awcButtonGroupTag)
export default class AwcButtonGroup extends LitElement {
    /**
     * Отключение группы кнопок.
     * @type {boolean}
     * @default false
     * @example false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    get buttons(): AwcButtonGroupItem[] {
        return [...this.querySelectorAll(awcButtonGroupItemTag)];
    }

    private _checkInternalButtonGroup(): void {
        if (this.buttons && this.buttons.length) {
            this._combiningButtons(this.buttons);
        }
    }

    private _combiningButtons(buttons: AwcButtonGroupItem[]): void {
        if (!buttons || buttons.length === 0) return;

        let lastInnerIndex = -1;

        buttons.forEach((button, index) => {
            if (index === 0) {
                button.position = 'first';
            } else if (index === buttons.length - 1) {
                button.position = 'last';
            } else {
                button.position = 'inner';
                lastInnerIndex = index;
            }
        });

        if (lastInnerIndex !== -1) {
            buttons[lastInnerIndex].position = 'inner inner-last';
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-button-group">
                <slot @slotchange="${this._checkInternalButtonGroup}"></slot>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [awcButtonGroupStyle];
}
