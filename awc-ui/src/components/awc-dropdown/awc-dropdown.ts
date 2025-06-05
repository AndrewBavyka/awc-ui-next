import { LitElement, html, TemplateResult, PropertyValueMap, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { dropdownStyle } from './awc-dropdown.style';
import { scrollStyle } from '../awc-scroll/awc-scroll.style';
import AwcDropdownItem, { awcDropdownItemTag } from './awc-dropdown-item/awc-dropdown-item';
import { EventDispatcher, event } from '../../utilities/event';
import { AwcPopoverPosition, AwcPopoverStrategy } from '../awc-popover/awc-popover.type';

/**
 * Элемент выпадающего меню awc-dropdown
 *
 * @element awc-dropdown
 *
 * @fires awc-dropdown-open - Событие, возникающее при открытии выпадающего списка.
 * @fires awc-dropdown-close - Событие, возникающее при закрытии выпадающего списка.
 *
 * @cssproperty [--awc-dropdown-display: block] Устанавливает блочное отображение для вложенного элемента.
 *
 */
@customElement('awc-dropdown')
export default class AwcDropdown extends LitElement {
    /**
     * Отключение автоматического закрытия при клике по свободному пространству.
     * @property {boolean} notClosing
     */
    @property({ type: Boolean, reflect: true, attribute: 'not-closing' }) notClosing = false;

    /**
     * Включение/отключение отображения выпадающего меню
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) visible = false;

    /**
     * Пользовательская ширина выпадающего меню
     * @property {number}
     */
    @property({ type: Number, reflect: true }) width: number;

    /**
     * Включение/отключение режима выбора
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'selected-mode' })
    selectedMode = false;

    /**
     * Позиция отображения списка
     * @property {string}
     * @default bottom-start
     */
    @property({ type: String, reflect: true }) position: AwcPopoverPosition = 'bottom-start';

    /**
     * Стратегия позиционирования всплывающего окна.
     *
     * @property {AwcPopoverStrategy}
     * @default absolute
     */
    @property({ type: String, reflect: true }) strategy: AwcPopoverStrategy = 'absolute';

    /**
     * Отключает dropdown
     * @type {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Отключает отображение скролла списка
     * @type {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'scroll-off' }) scrollOff = false;

    /**
     * Событие, возникающее при открытии выпадающего списка.
     *
     * @event awc-dropdown-open
     * @type {EventDispatcher<{ visible: boolean }>}
     * @private
     */
    @event('awc-dropdown-open') private _onOpen: EventDispatcher<{
        visible: boolean;
    }>;

    /**
     * Событие, возникающее при закрытии выпадающего списка.
     *
     * @event awc-dropdown-close
     * @type {EventDispatcher<{ visible: boolean }>}
     * @private
     */
    @event('awc-dropdown-close') private _onClose: EventDispatcher<{ visible: boolean }>;

    @query('.awc-dropdown__list') private _dropdownList!: HTMLElement;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    private _setupPopover(): void {
        if (!this.disabled) {
            this._addOutsideClickHandler();
        }
    }

    private _disconnectPopover(): void {
        if (!this.disabled) {
            this._removeOutsideClickHandler();
        }
    }

    private _handleOutsideClick = (event: MouseEvent): void => {
        if (!this.contains(event.target as Node)) {
            this.close();
        }
    };

    private _addOutsideClickHandler(): void {
        setTimeout(() => {
            document.addEventListener('click', this._handleOutsideClick);
        }, 0);
    }

    private _removeOutsideClickHandler(): void {
        document.removeEventListener('click', this._handleOutsideClick);
    }

    /**
     * Открытие выпадающего списка.
     * @method open
     * @public
     */
    open(): void {
        this.visible = true;

        this._onOpen({ visible: this.visible });
    }

    /**
     * Закрытие выпадающего списка.
     * @method open
     * @public
     */
    close(): void {
        this.visible = false;
        this.focusedOptionIndex = -1;

        this._onClose({ visible: this.visible });
    }

    private _handleDropdown(e: Event): void {
        if (e.target && this.options.length) {
            this.visible ? this.close() : this.open();
        }
    }

    get options(): AwcDropdownItem[] {
        return [...this.querySelectorAll(awcDropdownItemTag)]!;
    }

    private focusedOptionIndex = -1;

    private handleKeyDown(event: KeyboardEvent) {
        if (!this.options.length) return;

        if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
            this.focusedOptionIndex++;
        } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
            this.focusedOptionIndex--;
        } else if (event.key === 'Escape') {
            this.focusedOptionIndex = -1;
            this.close();
            return;
        } else {
            return;
        }

        // Don't exceed array indexes
        this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, this.options.length - 1));

        this.options[this.focusedOptionIndex].focus();

        event.preventDefault();
    }

    private _selectedModeHandle(e: Event): void {
        const clickedItem = e.target as AwcDropdownItem;

        if (this.selectedMode) {
            clickedItem.selected = !clickedItem.selected;
        }

        if (clickedItem && !this.notClosing) {
            this.close();
        }
    }

    private _setMinWidth(): void {
        if (this._dropdownList) {
            this._dropdownList.style.width = `${this.width}px`;
        }
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('notClosing')) {
            this._updateOutsideClickHandler();
        }

        if (_changedProperties.has('width')) {
            this._setMinWidth();
        }

        if (_changedProperties.has('visible')) {
            if (this.visible) {
                this._setupPopover();
            } else {
                this._disconnectPopover();
            }
        }
    }

    private _updateOutsideClickHandler(): void {
        this._removeOutsideClickHandler();
        if (!this.notClosing && this.visible) {
            this._addOutsideClickHandler();
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('keydown', this.handleKeyDown);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this._removeOutsideClickHandler();
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-dropdown">
                <awc-popover
                    trigger-type="manual"
                    no-padding
                    .disabled=${this.disabled}
                    ?active=${this.visible}
                    .strategy="${this.strategy}"
                    .scrollOff=${this.scrollOff}
                    .position=${this.position}
                >
                    <div class="awc-dropdown__list" slot="awc-popover-content">
                        <slot @click=${this._selectedModeHandle}></slot>
                    </div>
                    <slot @click="${this._handleDropdown}" name="awc-dropdown-toggle"></slot>
                </awc-popover>
            </div>
        `;
    }

    static styles: CSSResultGroup = [scrollStyle, dropdownStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        'awc-dropdown': AwcDropdown;
    }
}
