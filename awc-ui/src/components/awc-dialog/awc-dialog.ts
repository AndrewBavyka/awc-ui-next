import { LitElement, html, svg, TemplateResult, CSSResultGroup, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { dialogStyle } from './awc-dialog.style';
import AwcButton from '../awc-button/awc-button';
import { EventDispatcher, event } from '../../utilities/event';

const awcDialogTag = 'awc-dialog';

export enum DialogVariant {
    info = 'info',
    error = 'error',
}

const DIALOG_ICONS = {
    infoIcon: svg`
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5V28.5C24 29.3284 23.3284 30 22.5 30C21.6716 30 21 29.3284 21 28.5V9.5ZM22.5 37C23.3284 37 24 36.3284 24 35.5C24 34.6716 23.3284 34 22.5 34C21.6716 34 21 34.6716 21 35.5C21 36.3284 21.6716 37 22.5 37Z" fill="white"/>
    </svg>
    `,
    errorIcon: svg`
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 42C33.2696 42 42 33.2696 42 22.5C42 11.7304 33.2696 3 22.5 3C11.7304 3 3 11.7304 3 22.5C3 33.2696 11.7304 42 22.5 42ZM22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM14.1809 13.6699C13.6817 14.1691 13.6817 14.9786 14.1809 15.4778L20.9474 22.2444L14.181 29.0108C13.6817 29.51 13.6817 30.3195 14.181 30.8187C14.6802 31.318 15.4897 31.318 15.9889 30.8187L22.7554 24.0523L29.5218 30.8187C30.0211 31.318 30.8305 31.318 31.3298 30.8187C31.829 30.3195 31.829 29.51 31.3298 29.0108L24.5633 22.2444L31.3298 15.4778C31.8291 14.9786 31.8291 14.1691 31.3298 13.6699C30.8306 13.1706 30.0211 13.1706 29.5219 13.6699L22.7554 20.4364L15.9888 13.6699C15.4896 13.1706 14.6802 13.1706 14.1809 13.6699Z" fill="white"/>
    </svg>
    `,
};

/**
 *
 * Небольшое окно, используемое для отображения информации.
 * @element awc-dialog
 *
 * @fires awc-dialog-open - Событие, возникающее при открытии диалогового окна.
 * @fires awc-dialog-close - Событие, возникающее при закрытии диалогового окна.
 *
 */
@customElement(awcDialogTag)
export default class AwcDialog extends LitElement {
    /**
     * Заголовок окна
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) heading: string;
    /**
     * Описание окна
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) description: string;
    /**
     * Вариант отображения окна
     * @type {String}
     * @default info
     */
    @property({ type: String, reflect: true }) variant: DialogVariant = DialogVariant.info;
    /**
     * Флаг открытия/закрытия окна
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) opened = false;
    /**
     * Событие, возникающее при открытии диалогового окна.
     *
     * @event awc-dialog-open
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-dialog-open') private _onOpening: EventDispatcher<boolean>;
    /**
     * Событие, возникающее при закрытии диалогового окна.
     *
     * @event awc-dialog-close
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-dialog-close') private _onClosing: EventDispatcher<boolean>;

    @query("slot[name='awc-dialog-button']") private _slotButtons: HTMLSlotElement;
    @query('.awc-dialog__content') private _dialogContent: HTMLDivElement;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    private _clickOutside = this._handleClickOutside.bind(this);

    private _handleClickOutside(e: MouseEvent): void {
        const path = e.composedPath();

        if (!path.includes(this.shadowRoot!.querySelector('.awc-dialog__content')!)) {
            this.close();
        }
    }

    private _lockBody(): void {
        const body = document.querySelector('body')!;

        if (this.opened) {
            body.style.overflow = 'hidden';
            body.style.touchAction = 'none';
        } else {
            body.style.removeProperty('overflow');
            body.style.removeProperty('touch-action');
        }
    }

    private _onInert(): void {
        const inertSiblings = (node: Node): void => {
            if (node.parentNode) {
                Array.from(node.parentNode.childNodes).forEach((elem) => {
                    if (elem !== node && elem.nodeType === Node.ELEMENT_NODE) {
                        (elem as HTMLElement).inert = true;
                    }
                });
                if (node.parentNode !== document.body) {
                    inertSiblings(node.parentNode);
                }
            }
        };

        inertSiblings(this);
    }

    private _removeInert(): void {
        document.querySelectorAll('[inert]').forEach((elem) => {
            (elem as HTMLElement).inert = false;
        });
    }

    private _setCurrentStyleAwcButtonInSlot(): void {
        this._slotButtons.assignedElements().forEach((button, index) => {
            const awcButton = button as AwcButton;
            awcButton.size = 'large';

            if (index === 0 && this.opened) {
                awcButton.autofocus = true;
                requestAnimationFrame(() => awcButton.focus());
            }
        });
    }

    /**
     * Открытие диалогового окна
     * @method open
     * @public
     */
    open(): void {
        this.opened = true;
        this._onOpening(this.opened);
    }

    /**
     * Закрытие диалогового окна
     * @method open
     * @public
     */
    close(): void {
        this.opened = false;

        this._onClosing(this.opened);
    }

    private _closingOnEscape(event: KeyboardEvent): void {
        if (this.opened && event.key === 'Escape') {
            this.close();
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('click', this._clickOutside);

        document.addEventListener('DOMContentLoaded', () => {
            if (this.opened) {
                this._setCurrentStyleAwcButtonInSlot();
                this._onInert();
            } else {
                this._removeInert();
            }
        });
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('click', this._clickOutside);
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('opened')) {
            if (this.opened) {
                this._setCurrentStyleAwcButtonInSlot();
                this._onInert();
                this._dialogContent.focus();
            } else {
                this._removeInert();
            }

            // this._lockBody();
        }
    }

    protected render(): TemplateResult {
        const setCurrentIcon = this.variant === DialogVariant.info ? DIALOG_ICONS.infoIcon : DIALOG_ICONS.errorIcon;

        return html`
            <div @keydown=${this._closingOnEscape} tabindex="-1" class="awc-dialog">
                <div tabindex="${this.opened ? 0 : -1}" class="awc-dialog__content" variant=${this.variant}>
                    <div class="awc-dialog__body">
                        <div class="awc-dialog__icon">${setCurrentIcon}</div>
                        <div class="awc-dialog__text">
                            ${this.heading ? html`<p class="awc-dialog__heading">${this.heading}</p>` : ''}
                            ${this.description ? html`<p class="awc-dialog__description">${this.description}</p>` : ''}
                            <slot></slot>
                        </div>
                    </div>
                    <div class="awc-dialog__footer">
                        <div class="awc-dialog__buttons">
                            <slot name="awc-dialog-button"></slot>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles?: CSSResultGroup = [dialogStyle];
}
