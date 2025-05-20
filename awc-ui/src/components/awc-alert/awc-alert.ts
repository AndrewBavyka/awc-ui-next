import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcAlertStyles } from './awc-alert.style';
import { AwcAlertVariant, AwcAlertColor } from './awc-alert.types';

/**
 * Элемент предупреждения awc-alert.
 * Используется для отображения сообщений пользователю с различными цветами и вариантами отображения.
 * Этот компонент поддерживает кастомные стили и различные типы уведомлений.
 *
 * @element awc-alert
 * @slot - Основное содержимое уведомления.
 */
export const awcAlertTag = 'awc-alert';

@customElement(awcAlertTag)
export default class AwcAlert extends LitElement {
    /**
     * Цвет уведомления.
     *
     * @type  {AwcAlertColor}
     * @default primary
     */
    @property({ type: String, reflect: true }) color: AwcAlertColor = 'primary';

    /**
     * Вариант отображения уведомления.
     *
     * @type  {'block' | 'message'}
     * @default block
     */
    @property({ type: String, reflect: true }) variant: AwcAlertVariant = 'block';

    protected render(): TemplateResult {
        return html`
            <div class="awc-alert">
                <p class="awc-alert__title"><slot></slot></p>
            </div>
        `;
    }

    static styles?: CSSResult = awcAlertStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAlertTag]: AwcAlert;
    }
}
