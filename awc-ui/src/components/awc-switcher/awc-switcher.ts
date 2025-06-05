import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { FormControlMixin } from '@open-wc/form-control';
import { switcherStyle } from './awc-switcher.style';

/**
 * `awc-switcher` - Компонент переключатель
 *
 * @element awc-switcher
 *
 * @fires awc-switcher-toggle - Срабатывает каждый раз когда switcher переключается.
 *
 */

export const awcSwitcherTag = 'awc-switcher';

export enum AwcSwitcherVariant {
    primary = 'primary',
    gray = 'gray',
    white = 'white',
}

export enum AwcSwitcherSize {
    Regular = 'regular',
    Small = 'small',
}

@customElement(awcSwitcherTag)
export default class AwcSwitcher extends FormControlMixin(LitElement) {
    /**
     * Определяет активность свитчера.
     * @property {boolean} checked
     * @default false
     */
    @property({ type: Boolean, reflect: true }) checked = false;

    /**
     * Отключает свитчер.
     * @property {boolean} disabled
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Имя свитчера.
     * @property {string} name
     * @default
     */
    @property({ type: String, reflect: true }) name: string;

    /**
     * Значение свитчера.
     * @property {string} value
     * @default
     */
    @property({ type: String, reflect: true }) value: string;

    /**
     * Вариант отображения переключателя.
     * @property {string} variant
     * @default primary
     */
    @property({ type: String, reflect: true }) variant: AwcSwitcherVariant = AwcSwitcherVariant.primary;

    /**
     * Варианты размеров переключателя.
     * @property {string} size
     * @default regular
     */
    @property({ type: String, reflect: true }) size: AwcSwitcherSize = AwcSwitcherSize.Regular;
    /**
     * Цвет состояния переключателя.
     * @type {string}
     * @default
     * @example custom-colot="red", custom-color="#FFFFFF", custom-color="var(--my-color)"
     */
    @property({ reflect: true, attribute: 'custom-color' }) customColor: string;

    /**
     * @event awc-switcher-toggle - Срабатывает каждый раз когда switcher переключается.
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-switcher-toggle') private _onToggle: EventDispatcher<boolean>;

    private _onChange(): void {
        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    private _handleToggle(): void {
        if (this.disabled) return;

        this.checked = !this.checked;
        this._onToggle(this.checked);
        this._onChange();
    }

    private _handleKeyDown(event: KeyboardEvent) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this._handleToggle();
            event.preventDefault();
        }
    }

    private _settingCustomColor(): void {
        if (this.customColor) {
            this.style.setProperty('--awc-switcher-custom-color', this.customColor);
        }
    }

    resetFormControl(): void {
        this.checked = false;
    }

    shouldFormValueUpdate(): boolean {
        return this.checked;
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('checked') || changedProperties.has('value')) {
            this.setValue(this.value);
        }

        if (changedProperties.has('customColor')) {
            this._settingCustomColor();
        }
    }

    protected render(): TemplateResult {
        return html`
            <label class="awc-switcher__label" @click=${this._handleToggle}>
                <span class="awc-switch" role="switch" ?checked=${this.checked} aria-readonly=${!!this.disabled} @keydown=${this._handleKeyDown} tabindex="0">
                    <div class="awc-switch__focus"></div>
                </span>
                <slot class="label"></slot>
            </label>
        `;
    }

    /**
     * @ignore
     */
    static styles = [switcherStyle];
}
