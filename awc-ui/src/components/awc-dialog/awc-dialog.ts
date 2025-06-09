import { LitElement, html, TemplateResult, CSSResultGroup, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { dialogStyle } from './awc-dialog.style';
import { AWC_DIALOG_ICONS } from './awc-dialog.icons';
import AwcButton from '../awc-button/awc-button';
import { EventDispatcher, event } from '../../utilities/event';
import { AwcDialogVariant } from './awc-dialog.types';

const awcDialogTag = 'awc-dialog';

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
    @property({ type: String, reflect: true }) variant: AwcDialogVariant = 'info';
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
        const setCurrentIcon = this.variant === 'info' ? AWC_DIALOG_ICONS.infoIcon : AWC_DIALOG_ICONS.errorIcon;

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

    static styles?: CSSResultGroup = [dialogStyle];
}
