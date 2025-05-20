import { LitElement, TemplateResult, CSSResult } from 'lit';
import type AwcCheckboxGroup from '../awc-checkbox-group';
export declare const awcCheckboxTag = "awc-checkbox";
export declare enum AwcCheckboxSize {
    Regular = "regular",
    Small = "small"
}
declare const AwcCheckbox_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & typeof LitElement;
/**
 * Элемент checkbox.
 *
 * @element awc-checkbox
 *
 * @fires awc-checkbox-change - Событие, возникающее при изменении состояния checkbox.
 * @fires awc-focus - Событие, возникающее при фокусировке на checkbox.
 * @fires awc-blur - Событие, возникающее при потере фокуса checkbox.
 *
 */
export default class AwcCheckbox extends AwcCheckbox_base {
    /**
     * Значение checkbox.
     *
     * @property {string}
     */
    value: string;
    /**
     * Текстовая метка checkbox.
     *
     * @property {string}
     * @reflect
     */
    label: string;
    /**
     * Уникальное имя группы checkbox.
     *
     * @property {string}
     * @reflect
     */
    name?: string;
    /**
     * Флаг, указывающий, выбран ли checkbox.
     *
     * @property {boolean}
     * @reflect
     */
    checked: boolean;
    /**
     * Флаг, указывающий, является ли checkbox обязательным для выбора.
     *
     * @property {boolean}
     * @reflect
     */
    required: boolean;
    /**
     * Флаг, указывающий, отключен ли checkbox.
     *
     * @property {boolean}
     * @reflect
     */
    disabled: boolean;
    /**
     * Флаг, указывающий, находится ли checkbox в неопределенном состоянии.
     *
     * @property {boolean}
     * @reflect
     */
    indeterminate: boolean;
    /**
     * Статичное, принудительное отображение ошибки.
     * @property {boolean}
     * @default false
     */
    staticError: boolean;
    /**
     * Пользовательская ошибка валидации. (Автоматически становится приоритетной)
     * @type {string}
     * @default
     */
    customError?: string;
    /**
     * Выборо размера checkbox.
     * @type {string}
     * @default regular
     */
    size: string;
    /**
     * Цвет состояния checkbox.
     * @type {string}
     * @default
     * @example custom-colot="red", custom-color="#FFFFFF", custom-color="var(--my-color)"
     */
    customColor: string;
    validationMessage: string;
    /**
     * Событие изменения состояния checkbox.
     *
     * @event awc-checkbox-change
     * @type {EventDispatcher<boolean>}
     * @private
     */
    private onChange;
    /**
     * Событие фокусировки на checkbox.
     *
     * @event awc-focus
     * @type {EventDispatcher<string>}
     * @private
     */
    private onFocus;
    /**
     * Событие потери фокуса checkbox.
     *
     * @event awc-blur
     * @type {EventDispatcher<string>}
     * @private
     */
    private onBlur;
    checkboxElement: HTMLInputElement;
    labelCheckboxElement: HTMLLabelElement;
    validationTarget: HTMLInputElement;
    protected field: AwcCheckboxGroup | null;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static formControlValidators: import("@open-wc/form-control").Validator[];
    validityCallback(): string | void;
    validationMessageCallback(message: string): void;
    resetFormControl(): void;
    shouldFormValueUpdate(): boolean;
    protected update(changedProperties: Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleFieldValueChange;
    private _onInvalid;
    focus(): void;
    blur(): void;
    private _settingCustomColor;
    private _handleChange;
    protected render(): TemplateResult;
    static styles: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcCheckboxTag]: AwcCheckbox;
    }
}
export {};
