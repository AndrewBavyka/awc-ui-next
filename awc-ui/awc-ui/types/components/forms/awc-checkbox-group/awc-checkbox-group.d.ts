import { LitElement, TemplateResult } from 'lit';
import AwcCheckbox from './awc-checkbox/awc-checkbox';
export declare const awcCheckboxGroupTag = "awc-checkbox-group";
export declare const awcChangeEventName = "awc-checkbox-group-change";
declare const AwcCheckboxGroup_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & typeof LitElement;
/**
 * Элемент группы checkbox.
 *
 * @element awc-checkbox-group
 *
 * @fires awc-checkbox-group-change - Событие, возникающее при изменении состояния группы checkbox.
 *
 */
export default class AwcCheckboxGroup extends AwcCheckboxGroup_base {
    /**
     * Список выбранных значений в группе checkbox.
     * @ignore
     * @property {string[]}
     */
    value: string[];
    /**
     * Текстовая метка группы checkbox.
     *
     * @property {string}
     * @reflect
     */
    label: string;
    /**
     * Отображение дополнительной информации.
     *
     * @property {string}
     * @default
     */
    hint: string;
    /**
     * Горизонтальное отображение awc-checkbox
     *
     * @property {Boolean}
     * @default false
     */
    horizontal: boolean;
    private focusedOptionIndex;
    get options(): AwcCheckbox[];
    get checkedOptions(): string[];
    get availableOptions(): AwcCheckbox[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onChange;
    protected updated(changedProperties: Map<string, unknown>): void;
    private _handleCheckboxItem;
    private handleKeyDown;
    private handleFocus;
    protected render(): TemplateResult;
    /**
     * @ignore
     */
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        [awcCheckboxGroupTag]: AwcCheckboxGroup;
    }
    interface HTMLElementEventMap {
        [awcChangeEventName]: CustomEvent<string[]>;
    }
}
export {};
