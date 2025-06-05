import { html, LitElement, TemplateResult, CSSResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EventDispatcher, event } from '../../utilities/event';
import { awcTripleToggleStyle } from './awc-triple-toggler.style';

export const awcTripleTogglerTag = 'awc-triple-toggler';

/**
 * `awc-triple-toggler` - Компонент тройного переключателя.
 *
 * Этот компонент представляет собой тройной переключатель с возможностью выбора одного из трех состояний.
 *
 * @element awc-triple-toggler
 * @fires awc-triple-toggler-change - Событие, которое срабатывает при изменении состояния переключателя.
 */

export enum ToggleState {
    First = 'first',
    Second = 'second',
    Third = 'third',
}

@customElement(awcTripleTogglerTag)
export default class AwcTripleToggler extends LitElement {
    /**
     *
     * @type {string}
     * @@default first
     */
    @property({ type: String, reflect: true }) state: ToggleState = ToggleState.First;

    /**
     * Событие изменения состояния.
     *
     * @event awc-triple-toggler-change
     * @type {CustomEvent<ToggleState>}
     */
    @event('awc-triple-toggler-change')
    private _onChangeState: EventDispatcher<ToggleState>;

    private _setState(newState: ToggleState) {
        this.state = newState;
    }

    private _handleKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            switch (this.state) {
                case ToggleState.First:
                    if (event.key === 'ArrowRight') this._setState(ToggleState.Second);
                    break;
                case ToggleState.Second:
                    if (event.key === 'ArrowLeft') this._setState(ToggleState.First);
                    if (event.key === 'ArrowRight') this._setState(ToggleState.Third);
                    break;
                case ToggleState.Third:
                    if (event.key === 'ArrowLeft') this._setState(ToggleState.Second);
                    break;
            }
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('state')) {
            this._onChangeState(this.state);
        }
    }

    protected render(): TemplateResult {
        return html`
            <div tabindex="0" role="switch" class="awc-triple-toggler" @keydown="${this._handleKeydown}">
                <div class="awc-triple-toggler__track">
                    <div class="awc-triple-toggler__option first-option" @click="${() => this._setState(ToggleState.First)}"></div>
                    <div class="awc-triple-toggler__option second-option" @click="${() => this._setState(ToggleState.Second)}"></div>
                    <div class="awc-triple-toggler__option third-option" @click="${() => this._setState(ToggleState.Third)}"></div>
                </div>
                <div class="awc-triple-toggler__thumb ${this.state}"></div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResult = awcTripleToggleStyle;
}
