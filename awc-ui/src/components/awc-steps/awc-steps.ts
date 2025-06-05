import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stepsStyle } from './awc-steps.style';

/**
 * Компонент выполняемых шагов.
 * @element awc-steps
 */
@customElement('awc-steps')
export default class AwcSteps extends LitElement {
    /**
     * Уникальный идентификатор степпера.
     *
     * @property {String}
     * @default stepper-1
     */
    @property({ type: String, reflect: true }) id = 'stepper-1';

    /**
     * Список названий шагов.
     *
     * @property {Array}
     * @default string[]
     */
    @property({ type: Array, reflect: true }) report: string[] = [];

    /**
     * Статус шага, предназначен для обновления текущего шага.
     *
     * @property {Number}
     * @default 1
     */
    @property({ type: Number, reflect: true }) status = 1;

    private _calcSteps() {
        const steps = this.report.length;
        return Array.from({ length: steps }, (_, index) => (index + 1).toString());
    }

    private _stepUpdater(): void {
        let currentStatus = parseInt(this.status.toString(), 10);

        if (isNaN(currentStatus) || currentStatus < 1) {
            currentStatus = 1;
            this.status = currentStatus;
        }

        if (!this.shadowRoot) return;

        const progressItems = this.shadowRoot.querySelectorAll('.progress-item');

        if (currentStatus <= this.report.length) {
            progressItems.forEach((item, index) => {
                const stepNumber = index + 1;

                const isPastStep = stepNumber < currentStatus;
                const isCurrentStep = stepNumber === currentStatus;

                item.classList.toggle('progress-item--past', isPastStep);
                item.classList.toggle('progress-item--current', isCurrentStep);

                if (isPastStep) {
                    item.classList.remove('progress-item--completed');
                }
            });

            const isCompleted = currentStatus === this.report.length;

            progressItems.forEach((item) => {
                item.classList.toggle('progress-item--completed', isCompleted);
            });
            progressItems.forEach((item) => {
                item.classList.remove('progress-item--error');
            });
        } else {
            progressItems.forEach((item) => {
                item.classList.add('progress-item--error');
            });
        }
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('status')) {
            this._stepUpdater();
        }
    }

    protected firstUpdated(): void {
        this._calcSteps();
    }

    protected render(): TemplateResult {
        return html`
            <div id=${this.id} class="awc-steps">
                <div class="awc-steps__status">
                    <div class="awc-steps__sticker">Шаг ${this.status}</div>
                    <div class="awc-steps__report">${this.report[(this.status, 10) - 1]}</div>
                </div>
                <div class="awc-steps__progress">${this._renderProgress()}</div>
            </div>
        `;
    }

    private _renderProgress() {
        const steps = this.report.length;
        return Array.from({ length: steps }, () => html`<div class="progress-item"></div>`);
    }

    /**
     * @ignore
     */
    static styles = [stepsStyle];
}
