import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { chipsStyle } from './awc-chips.style';

/**
 * Компонент чипс
 * @element awc-chips
 */
@customElement('awc-chips')
export default class AwcChips extends LitElement {
    /**
     * Флаг отображающий кнопку закрытия/сброса
     * @type {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'reset-button' }) resetButton = false;

    @event('awc-chips-reset') private _onRemoveChips: EventDispatcher<boolean>;

    @query('.awc-chips') chips: HTMLElement;
    @query('slot') slotElement!: HTMLSlotElement;

    private _checkedAwcAvatar(): void {
        const containTagAvatar = this.slotElement.assignedNodes().filter((node) => node.nodeName.toLowerCase() === 'awc-avatar');

        if (containTagAvatar.length === 1) {
            this.chips.classList.add('awc-chips__avatar');
        } else {
            this.chips.classList.remove('awc-chips__avatar');
        }
    }

    private handleResetClick(): void {
        this._onRemoveChips(this.resetButton);
    }

    protected updated(_changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        this._checkedAwcAvatar();
    }

    render() {
        return html`
            <div class="awc-chips">
                <slot @slotchange=${this._checkedAwcAvatar}></slot>
                ${this.resetButton
                    ? html` <svg
                          class="awc-chips__reset"
                          @click=${this.handleResetClick}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.70713 4.29291C5.3166 3.90239 4.68344 3.90239 4.29291 4.29291C3.90239 4.68344 3.90239 5.3166 4.29291 5.70713L6.58237 7.99658L4.29185 10.294C3.90191 10.6851 3.90286 11.3182 4.29397 11.7082C4.68508 12.0981 5.31824 12.0972 5.70818 11.7061L7.99659 9.4108L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.40868 7.99447L11.6902 5.70607C12.0802 5.31496 12.0792 4.68179 11.6881 4.29185C11.297 3.90191 10.6638 3.90286 10.2739 4.29397L7.99447 6.58025L5.70713 4.29291Z"
                          />
                      </svg>`
                    : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [chipsStyle];
}
