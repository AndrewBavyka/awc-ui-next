import { html, LitElement, TemplateResult, CSSResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EventDispatcher, event } from '../../utilities/event';
import { awcTripleToggleStyle } from './awc-triple-toggler.style';
import { AwcToggleState } from './awc-triple-toggler.types';

export const awcTripleTogglerTag = 'awc-triple-toggler';

/**
 * `awc-triple-toggler` - Компонент тройного переключателя.
 *
 * Этот компонент представляет собой тройной переключатель с возможностью выбора одного из трех состояний.
 *
 * @element awc-triple-toggler
 * @fires awc-triple-toggler-change - Событие, которое срабатывает при изменении состояния переключателя.
 */

@customElement(awcTripleTogglerTag)
export default class AwcTripleToggler extends LitElement {
    /**
     * Состояние переключателя.
     * @property {ToggleState}
     * @default first
     */
    @property({ type: String, reflect: true }) state: AwcToggleState = 'first';

    /**
     * Событие изменения состояния.
     *
     * @event awc-triple-toggler-change
     * @type {CustomEvent<ToggleState>}
     */
    @event('awc-triple-toggler-change')
    private _onChangeState: EventDispatcher<AwcToggleState>;

    private _setState(newState: AwcToggleState) {
        this.state = newState;
    }

    private _handleKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            switch (this.state) {
                case 'first':
                    if (event.key === 'ArrowRight') this._setState('second');
                    break;
                case 'second':
                    if (event.key === 'ArrowLeft') this._setState('first');
                    if (event.key === 'ArrowRight') this._setState('third');
                    break;
                case 'third':
                    if (event.key === 'ArrowLeft') this._setState('second');
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
                    <div class="awc-triple-toggler__option first-option" @click="${() => this._setState('first')}"></div>
                    <div class="awc-triple-toggler__option second-option" @click="${() => this._setState('second')}"></div>
                    <div class="awc-triple-toggler__option third-option" @click="${() => this._setState('third')}"></div>
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
