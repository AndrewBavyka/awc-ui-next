import { LitElement, TemplateResult, CSSResult } from 'lit';
import { AwcAlertVariant, AwcAlertColor } from './awc-alert.types';
/**
 * Элемент предупреждения awc-alert.
 * Используется для отображения сообщений пользователю с различными цветами и вариантами отображения.
 * Этот компонент поддерживает кастомные стили и различные типы уведомлений.
 *
 * @element awc-alert
 * @slot - Основное содержимое уведомления.
 */
export declare const awcAlertTag = "awc-alert";
export default class AwcAlert extends LitElement {
    /**
     * Цвет уведомления.
     *
     * @type  {AwcAlertColor}
     * @default primary
     */
    color: AwcAlertColor;
    /**
     * Вариант отображения уведомления.
     *
     * @type  {'block' | 'message'}
     * @default block
     */
    variant: AwcAlertVariant;
    protected render(): TemplateResult;
    static styles?: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAlertTag]: AwcAlert;
    }
}
