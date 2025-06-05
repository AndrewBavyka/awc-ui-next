import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { awcTooltipStyle } from '../awc-tooltip.style';
import { AwcTooltipPosition, AwcTooltipSpacing, AwcTooltipStrategy } from '../awc-tooltip.types';
import { setupFloating } from '../../../utilities/floating-utils';

export const awcTooltipMessageTag = 'awc-tooltip-message';

@customElement(awcTooltipMessageTag)
export default class AwcTooltipMessage extends LitElement {
    @property({ type: String }) message = '';
    @property({ type: String, reflect: true }) position: AwcTooltipPosition = 'top';
    @property({ type: String, reflect: true }) strategy: AwcTooltipStrategy = 'absolute';
    @property({ type: Number, reflect: true }) spacing: AwcTooltipSpacing = 8;
    @property({ type: Boolean, reflect: true }) marker = true;
    @property({ type: Boolean }) active = false;
    @property({ type: Boolean, attribute: 'match-width', reflect: true }) matchWidth = false;
    @property({ type: Object }) referenceEl: HTMLElement | null = null;

    @query('.awc-tooltip') private tooltipEl!: HTMLElement;
    @query('.awc-tooltip__arrow') private arrowEl!: HTMLElement;

    private cleanupFloating: (() => void) | null = null;

    static styles: CSSResult = awcTooltipStyle;

    connectedCallback() {
        super.connectedCallback();
        this.updatePosition();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.cleanupFloating?.();
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        if (
            changedProperties.has('active') ||
            changedProperties.has('position') ||
            changedProperties.has('spacing') ||
            changedProperties.has('strategy') ||
            changedProperties.has('matchWidth') ||
            changedProperties.has('referenceEl')
        ) {
            this.updatePosition();
        }
    }

    private getValidSpacing(): number {
        const parsedSpacing = Number(this.spacing);
        return isNaN(parsedSpacing) ? 8 : parsedSpacing;
    }

    private updatePosition(): Promise<void> {
        if (!this.tooltipEl || !this.referenceEl || !this.active) {
            this.cleanupFloating?.();
            return Promise.resolve();
        }

        this.cleanupFloating?.();

        this.tooltipEl.style.position = this.strategy;

        return new Promise((resolve) => {
            this.cleanupFloating = setupFloating(this.referenceEl!, this.tooltipEl, this.marker ? this.arrowEl : null, {
                position: this.position,
                strategy: this.strategy,
                spacing: this.getValidSpacing(),
                matchReferenceWidth: this.matchWidth,
            });
            requestAnimationFrame(() => resolve());
        });
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-tooltip ${this.active ? 'visible' : ''}" role="tooltip">
                <p class="awc-tooltip__message">${this.message}</p>
                ${this.marker ? html`<div class="awc-tooltip__arrow" data-popper-arrow></div>` : ''}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [awcTooltipMessageTag]: AwcTooltipMessage;
    }
}
