import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { AwcSelectVariant } from './awc-select.types';
import AwcSelectItem from './awc-select-item/awc-select-item';
export declare const awcSelectTag = "awc-select";
declare const AwcSelect_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & typeof LitElement;
export default class AwcSelect extends AwcSelect_base {
    #private;
    name?: string;
    label?: string;
    placeholder?: string;
    inputPlaceholder?: string;
    variant: AwcSelectVariant;
    hint?: string;
    customError?: string;
    html: boolean;
    disabled: boolean;
    required: boolean;
    autoselectOff: boolean;
    reset: boolean;
    multiple: boolean;
    search: boolean;
    staticError: boolean;
    value?: string | string[];
    private isOpen;
    private inputValue;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: import("lit").CSSResult;
    private get options();
    private get selectedOptions();
    open(): void;
    close(): void;
    registerOption(option: AwcSelectItem): void;
    unregisterOption(option: AwcSelectItem): void;
    protected update(changedProperties: PropertyValues): void;
    private handleToggleDropdown;
    private handleInput;
    private handleChipsClick;
    private handleOptionSelect;
    private applyFilter;
    private syncValueWithSelected;
    private selectSingleOption;
    private toggleMultipleOption;
    private updateRegisteredOptions;
    private getOptionValue;
    private getOptionText;
    private getOptionHTML;
    private getFormValue;
    private renderSearchInput;
    private renderChips;
    private renderPlaceholder;
    private renderHeadContent;
    private renderHead;
    private renderList;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcSelectTag]: AwcSelect;
    }
}
export {};
