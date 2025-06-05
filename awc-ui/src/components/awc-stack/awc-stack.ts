import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stackStyle } from './awc-stack.style';
import { FlexDirectionType, AlignItemsType, JustifyContentType, GapType, FlexWrapType } from './awc-stack.types';

export const awcStackTag = 'awc-stack';

/**
 * `awc-stack` - Компонент-обертка, который управляет расположением ближайших дочерних элементов по вертикальной или горизонтальной оси с необязательным интервалом между каждым дочерним элементом.
 *
 * @element awc-stack
 */
@customElement(awcStackTag)
export default class AwcStack extends LitElement {
    /**
     * Определяет, как элементы flexbox упорядочиваются внутри контейнера flexbox.
     * Возможные значения: "row", "column".
     *
     * @property {FlexDirectionType} flexDirection
     * @attribute flex-direction
     * @type {string}
     * @default row
     */
    @property({ type: String, reflect: true, attribute: 'flex-direction' }) flexDirection: FlexDirectionType = 'row';

    /**
     * Определяет, как элементы flexbox выравниваются вдоль поперечной оси.
     * Возможные значения: "start", "center", "end".
     *
     * @property {AlignItemsType} alignItems
     * @attribute align-items
     * @type {string}
     * @default start
     */
    @property({ type: String, reflect: true, attribute: 'align-items' }) alignItems: AlignItemsType = 'start';

    /**
     * Определяет, как элементы flexbox распределяются вдоль основной оси.
     * Возможные значения: "center", "start", "end", "baseline", "space-between", "space-around", "space-evenly".
     *
     * @property {JustifyContentType} justifyContent
     * @attribute justify-content
     * @type {string | undefined}
     */
    @property({ type: String, reflect: true, attribute: 'justify-content' }) justifyContent: JustifyContentType;

    /**
     * Определяет размер промежутка между элементами flexbox.
     * Возможные значения: "none", "2xs", "xs", "s", "sm", "m", "l", "xl", "2xl", "3xl".
     *
     * @property {GapType} gap
     * @type {string}
     * @default s
     */
    @property({ type: String, reflect: true }) gap: GapType = 's';

    /**
     * Определяет, будет ли flex-контейнер однострочным или многострочным.
     * Возможные значения: "nowrap", "wrap", "wrap-reverse".
     *
     * @property {FlexWrapType} flexWrap
     * @attribute flex-wrap
     * @type {string}
     */
    @property({ type: String, reflect: true, attribute: 'flex-wrap' }) flexWrap: FlexWrapType;

    /**
     * Определяет, будет ли элемент отрисовываться как flex или inline-flex.
     *
     * @property {boolean} isInline
     * @attribute inline-flex
     * @type {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'inline-flex' }) isInline: boolean = false;

    /**
     * Устанавливает ширину 100%
     *
     * @property {boolean} fullWidth
     * @attribute full-width
     * @type {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'full-width' }) fullWidth: boolean = false;

    protected render(): TemplateResult {
        return html`<slot></slot>`;
    }

    /**
     * @ignore
     */

    static styles: CSSResultGroup = [stackStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcStackTag]: AwcStack;
    }
}
