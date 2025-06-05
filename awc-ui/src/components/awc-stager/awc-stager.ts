import { LitElement, TemplateResult, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { stagerStyle } from './awc-stager.style';

/**
 * `awc-stager` - Компонент для отображения изменения статуса.
 *
 * @element awc-die
 *
 * @fires awc-stager-change - Событие изменения состояния шага.
 */
@customElement('awc-stager')
export default class AwcStager extends LitElement {
    /**
     * Общее количество шагов
     * @property {Number}
     * @default 5
     */
    @property({ type: Number, reflect: true }) steps = 5;
    /**
     * Статус шага, предназначен для обновления текущего шага.
     * @property {Number}
     * @default 2
     */
    @property({ type: Number, reflect: true }) current = 2;
    /**
     * Используется для установки цвета. Поддерживает HEX, RGB, RGBA, Propety.
     * @property {String}
     * @default --colors-light-primary
     */
    @property({ type: String, attribute: 'step-color' }) stepColor = '--colors-light-primary';
    /**
     * @event awc-stager-change - Событие изменения состояния шага.
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-stager-change') private _onChange: EventDispatcher<number>;

    private _connected = false;

    connectedCallback() {
        super.connectedCallback();
        this._connected = true;
        this._stepUpdater();
    }

    private _handleChange() {
        this._onChange(this.current);
    }

    private _colorUpdater(target: HTMLElement): void {
        if (target) {
            if (this.stepColor.startsWith('--')) {
                target.style.cssText = `background-color: var(${this.stepColor})`;
            } else {
                target.style.cssText = `background-color: ${this.stepColor}`;
            }
        }
    }

    private _stepUpdater(): void {
        if (!this._connected) return;

        let currentStatus = this.current;

        if (isNaN(currentStatus) || currentStatus < 1) {
            currentStatus = 1;
            this.current = currentStatus;
        }

        const stagerItems = this.shadowRoot?.querySelectorAll('.awc-stager__item') as NodeListOf<HTMLElement>;

        stagerItems.forEach((item, index) => {
            const stepNumber = index + 1;
            const isCurrentStep = stepNumber < currentStatus + 1;
            if (item.classList.toggle('awc-stager__item--current', isCurrentStep)) {
                this._colorUpdater(item);
            }
        });
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        super.attributeChangedCallback(name, oldVal, newVal);

        if (name === 'step-color' && newVal !== null) {
            this.stepColor = newVal;

            this._stepUpdater();
        }
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('current')) {
            this._stepUpdater();
            this._handleChange();
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-stager">
                <div class="awc-stager__progress">${this._renderProgress()}</div>
            </div>
        `;
    }

    private _renderProgress() {
        return Array.from({ length: this.steps }, () => html`<div class="awc-stager__item"></div>`);
    }

    /**
     * @ignore
     */
    static styles = [stagerStyle];
}
