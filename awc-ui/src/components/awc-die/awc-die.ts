import { CSSResultGroup, LitElement, TemplateResult, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { dieStyle } from './awc-die.style';
import { svg } from 'lit/static-html.js';
import { live } from 'lit/directives/live.js';
/**
 * `awc-die` - Компонент для отображения редактируемого или только для чтения текстового поля.
 *
 * @element awc-die
 *
 * @fires awc-die-change - Событие изменения состояния. Диспетчер событий возвращает новый текст.
 * @fires awc-die-focus - Событие фокусировки. Диспетчер событий возвращает текущий текст.
 * @fires awc-die-blur - Событие потери фокуса. Диспетчер событий возвращает текущий текст.
 *
 * @cssprop --awc-die-color - В данную переменную устанаваливаеся как цвет так и переменная CSS из атрибута color.
 */
@customElement('awc-die')
export default class AwcDie extends LitElement {
    /**
     * Текст заголовка комопнента
     * @property {string} text
     * @default ''
     */
    @property({ type: String }) text = '';

    /**
     * Заглушка (Placeholder).
     * @property {string} placeholder
     * @default ''
     */
    @property({ type: String }) placeholder = '';

    /**
     * Флаг, указывающий, находится ли компонент в режиме редактирования.
     * @property {boolean} editing
     * @default false
     */
    @property({ type: Boolean, reflect: true }) editing = false;

    /**
     * Цвет компонента, может быть установлен как цвет или переменная CSS.
     * @property {string} color
     * @default '--colors-light-primary'
     */
    @property({ type: String, attribute: 'color' }) color = '--colors-light-primary';

    /**
     * @event awc-die-change - Событие изменения состояния. Диспетчер событий возвращает новый текст.
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-die-change') private _onChange: EventDispatcher<string>;

    /**
     * @event awc-die-focus - Событие фокусировки. Диспетчер событий возвращает текущий текст.
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-die-focus') private _onFocus: EventDispatcher<string>;

    /**
     * @event awc-die-blur - Событие потери фокуса. Диспетчер событий возвращает текущий текст.
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-die-blur') private _onBlur: EventDispatcher<string>;

    @query('.awc-die__content--edit') private contentElement!: HTMLInputElement;

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('focus', this.handleFocus);
        this.addEventListener('blur', this.handleBlur);
        this.addEventListener('dblclick', this.handleMouseDown);
    }

    private handleFocus(): void {
        this._onFocus(this.text);
    }

    private handleBlur(): void {
        this._onBlur(this.text);
        this.stopEditing();
        this.triggerChange();
    }

    private handleMouseDown(): void {
        this.startEditing();
        this.setCursorToEnd();
    }

    private handleInput(): void {
        if (this.contentElement) {
            this.text = this.contentElement.value;
        }
    }

    private handleEnterKey(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.handleFocus();
            this.blur();
        }
    }

    private setCursorToEnd(): void {
        if (this.contentElement) {
            const length = this.contentElement.value.length;
            this.contentElement.setSelectionRange(length, length);
        }
    }

    private startEditing(): void {
        this.editing = true;
    }

    private stopEditing(): void {
        this.editing = false;
    }

    private triggerChange(): void {
        this._onChange(this.text);
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('editing')) {
            this._renderEditMode();
            if (this.contentElement) {
                this.contentElement.focus();
            }
        } else {
            this._renderReadOnlyMode();
        }
    }

    private _renderEditMode(): TemplateResult {
        return html`
            <input
                type="text"
                class="awc-die__content awc-die__content--edit"
                placeholder=${this.placeholder}
                .value=${live(this.text)}
                @input=${this.handleInput}
                @keyup=${this.handleEnterKey}
            />
        `;
    }

    private _renderReadOnlyMode(): TemplateResult {
        return html` <p class="awc-die__content">${this.text}</p> `;
    }

    private _renderIcon(): TemplateResult {
        const iconDrag = svg`
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H14C14.5523 7 15 6.5523 15 6C15 5.44772 14.5523 5 14 5H2ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H2Z" fill="#919BB6"/>
            </svg>
        `;
        return html` <div class="awc-die__icon">${iconDrag}</div> `;
    }

    protected render(): TemplateResult {
        const isVariable = this.color && this.color.startsWith('--');

        return html`
            <div class="awc-die" style=${isVariable ? `--awc-die-color: var(${this.color})` : `--awc-die-color: ${this.color}`}>
                ${this._renderIcon()}
                <div class="awc-die__main">${this.editing ? this._renderEditMode() : this._renderReadOnlyMode()}</div>
                <div class="awc-die__slotted">
                    <slot></slot>
                </div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [dieStyle];
}
