import { LitElement, html, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { progressBarStyle } from './awc-progress-bar.style';

export const awcProgressBarTag = 'awc-progress-bar';

interface ProgressUpdate {
    value: number;
    maxReached: boolean;
}

export enum AwcProgressBarSizes {
    EXTRASMALL = 'extrasmall',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

/**
 * Элемент интерфейса, основная задача которого, показать на каком этапе находится загрузка данных.
 *
 * @element awc-progress-bar
 *
 * @fires awc-progress-bar-success - Событие, возникающее когда value достигает максимального (max) значения.
 *
 */

@customElement(awcProgressBarTag)
export default class AwcProgressBar extends LitElement {
    /**
     * Текущее значение прогресса.
     *
     * @property {number} value
     * @default 0
     */
    @property({ type: Number, reflect: true }) value = 0;
    /**
     * Максимальное значение прогресса.
     *
     * @property {number} max
     * @default 100
     */
    @property({ type: Number, reflect: true }) max = 100;
    /**
     * Текстовый заголовок, отображаемый рядом с прогресс-баром.
     *
     * @property {string} label
     * @default -
     */
    @property({ type: String, reflect: true }) label = '';
    /**
     * Размер полосы загрузки.
     *
     * @property {string} size
     * @default midium
     */
    @property({ type: String, reflect: true }) size: AwcProgressBarSizes = AwcProgressBarSizes.MEDIUM;
    /**
     * Флаг для отображения процентов.
     * @property {boolean} hide-percent
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'hide-percent' }) hidePercent = false;

    /**
     * Событие, возникающее когда value достигает максимального (max) значения.
     *
     * @event awc-progress-bar-success
     * @type {EventDispatcher<ProgressUpdate>}
     * @private
     */
    @event('awc-progress-bar-success') private _onSucces: EventDispatcher<ProgressUpdate>;

    @query('.awc-progress-bar__filler') fillerElement!: HTMLElement;

    private _validateAndUpdateValues(): void {
        if (isNaN(this.value) || this.value < 0) {
            this.value = 0;
        }

        if (isNaN(this.max) || this.max < 0) {
            this.max = 100;
        }

        if (this.value > this.max) {
            this.value = this.max;
            this._onSuccesEvent();
        }

        this._updateFillerWidth();
    }

    private _updateFillerWidth(): void {
        const percentage = (this.value / this.max) * 100;

        if (this.fillerElement) {
            this.fillerElement.style.width = `${percentage}%`;
        }
    }

    private _onSuccesEvent(): void {
        const update: ProgressUpdate = { value: this.value, maxReached: true };

        this._onSucces(update);
        this._updateFillerWidth();
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('value') || changedProperties.has('max')) {
            this._validateAndUpdateValues();
        }
    }

    protected render(): TemplateResult {
        const isPercent = this.hidePercent ? '' : '%';
        return html`
            <div ?hide-percent=${this.hidePercent} size=${this.size} class="awc-progress-bar">
                ${this.label
                    ? html`<div class="awc-progress-bar__label">${this.label}: <span class="awc-progress-bar__value">${this.value}${isPercent}</span></div>`
                    : ''}
                <div class="awc-progress-bar__track">
                    <div class="awc-progress-bar__filler"></div>
                </div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [progressBarStyle];
}
