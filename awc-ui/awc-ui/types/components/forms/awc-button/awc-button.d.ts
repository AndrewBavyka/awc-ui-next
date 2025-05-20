import { LitElement, TemplateResult, PropertyValueMap, CSSResultGroup } from 'lit';
import { ButtonType, SizeType, VariantType, ColorType, TargetType } from './awc-button.types';
import AwcSpinner from '../../awc-spinner/awc-spinner';
export declare const awcButtonTag = "awc-button";
/**
 * Кнопка (`awc-button`).
 * Используется для выполнения действий пользователя при взаимодействии с элементом интерфейса.
 * Этот компонент поддерживает кастомные стили, различные состояния и варианты отображения.
 *
 * @element awc-button
 * @slot - Основное содержимое кнопки.
 * @cssproperty [--awc-button-display=inline-block] Устанавливает свойство отображения кнопки
 */
export default class AwcButton extends LitElement {
    /**
     * Имя кнопки
     * @property {String}
     * @default
     */
    name: string;
    /**
     * Значение кнопки
     * @property {String}
     * @default
     */
    value: string;
    /**
     * Цвет фона кнопки
     * @property {ColorType}
     * @default blue
     */
    background: ColorType;
    /**
     * Размер кнопки
     * @property {SizeType}
     * @default regular
     */
    size: SizeType;
    /**
     * Вариант стиля кнопки
     * @property {VariantType}
     * @default primary
     */
    variant: VariantType;
    /**
     * Тип кнопки
     * @property {ButtonType}
     * @default submit
     */
    type: ButtonType;
    /**
     * Тип перехода по ссылке
     * @property {TargetType}
     * @default _self
     */
    target: TargetType;
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {String}
     * @default
     */
    href: string;
    /**
     * Флаг активации/деактивации кнопки
     * @property {Boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * Флаг активации/деактивации окрашивания иконки в цвет текста.
     * @property {Boolean}
     * @default false
     */
    filling: boolean;
    /**
     * Флаг отображения спинера загрузки
     * @property {Boolean}
     * @default false
     */
    loading: boolean;
    autofocus: boolean;
    private button;
    get spinner(): AwcSpinner;
    focus(): void;
    private _handleButtonClick;
    private _renderSpinner;
    private _settingCurrentSpinnerVariant;
    private _checkingSpinnerInSlot;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected render(): TemplateResult;
    /**
     * @ignore
     */
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcButtonTag]: AwcButton;
    }
}
