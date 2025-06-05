import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { splitButtonStyle } from './awc-split-button.style';
import { EventDispatcher, event } from '../../utilities/event';

export const awcSplitButtonTag = 'awc-split-button';

/**
 * Комбинированная кнопка для выполнения либо одного действия, либо нескольких.
 *
 * @element awc-split-button
 *
 * @fires awc-split-button-open - Событие, возникающее при открытии выпадающего списка.
 * @fires awc-split-button-close - Событие, возникающее при закрытии выпадающего списка.
 *
 * @slot awc-split-button - Слот для контента кнопки.
 * @slot Общий слот для контента выпадающего списка.
 *
 */
@customElement(awcSplitButtonTag)
export default class AwcSplitButton extends LitElement {
    /**
     * Определяет, открыто ли выпадающее меню.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'menu-open' }) menuOpen = false;

    /**
     * Событие, возникающее при закрытии выпадающего списка.
     *
     * @event awc-split-button-close
     * @type {EventDispatcher<{ menuOpen: boolean }>}
     * @private
     */
    @event('awc-split-button-close')
    private _splitButtonClosed: EventDispatcher<{ menuOpen: boolean }>;

    /**
     * Событие, возникающее при открытии выпадающего списка.
     *
     * @event awc-split-button-open
     * @type {EventDispatcher<{ menuOpen: boolean }>}
     * @private
     */
    @event('awc-split-button-open')
    private _splitButtonOpened: EventDispatcher<{ menuOpen: boolean }>;

    /**
     * Обработчик события закрытия выпадающего списка.
     * @param {CustomEvent<{ menuOpen: boolean }>} e
     * @private
     */
    private _dropdownClose(e: CustomEvent<{ menuOpen: boolean }>): void {
        if (!e.detail.menuOpen) {
            this.splitButtonClose();
        }
    }

    /**
     * Открывает выпадающее меню.
     * @method splitButtonOpen
     * @public
     */
    splitButtonOpen(): void {
        this.menuOpen = true;
        this._splitButtonOpened({ menuOpen: this.menuOpen });
    }

    /**
     * Закрывает выпадающее меню.
     * @method splitButtonClose
     * @public
     */
    splitButtonClose(): void {
        this.menuOpen = false;
        this._splitButtonClosed({ menuOpen: this.menuOpen });
    }

    private _handleDropdown(): void {
        this.menuOpen ? this.splitButtonClose() : this.splitButtonOpen();
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-split-button">
                <slot name="awc-split-button"></slot>
                <awc-dropdown @awc-dropdown-close=${this._dropdownClose} .visible="${this.menuOpen}">
                    <awc-button class="awc-button-toggler" @click=${this._handleDropdown} filling slot="awc-dropdown-toggle">
                        <awc-icon size="16" name="select_arrow_down"></awc-icon>
                    </awc-button>
                    <slot></slot>
                </awc-dropdown>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResult = splitButtonStyle;
}
