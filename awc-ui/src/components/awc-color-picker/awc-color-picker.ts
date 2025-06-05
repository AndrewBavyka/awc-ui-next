import { LitElement, html, TemplateResult, CSSResultGroup, PropertyValueMap, svg, PropertyValues } from 'lit';
import { customElement, property, state, query, queryAll } from 'lit/decorators.js';
import { FormControlMixin } from '@open-wc/form-control';
import { EventDispatcher, event } from '../../utilities/event';
import { colorPickerStyle } from './awc-color-picker.style';
import AwcTab, { awcTabTag } from '../awc-tabs-group/awc-tab/awc-tab';
import AwcPopover from '../awc-popover/awc-popover';

/**
 * Элемент выбора цвета
 *
 * Используется для выбора цвета, как из базовой палитры, так и камтомный цвет.
 * @element awc-color-picker
 */

const awcColorPickerTag = 'awc-color-picker';

@customElement(awcColorPickerTag)
export default class AwcColorPicker extends FormControlMixin(LitElement) {
    /**
     * Имя атрибута поля ввода
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) name: string;
    /**
     * Текущее значение поля ввода.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) value: string;
    /**
     * Открытие/Закрытие списка выбора цветов
     * @property {boolean}
     * @default
     */
    @property({ type: Boolean, reflect: true }) active = false;
    /**
     * Флаг отображения кнопки сброса. (При отсутсвии awc-tab не работает)
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) reset = false;

    @state() BASE_PALETTE_COLORS = [
        '#ED3A3A',
        '#F74F4F',
        '#FB7C28',
        '#F8AF28',
        '#FED34A',
        '#81D83C',
        '#5FB829',
        '#1EA679',
        '#35D3AC',
        '#44CADA',
        '#2FB9CE',
        '#52ACF5',
        '#2A8CE3',
        '#3761E9',
        '#5D7EF7',
        '#8360F4',
        '#704AE5',
        '#AC3EC7',
        '#C764DF',
        '#E44662',
        '#FF7188',
        '#919BB6',
        '#55555A',
        '#26263E',
    ];

    @state() activeTab = 0;

    @queryAll('.awc-color-picker__color') colorItems!: NodeListOf<HTMLDivElement>;
    @query('input') private _inputColor!: HTMLInputElement;
    @query('slot') private _slot!: HTMLSlotElement;
    @query('awc-popover') private _popover!: AwcPopover;

    @event('awc-color-picker-change') private _onChangeColor: EventDispatcher<string>;

    private get tabs(): AwcTab[] {
        return [...this.querySelectorAll(awcTabTag)] as AwcTab[];
    }

    private _triggerChangeEvent(e: Event): void {
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }

    private _handleColorSelection(e: Event): void {
        const colorItem = e.currentTarget as HTMLButtonElement;

        if (!colorItem || !colorItem.hasAttribute('value')) return;

        this.colorItems.forEach((item) => item.classList.remove('active-color'));

        colorItem.classList.add('active-color');

        const colorItemValue = colorItem.getAttribute('value')?.toLowerCase();

        if (colorItemValue) {
            this.value = colorItemValue;

            this._triggerChangeEvent(e);
            this._onChangeColor(this.value);
        }
    }

    private _setCustomColorValue(e: InputEvent): void {
        this.value = this._inputColor.value;
    }

    private _setDefaultColorInBasePalette(): void {
        this.colorItems.forEach((item) => item.classList.remove('active-color'));

        this.BASE_PALETTE_COLORS.forEach((color) => {
            if (this.value && color === this.value.toUpperCase()) {
                this.colorItems.forEach((item) => {
                    if (item.getAttribute('value') === color) {
                        item.classList.add('active-color');
                    }
                });
            }
        });
    }

    private _checkAssignedAwcTabs(): void {
        if (!this.tabs) return;

        let activeTabIndex = -1;

        this.tabs.forEach((tab, index) => {
            if (tab.active) {
                activeTabIndex = index;
            }

            tab.addEventListener('click', () => {
                this.activeTab = index;
                console.log('CLICK');
            });

            tab.addEventListener('change', (e) => e.stopPropagation());
        });

        if (activeTabIndex === -1) {
            if (this.tabs[0]) {
                this.tabs[0].active = true;
            }
            this.activeTab = 0;
        } else {
            this.activeTab = activeTabIndex;
        }

        this._checkAwcTabsLength();
    }

    private _checkAwcTabsLength(): void {
        if (this.tabs.length > 2) {
            console.warn('Maximum number of tabs exceeded');
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', () => {
            this._checkAssignedAwcTabs();
        });
    }

    private _resetColorPicker(): void {
        this._inputColor.value = '#000000';
        this.value = '';

        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        this.colorItems.forEach((colorItem) => colorItem.classList.remove('active-color'));
    }
    private _colorPickerOpenEvent(e: CustomEvent) {
        if (e.detail) {
            this.active = true;
        }
    }

    private _colorPickerCloseEvent(e: CustomEvent) {
        if (!e.detail) {
            this.active = false;
        }
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('value')) this.setValue(this.value);

        this._setDefaultColorInBasePalette();

        if (this.active) {
            this._popover.addEventListener('focusout', this._handleFocusOut.bind(this));
        }
    }

    private _handleFocusOut(event: FocusEvent): void {
        const relatedTarget = event.relatedTarget as HTMLElement;

        if (!relatedTarget) return;

        const isInsidePopover = this._popover.contains(relatedTarget);
        const isInsideTabs = this.tabs.some((tab) => tab.contains(relatedTarget));

        if (!isInsidePopover && !isInsideTabs) {
            this.close();
        }
    }

    open(): void {
        this._popover.show();
    }

    close(): void {
        this._popover.hide();
    }

    private _togglePopover(): void {
        !this.active ? this.open() : this.close();
    }

    private _triggerKeyboard(e: KeyboardEvent): void {
        if (e.code === 'Enter' || e.code === 'Space') {
            !this.active ? this.open() : this.close();
        }
    }

    protected render(): TemplateResult {
        const resetButtonSvg = svg`
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_29752_259031)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 3C6.23858 3 4 5.23858 4 8V9C4 9.40446 3.75636 9.7691 3.38268 9.92388C3.00901 10.0787 2.57889 9.9931 2.29289 9.70711L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683418 5.90237 1.31658 5.90237 1.70711 6.29289L2.0633 6.64909C2.09212 6.5722 2.13014 6.4998 2.17601 6.43323C2.8875 3.32155 5.67264 1 9 1C12.866 1 16 4.13401 16 8C16 11.866 12.866 15 9 15C7.36709 15 5.86228 14.4396 4.67131 13.5014C4.23746 13.1597 4.16282 12.5309 4.50458 12.0971C4.84634 11.6633 5.47509 11.5886 5.90893 11.9304C6.75982 12.6007 7.83189 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM9 9C9.55229 9 10 8.55228 10 8C10 7.44772 9.55229 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55228 8.44771 9 9 9Z"
            fill="#919BB6"
          />
        </g>
        <defs>
          <clipPath id="clip0_29752_259031">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `;

        const arrowIcon = svg`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
      </svg>
    `;

        return html`
            <awc-popover @awc-popover-open="${this._colorPickerOpenEvent}" @awc-popover-close="${this._colorPickerCloseEvent}" no-padding trigger-type="manual">
                <div @click=${this._togglePopover} @keydown=${this._triggerKeyboard} tabindex="${this.active ? -1 : 0}" class="awc-color-picker-activator">
                    <span class="awc-color-picker-current-color" style="background-color: ${this.value}"></span>
                    <div class="awc-color-picker-arrow ${this.active ? 'open' : ''}">${arrowIcon}</div>
                </div>

                <div class="awc-color-picker" slot="awc-popover-content">
                    <div class="awc-color-pciker__header">
                        <div class="awc-color-picker__tabs">
                            <slot @slotchange=${this._checkAssignedAwcTabs}></slot>
                            ${this.reset && this._slot && this._slot.assignedElements().length!
                                ? html` <div tabindex="0" @click=${this._resetColorPicker} class="awc-color-picker__reset">${resetButtonSvg}</div> `
                                : ''}
                        </div>
                    </div>
                    <div class="awc-color-picker__main">
                        <div class="awc-color-picker__view ${this.activeTab === 0 ? 'awc-color-picker__view--active' : ''}">
                            <div class="awc-color-picker__palete" @change=${this._triggerChangeEvent}>
                                ${this.BASE_PALETTE_COLORS.map(
                                    (color) => html`
                                        <button
                                            @click=${this._handleColorSelection}
                                            value=${color}
                                            class="awc-color-picker__color"
                                            style="background-color: ${color}"
                                        ></button>
                                    `
                                )}
                            </div>
                        </div>
                        <div class="awc-color-picker__view ${this.activeTab === 1 ? 'awc-color-picker__view--active' : ''}">
                            <input
                                class="awc-color-picker__input"
                                type="color"
                                @change=${this._triggerChangeEvent}
                                @input=${this._setCustomColorValue}
                                name=${this.name}
                            />
                        </div>
                    </div>
                </div>
            </awc-popover>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [colorPickerStyle];
}
