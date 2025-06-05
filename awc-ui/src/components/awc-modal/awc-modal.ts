import { LitElement, html, TemplateResult, CSSResultGroup, svg, PropertyValues } from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { modalStyles } from './awc-modal.style';
import { scrollStyle } from '../awc-scroll/awc-scroll.style';
import AwcTabsGroup, { awcTabsGroupTag } from '../awc-tabs-group/awc-tabs-group';
import AwcButton from '../awc-button/awc-button';
import { EventDispatcher, event } from '../../utilities/event';

export const awcModalTag = 'awc-modal';

/**
 * Элемент модальное окно.
 *
 * @element awc-modal
 *
 * @fires awc-modal-open - Событие, возникающее при открытии модального окна.
 * @fires awc-modal-close - Событие, возникающее при закрытии модального окна.
 *
 */
@customElement(awcModalTag)
export default class AwcModal extends LitElement {
    /**
     * Заголовок модального окна.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) heading: string;
    /**
     * Дополнительное описание модального окна.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) description: string;
    /**
     * Флаг указывающий, что модальное окно открыто.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) opened = false;
    /**
     * Флаг указывающий, что модальное окно может быть кастомизировано.
     * Отображается только подложка компонента.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) customizable = false;

    @queryAll("slot[name='awc-modal-button']") slottedButtons: HTMLSlotElement[];

    @state() private _isEmptyButtonSlot = true;

    /**
     * Событие, возникающее при открытии модального окна.
     *
     * @event awc-modal-open
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-modal-open') private _modalOpenEvent: EventDispatcher<boolean>;
    /**
     * Событие, возникающее при закрытии модального окна.
     *
     * @event awc-modal-close
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-modal-close') private _modalCloseEvent: EventDispatcher<boolean>;

    private _html = document.querySelector('html')!;

    private readonly _nonInertElements = ['awc-dialog', 'awc-modal', 'awc-file-upload-dialog'];

    get tabsGroup(): AwcTabsGroup {
        return this.querySelector(awcTabsGroupTag)!;
    }

    private _handleKeyClosing(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
            if (this.opened) {
                e.stopPropagation();
                this.close();
            } else {
                // Если модальное окно уже закрыто, удаляем слушатель
                document.removeEventListener('keydown', this._handleKeyClosing);
            }
        }
    }

    private _handleClickOutside(e: MouseEvent): void {
        const path = e.composedPath();
        if (!path.includes(this.shadowRoot!.querySelector('.awc-modal__content')!)) {
            this.close();
        }
    }

    private _toggleScrollLock(): void {
        if (this.opened) {
            this._html.style.overflow = 'hidden';
        } else {
            this._html.style.removeProperty('overflow');
        }
    }

    private _disableTabsDivider(): void {
        if (this.tabsGroup) {
            this.tabsGroup.noDivider = true;
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        this._handleKeyClosing = this._handleKeyClosing.bind(this);
        document.addEventListener('keydown', this._handleKeyClosing);
        this.addEventListener('click', this._handleClickOutside);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        document.removeEventListener('keydown', this._handleKeyClosing);
        this.removeEventListener('click', this._handleClickOutside);
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('opened')) {
            this._disableTabsDivider();

            if (this.opened) {
                this._onInert();
                this._modalOpenEvent(this.opened);
                document.addEventListener('keydown', this._handleKeyClosing);
            } else {
                this._removeInert();
                this._modalCloseEvent(this.opened);
                document.removeEventListener('keydown', this._handleKeyClosing);
            }
        }

        if (_changedProperties.has('opened') || _changedProperties.has('slottedButtons')) {
            this._checkSlottedButton();
        }
    }

    private _onInert(): void {
        const inertSiblings = (node: Node): void => {
            if (node.parentNode) {
                const siblings = Array.from(node.parentNode.children);

                siblings.forEach((elem) => {
                    if (elem !== node && elem instanceof HTMLElement) {
                        // Проверяем, не входит ли элемент в список исключений
                        const shouldBeInert = !this._nonInertElements.some((selector) => elem.matches(selector));

                        if (shouldBeInert) {
                            elem.inert = true;

                            if (elem.shadowRoot) {
                                const shadowChildren = elem.shadowRoot.children;
                                Array.from(shadowChildren).forEach((shadowChild) => {
                                    if (shadowChild instanceof HTMLElement) {
                                        shadowChild.inert = true;
                                    }
                                });
                            }
                        }
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
        const inertSelector = this._nonInertElements.map((selector) => `:not(${selector})`).join('');

        document.querySelectorAll(`[inert]${inertSelector}`).forEach((elem) => {
            if (elem instanceof HTMLElement) {
                elem.inert = false;
            }
        });

        document.querySelectorAll('*').forEach((elem) => {
            if (elem instanceof HTMLElement && elem.shadowRoot && !this._nonInertElements.some((selector) => elem.matches(selector))) {
                elem.shadowRoot.querySelectorAll('[inert]').forEach((shadowElem) => {
                    if (shadowElem instanceof HTMLElement) {
                        shadowElem.inert = false;
                    }
                });
            }
        });
    }

    get awcButtons(): AwcButton[] {
        return [...this.querySelectorAll('awc-button')];
    }

    private _checkSlottedButton(): void {
        const hasFooterButton = this.awcButtons.filter((button) => button.getAttribute('slot') === 'awc-modal-button');

        if (hasFooterButton.length) {
            this._isEmptyButtonSlot = false;
        } else {
            this._isEmptyButtonSlot = true;
            this.description = '';
        }
    }

    /**
     * Открытие модального окна.
     * @method open
     * @public
     */
    open(): void {
        this.opened = true;
    }

    /**
     * Закрытие модального окна.
     * @method close
     * @public
     */
    close(): void {
        this.opened = false;
    }

    private _renderCloseIcon(): TemplateResult {
        return svg`
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"/>
            </svg>
        `;
    }

    protected render(): TemplateResult {
        const withHeading = html`
            <div class="awc-modal__header--modal">
                <awc-header>
                    <h4 class="awc-modal-title">${this.heading}</h4>
                    <span class="awc-modal__close" @click=${this.close} slot="toolbar"> ${this._renderCloseIcon()} </span>
                    <div class="awc-modal__tab" slot="awc-header-tab">
                        <slot name="awc-modal-header"></slot>
                    </div>
                </awc-header>
            </div>
        `;

        return this.customizable
            ? html`
                  <div class="awc-modal">
                      <div class="awc-modal__content">
                          <div class="awc-modal-container">
                              <slot></slot>
                          </div>
                      </div>
                  </div>
              `
            : html`
                  <div class="awc-modal">
                      <div class="awc-modal__content">
                          <div class="awc-modal-container">
                              ${this.heading ? withHeading : ''}
                              <div class="awc-modal__body">
                                  <slot></slot>
                              </div>
                              <div class="awc-modal__footer ${this._isEmptyButtonSlot ? 'awc-modal__footer--popup' : ''}">
                                  ${this.description
                                      ? html`<p class="awc-modal__description">${this.description}</p>`
                                      : html`<slot name="awc-modal-description"></slot>`}
                                  <div class="awc-modal__buttons">
                                      <slot name="awc-modal-button"></slot>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [modalStyles, scrollStyle];
}
