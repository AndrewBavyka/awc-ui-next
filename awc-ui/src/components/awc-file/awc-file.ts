import { CSSResult, html, LitElement, PropertyValues, TemplateResult, nothing } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import { AwcFileDisplayType, AwcFileVariant } from './awc-file.types';
import { awcFileStyles } from './awc-file.style';
import AwcFileItem, { awcFileItemTag } from './awc-file-item/awc-file-item';
import { AWC_FILE_ARROW_ICON, AWC_FILE_VIEW_ICONS } from './awc-file.icons';
import AwcIconButton from '../awc-icon-button/awc-icon-button';
import { setLocale } from '../../generated/localization';
import { allLocales } from '../../generated/locale-codes';

export const awcFileTag = 'awc-file';
type LocaleType = (typeof allLocales)[number];
const DISPLAY_TYPES: AwcFileDisplayType[] = ['grid', 'list_block', 'list'];

enum NamesDisplayTypes {
    ListView,
    ListBlockView,
    GridView,
}

const displayTypeMessages: Record<NamesDisplayTypes, string> = {
    [NamesDisplayTypes.ListView]: msg('List view'),
    [NamesDisplayTypes.ListBlockView]: msg('List block view'),
    [NamesDisplayTypes.GridView]: msg('Grid view'),
};

@localized()
@customElement(awcFileTag)
export default class AwcFile extends LitElement {
    @property({ type: String, reflect: true }) heading: string = '';
    @property({ type: Number, reflect: true }) counter: number = 0;
    @property({ type: String, reflect: true }) view: AwcFileDisplayType = 'list_block';
    @property({ type: String, reflect: true }) variant: AwcFileVariant = 'regular';
    @property({ type: String }) locale: LocaleType = 'en';
    @property({ type: Boolean, reflect: true }) open: boolean = false;

    @queryAll('awc-icon-button') private _viewButtons!: NodeListOf<AwcIconButton>;

    get fileItems(): AwcFileItem[] {
        return Array.from(this.querySelectorAll<AwcFileItem>(awcFileItemTag));
    }

    connectedCallback() {
        super.connectedCallback();
        this._updateFileItemsView();

        document.addEventListener('DOMContentLoaded', () => {
            if (this.locale && allLocales.includes(this.locale)) {
                setLocale(this.locale);
            }
        });
    }

    private _switchView(e: Event): void {
        const target = (e.target as HTMLElement).closest<HTMLElement>('[data-view]');
        if (!target) return;

        const newView = target.dataset.view as AwcFileDisplayType;
        if (newView && newView !== this.view) {
            this.view = newView;
            this._updateFileItemsView();
        }
    }

    private _toggleAccordion(e: MouseEvent): void {
        if ((e.target as HTMLElement).closest('.awc-file__views')) return;
        this.open = !this.open;
    }

    private _updateActiveButton(): void {
        this._viewButtons.forEach((button) => {
            button.toggleAttribute('active', button.dataset.view === this.view);
        });
    }

    private _updateFileItemsView(): void {
        this.fileItems.forEach((item) => (item.view = this.view));
    }

    protected updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);

        if (changedProperties.has('view')) {
            this._updateActiveButton();
        }

        if (changedProperties.has('variant') && this.variant === 'compact' && this.view !== 'list_block') {
            this.view = 'list_block';
            this._updateFileItemsView();
        }

        if (changedProperties.has('locale')) {
            if (this.locale && allLocales.includes(this.locale)) {
                setLocale(this.locale);
            }
        }
    }

    private _renderViewControls(): TemplateResult {
        const viewTypeMessages: Record<AwcFileDisplayType, string> = {
            grid: displayTypeMessages[NamesDisplayTypes.GridView],
            list_block: displayTypeMessages[NamesDisplayTypes.ListBlockView],
            list: displayTypeMessages[NamesDisplayTypes.ListView],
        };

        return html`
            <div class="awc-file__views" @click=${this._switchView}>
                ${DISPLAY_TYPES.map(
                    (type) => html`
                        <awc-tooltip position="bottom" strategy="fixed" .message=${msg(viewTypeMessages[type])}>
                            <awc-icon-button ?active=${this.view === type} data-view=${type}> ${AWC_FILE_VIEW_ICONS[type]} </awc-icon-button>
                        </awc-tooltip>
                    `
                )}
            </div>
        `;
    }

    private _renderRegularHeader(): TemplateResult {
        return this._renderViewControls();
    }

    private _renderAccordionHeader(): TemplateResult {
        return html`
            <div class="awc-file__header" @click=${this._toggleAccordion}>
                <div class="awc-file__icon">${AWC_FILE_ARROW_ICON}</div>
                <div class="awc-file__headline">
                    <p class="awc-file__title">${this.heading}</p>
                    ${this.counter > 0 ? html`<span class="awc-file__counter">${this.counter}</span>` : nothing}
                </div>
                <div class="awc-file__views ${this.open ? '' : 'awc-file__views--hidden'}">${this._renderViewControls()}</div>
            </div>
        `;
    }

    private _renderCompactHeader(): TemplateResult | typeof nothing {
        return nothing;
    }

    private _renderHeader(): TemplateResult | typeof nothing {
        switch (this.variant) {
            case 'regular':
                return this._renderRegularHeader();
            case 'accordion':
                return this._renderAccordionHeader();
            case 'compact':
                return this._renderCompactHeader();
            default:
                return nothing;
        }
    }

    private _renderContent(): TemplateResult {
        return html`
            <div ?inert=${!this.open} class="awc-file__accordion">
                <div class="awc-file__accordion__wrapper">
                    <div @slotchange=${this._updateFileItemsView} class="awc-file__body">
                        <slot></slot>
                    </div>
                    <div class="awc-file__button">
                        <slot name="awc-file-button"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    protected render(): TemplateResult {
        return html` <section class="awc-file awc-file--${this.variant}">${this._renderHeader()} ${this._renderContent()}</section> `;
    }

    static styles: CSSResult = awcFileStyles;
}
