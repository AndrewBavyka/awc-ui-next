import { FormControlMixin, FormValue, requiredValidator } from '@open-wc/form-control';
import { LitElement, PropertyValues, TemplateResult, html, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { AwcSelectVariant } from './awc-select.types';
import { awcSelectStyles } from './awc-select.style';
import AwcSelectItem from './awc-select-item/awc-select-item';
import { IAwcSelectItemData } from './awc-select-item/awc-select-item.types';

export const awcSelectTag = 'awc-select';

@customElement(awcSelectTag)
export default class AwcSelect extends FormControlMixin(LitElement) {
    @property({ type: String, reflect: true }) name?: string;
    @property({ type: String, reflect: true }) label?: string;
    @property({ type: String, reflect: true }) placeholder?: string;
    @property({ type: String, reflect: true }) variant: AwcSelectVariant = 'fill';
    @property({ type: String, reflect: true }) hint?: string;
    @property({ type: String, attribute: 'custom-error' }) customError?: string;
    @property({ type: String, attribute: 'input-placeholder' }) inputPlaceholder?: string;

    @property({ type: Boolean, reflect: true }) html = false;
    @property({ type: Boolean, reflect: true }) disabled = false;
    @property({ type: Boolean, reflect: true }) required = false;
    @property({ type: Boolean, attribute: 'autoselect-off' }) autoselectOff = false;
    @property({ type: Boolean, reflect: true }) reset = false;
    @property({ type: Boolean, reflect: true }) multiple = false;
    @property({ type: Boolean, reflect: true }) search = false;
    @property({ type: Boolean, attribute: 'static-error' }) staticError = false;

    @property({ type: Array }) value?: string | string[];

    @state() private isOpen = false;
    @state() private inputValue = '';
    @state() validationMessage: string = '';

    @query(".awc-select__head") validationTarget: HTMLElement;

    #registeredOptions = new Map<string, IAwcSelectItemData>();

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
    static formControlValidators = [requiredValidator];
    static styles = awcSelectStyles;

    private get options(): AwcSelectItem[] {
        return [...this.querySelectorAll('awc-select-item')] as AwcSelectItem[];
    }

    private get selectedOptions(): AwcSelectItem[] {
        return this.options.filter((item) => item.selected);
    }

    open(): void {
        this.isOpen = true;
    }

    close(): void {
        this.isOpen = false;
        this.focusedOptionIndex = -1;
    }

    registerOption(option: AwcSelectItem): void {
        const value = option.value || option.textContent?.trim() || '';
        this.#registeredOptions.set(value, {
            value,
            selected: option.selected,
            disabled: option.disabled,
        });
    }

    validityCallback(): string | void {
        const selectElement = document.createElement("select") as HTMLSelectElement;
        selectElement.required = this.required;

        return selectElement.validationMessage;
    }

    validationMessageCallback(message: string): void {
        if (this.customError && !this.staticError) {
            // TODO: Это нужно для того что при отправке формы, сообщение сразу отображалось,
            // иначе пока пользователь сам не зафокусирует компонент не сработает при отправке формы.
            this.validationMessage = message;
            this.validationMessage = this.customError;
        } else {
            this.validationMessage = message;
        }
    }

    shouldFormValueUpdate(): boolean {
        if (Array.isArray(this.value) && this.multiple) {
            return this.value.length > 0;
        } else {
            return this.value !== null && this.value !== "";
        }
    }

    unregisterOption(option: AwcSelectItem): void {
        const value = option.value || option.textContent?.trim() || '';
        this.#registeredOptions.delete(value);
    }

    #onInvalid(event: Event): void {
        event.preventDefault();
        this.validationTarget.focus();
    };

    resetFormControl(): void {
        this.options.forEach((option) => {
            option.selected = false;
            option.requestUpdate();
        });

        this.value = this.multiple ? [] : undefined;

        this.#registeredOptions.forEach((data) => {
            data.selected = false;
        });

        this.syncValueWithSelected();
        this.updateRegisteredOptions();

        this.isOpen = false;
        this.setValue(null);
    }

    private focusedOptionIndex = -1;
    private lastKeyPressedTime = 0;
    private typedCharacters = "";
    private keyPressThreshold = 500;

    private handleFocusOptionByKey(key: string) {
        const currentTime = Date.now();
        const elapsedTimeSinceLastKeyPress = currentTime - this.lastKeyPressedTime;

        if (elapsedTimeSinceLastKeyPress > this.keyPressThreshold) {
            this.typedCharacters = "";
        }

        this.lastKeyPressedTime = currentTime;
        this.typedCharacters += key.toLowerCase();

        const matchingOptionIndex = this.options.findIndex(option => {
            if (option.disabled) return false;

            const optionText = option.innerText.trim().toLowerCase();
            return optionText.startsWith(this.typedCharacters);
        });

        if (matchingOptionIndex !== -1) {
            this.focusedOptionIndex = matchingOptionIndex;
            this.options[matchingOptionIndex].focus();
        }
    }

    private _handleOptionKeyboard(event: KeyboardEvent) {
        if (this.focusedOptionIndex === -1 && ["Enter", "Space"].includes(event.code)) {
            this.handleToggleDropdown();

            event.preventDefault();
        } else if (this.isOpen === false && ["ArrowDown", "ArrowUp"].includes(event.code)) {
            this.open();
            event.preventDefault();
        } else if (event.code === "Escape") {
            this.close();
            event.preventDefault();
        } else if (this.isOpen && ["ArrowDown", "ArrowUp"].includes(event.code)) {
            const activeOptions = this.options.filter(option => !option.disabled);

            event.code === "ArrowDown" && this.focusedOptionIndex++;
            event.code === "ArrowUp" && this.focusedOptionIndex--;

            this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, activeOptions.length - 1));

            activeOptions[this.focusedOptionIndex].focus();

            event.preventDefault();
        } else if (this.isOpen && !this.search) {
            this.handleFocusOptionByKey(event.key);
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener("invalid", this.#onInvalid);

        this.updateComplete.then(() => {
            this.setValue(null);
        });
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        if (changedProperties.has('value') && this.name) {
            this.setValue(this.getFormValue());
        }
    }

    private handleToggleDropdown(): void {
        this.isOpen = !this.isOpen;
    }

    private handleInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.inputValue = input.value;
        this.applyFilter(this.inputValue);
    }

    private handleChipsClick(index: number): void {
        const option = this.selectedOptions[index];

        if (!option) return;

        option.selected = false;
        this.syncValueWithSelected();
    }

    private handleOptionSelect(event: CustomEvent): void {
        const target = event.composedPath().find((node) => node instanceof AwcSelectItem) as AwcSelectItem | undefined;
        if (!target) return;

        if (this.multiple) {
            this.toggleMultipleOption(target);
        } else {
            this.selectSingleOption(target);
        }
    }

    private applyFilter(filterText: string): void {
        const lowerCaseFilter = filterText.toLowerCase();
        this.options.forEach((item) => {
            const text = item.textContent?.trim().toLowerCase() || '';
            item.style.display = filterText && !text.includes(lowerCaseFilter) ? 'none' : 'block';
        });
    }

    private syncValueWithSelected(): void {
        let selectedOptions = this.selectedOptions;

        if (selectedOptions.length === 0 && !this.autoselectOff) {
            const firstValidOption = this.options.find((opt) => !opt.disabled);

            if (firstValidOption) {
                firstValidOption.selected = true;
                selectedOptions = [firstValidOption];
            }
        }

        const selectedValues = selectedOptions.map((opt) => this.getOptionValue(opt));

        if (this.multiple) {
            this.value = selectedValues.length > 0 ? selectedValues : [];
        } else {
            const selectedOption = selectedOptions[0];
            this.value = selectedOption ? this.getOptionValue(selectedOption) : undefined;

            this.options.forEach((item) => {
                if (item !== selectedOption) {
                    item.selected = false;
                    item.requestUpdate();
                }
            });
        }

        this.updateRegisteredOptions();
    }

    private selectSingleOption(target: AwcSelectItem): void {
        this.value = this.getOptionValue(target);

        target.selected = true;

        this.options.forEach((item) => {
            if (item !== target) {
                item.selected = false;
                item.requestUpdate();
            }
        });

        this.updateRegisteredOptions();
        this.close();
    }

    private toggleMultipleOption(target: AwcSelectItem): void {
        const value = this.getOptionValue(target);
        const currentValues = Array.isArray(this.value) ? [...this.value] : [];

        target.selected = !target.selected;
        target.requestUpdate();

        if (!currentValues.includes(value)) {
            this.value = [...currentValues, value];
        } else {
            this.value = currentValues.filter((v) => v !== value);
        }

        this.updateRegisteredOptions();
    }

    private updateRegisteredOptions(): void {
        const values = this.multiple ? (this.value as string[]) || [] : [this.value].filter((v): v is string => v !== undefined);

        this.#registeredOptions.forEach((data) => {
            data.selected = values.includes(data.value);
            const item = this.options.find((opt) => opt.value === data.value);

            if (item && item.selected !== data.selected) {
                item.selected = data.selected;
                item.requestUpdate();
            }
        });

        this.requestUpdate();
    }

    private getOptionValue(element: AwcSelectItem | undefined): string {
        if (!element) return '';
        return element.value || element.textContent?.trim() || '';
    }

    private getOptionText(element: AwcSelectItem | undefined): string {
        return element?.textContent?.trim() || '';
    }

    private getOptionHTML(element: AwcSelectItem | undefined): unknown {
        return element ? unsafeHTML(element.outerHTML) : '';
    }

    private getFormValue(): FormValue {
        if (this.multiple) {
            const formData = new FormData();
            ((this.value as string[]) || []).forEach((val) => formData.append(this.name!, val));
            return formData;
        }
        return Array.isArray(this.value) ? this.value[0] || null : this.value || null;
    }

    private renderSearchInput(): TemplateResult | typeof nothing {
        if (!this.search) return nothing;

        return html`
            <input class="awc-select__input" type="search" autocomplete="off" .value=${live(this.inputValue)} placeholder=${this.inputPlaceholder ?? ''} @input=${this.handleInput} />
        `;
    }

    private renderChips(): TemplateResult {
        return html`
            ${this.selectedOptions.map(
            (option, index) => html`
                    <awc-chips
                        .value=${option.value}
                        reset-button
                        @awc-chips-reset=${() => this.handleChipsClick(index)}
                        @click=${(e: Event) => e.stopPropagation()}
                    >
                        ${this.html ? this.getOptionHTML(option) : this.getOptionText(option)}
                    </awc-chips>
                `
        )}
        `;
    }

    private renderPlaceholder(): TemplateResult {
        return html`<span class="awc-select__placeholder">${this.placeholder}</span>`;
    }

    private renderHeadContent(): TemplateResult {
        this.syncValueWithSelected();
        const selectedOption = this.selectedOptions[0];

        if (this.multiple) {
            this.syncValueWithSelected();
            return html`${selectedOption ? this.renderChips() : this.renderPlaceholder()}`;
        }

        if (this.html && selectedOption) {
            return html`${this.getOptionHTML(selectedOption)}`;
        }

        return html`${selectedOption ? this.getOptionText(selectedOption) : this.renderPlaceholder()}`;
    }

    private renderHead(): TemplateResult {
        return html`
            <div class="awc-select__head" tabindex="0" @click=${this.handleToggleDropdown}>
                <slot name="awc-select-left-icon"></slot>
                ${this.renderHeadContent()}
            </div>
        `;
    }

    private renderList(): TemplateResult {
        return html`
            <ul class="awc-select__list" slot="awc-popover-content" @awc-select-option=${this.handleOptionSelect}>
                ${this.renderSearchInput()}
                <slot></slot>
            </ul>
        `;
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-select" @keydown=${this._handleOptionKeyboard}>
                ${this.label ? html`<label class="awc-select__label">${this.label}</label>` : nothing}
                <awc-popover match-reference-width spacing="0" no-padding strategy="fixed" trigger-type="manual" ?active=${this.isOpen}>
                    ${this.renderHead()} ${this.renderList()}
                </awc-popover>

                ${this.showError && this.required && !this.staticError
                ? html`<span class="awc-select__error">${this.validationMessage}</span>`
                : this.hint && !this.staticError
                    ? html`<span class="awc-select__hint">${this.hint}</span>`
                    : nothing}

                ${this.staticError && this.required && this.customError
                ? html`<span class="awc-select__error">${this.customError}</span>`
                : this.hint && this.staticError
                    ? html`<span class="awc-select__hint">${this.hint}</span>`
                    : nothing}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [awcSelectTag]: AwcSelect;
    }
}
