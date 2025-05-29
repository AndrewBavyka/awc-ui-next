import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { awcSelectItemStyles } from './awc-select-item.style';
import { event, EventDispatcher } from '../../../../utilities/event';
import { IAwcSelectItemData } from './awc-select-item.types';

export const awcSelectItemTag = 'awc-select-item';

@customElement(awcSelectItemTag)
export default class AwcSelectItem extends LitElement {
    @property({ type: String, reflect: true }) value: string;
    @property({ type: Boolean, reflect: true }) selected = false;
    @property({ type: Boolean, reflect: true }) disabled = false;

    @event("awc-select-option") private _onSelect: EventDispatcher<IAwcSelectItemData[]>;
    @event("awc-select-option-focus") private onFocus: EventDispatcher<string | null>;
    @event("awc-select-option-blur") private onBlur: EventDispatcher<string | null>;

    @query(".awc-item-focus") private focusTarget: HTMLElement;

    focus(): void {
        this.focusTarget.tabIndex = 0;
        this.focusTarget.focus();
        this.onFocus(this.value);
    }

    blur(): void {
        this.onBlur(this.value);
        this.focusTarget.tabIndex = -1;
    }

    select(): void {
        this._onSelect([{
            value: this.value,
            selected: this.selected,
            disabled: this.disabled
        }]);
    }

    private handleKeydown(event: KeyboardEvent) {
        if (event.code === "Enter" || event.code === "Space") {
           this.select();
        }
    }

    protected render(): TemplateResult {
        return html`
            <li class="awc-select-item awc-item-focus" 
                @keydown=${this.handleKeydown}
                @click=${this.select}
                ?disabled=${this.disabled} 
                role="option">
                <slot></slot>
            </li>
        `;
    }

    static styles?: CSSResult = awcSelectItemStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcSelectItemTag]: AwcSelectItem;
    }
}
