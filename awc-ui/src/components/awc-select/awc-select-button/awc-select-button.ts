import { LitElement, html, svg, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../../utilities/event';
import { selectButtomStyle } from './awc-select-button.style';

export const awcSelectButtonTag = 'awc-select-button';
export const awcSelectButtonEvent = 'awc-select-button-create';

@customElement(awcSelectButtonTag)
export default class AwcSelectButton extends LitElement {
    @property({ type: String, reflect: true }) slot = 'awc-button';
    @property({ type: String, reflect: true }) label: string;
    @property({ type: Boolean, reflect: true }) icon = false;
    /**
     * Режим статической кнопки
     * @property {Boolean} button
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'static-button' }) staticButton = false;

    /**
     * Режим динамической кнопки создания элемента
     * @property {Boolean} button
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'dynamic-button' }) dynamicButton = false;

    /**
     * @ignore
     */

    @property({ type: String }) copyLabel: string;

    /**
     * @ignore
     */
    @property() textContent: string | null;

    public isClick = false;

    @event(awcSelectButtonEvent) private _onClick: EventDispatcher<boolean>;

    private _handleClick() {
        this.isClick = true;
        this._onClick(this.isClick);

        if ((this.isClick && this.textContent) || this.label) {
            return (this.textContent = '');
        }
    }

    private _handleKeyboard(event: KeyboardEvent) {
        if (event.code === 'Enter') {
            this._handleClick();

            if ((this.isClick && event.code && this.textContent) || this.label) {
                return (this.textContent = '');
            }
        }
    }

    private _handleLabelOrTextContent() {
        if (this.textContent && this.label && !this.icon) {
            return html`${this.label} «${this.textContent}»`;
        } else {
            if (this.textContent && this.label) {
                return html`${this.textContent}`;
            } else if (this.label) {
                return html`${this.label}`;
            }
        }
    }

    protected render(): TemplateResult {
        const addIcon = svg`
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9V3C9 2.44772 8.55228 2 8 2Z" fill="#3761E9"/>
            </svg>
        `;

        return html`
            <button class="awc-select-button" @click=${this._handleClick} @keydown=${this._handleKeyboard} label=${this.label} tabindex="0">
                ${this.icon ? html`${addIcon}` : ''} ${this._handleLabelOrTextContent()}
                <slot></slot>
            </button>
        `;
    }

    /**
     * @ignore
     */
    static styles = [selectButtomStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        'awc-select-button': AwcSelectButton;
    }

    interface HTMLElementEventNameMap {
        'awc-select-button-create': AwcSelectButton;
    }
}
