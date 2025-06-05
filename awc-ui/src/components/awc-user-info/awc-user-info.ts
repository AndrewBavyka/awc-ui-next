import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AwcAvatarColor, AwcAvatarSize } from '../awc-avatar/awc-avatar.types';
import { userInfoStyle } from './awc-user-info.style';
import { AwcUserInfoStatus, AwcUserInfoTarget } from './awc-user-info.types';

/**
 * Элемент для отображения информации о пользователе.
 * @element awc-user-info
 */
@customElement('awc-user-info')
export default class AwcUserInfo extends LitElement {
    /**
     * Имя пользователя
     * @property {string}
     * @default
     * @example "Иванов Иван"
     */
    @property({ type: String, reflect: true }) name: string;
    /**
     * Дополнительная информация о пользователе
     * @property {string}
     * @default
     * @example "Frontend-разработчик"
     */
    @property({ type: String, reflect: true }) description: string;
    /**
     * Инвертирование положения name и description
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) reverse = false;
    /**
     * Статус пользователя
     * @property {AwcUserInfoStatus}
     * @default none
     * @example "complete", "none", "fail"
     */
    @property({ type: String, reflect: true, attribute: 'avatar-status' }) status: AwcUserInfoStatus = "none";

    /**
     * Ссылка на изображение для аватарки.
     * @property {string}
     * @default
     */
    @property({ type: String, attribute: 'avatar-image' }) avatarLink: string;
    /**
     * Тип перехода по ссылке
     * @property {AwcUserInfoTarget}
     * @default none
     * @example "_blank", "_self"
     */
    @property({ type: String }) target: AwcUserInfoTarget = "_self";
    /**
     * Принимает код hex цвета
     * @property {string}
     * @default
     */
    @property({ type: String, attribute: 'avatar-custom-color' })
    avatarCustomColor: string;
    /**
     * Принимает ссылку для перехода
     * @property {string}
     * @default
     */
    @property({ type: String }) href: string;
    /**
     * Цвет аватарки.
     * @type {string}
     * @default global-blue-400
     * @example "global-red-2-600", "global-green-300"
     */
    @property({ type: String, attribute: 'avatar-color' })
    avatatColor: AwcAvatarColor = 'global-blue-400';
    /**
     * Размер аватарки.
     * @type {string}
     * @default 36
     * @example "24", "32", "36", "40", "48", "128", "160"
     */
    @property({ type: String, attribute: 'avatar-size' }) avatarSize: AwcAvatarSize = '32';

    protected render(): TemplateResult {
        const isLink = this.href
            ? html`
                  <div class="awc-user-info__wrapper">
                      <a class="awc-user-info awc-user-info--link" href=${this.href} target=${this.target} name=${this.name} ?reverse=${this.reverse}>
                          <div class="awc-user-info__main">
                              <awc-avatar
                                  .size=${this.avatarSize}
                                  title=${this.name}
                                  image-link=${this.avatarLink}
                                  status=${this.status}
                                  color=${this.avatatColor}
                                  custom-color="${this.avatarCustomColor}"
                              ></awc-avatar>
                              <div class="awc-user-info__description ${this.reverse ? 'awc-user-info__description--reverse' : ''}">
                                  ${this.name ? html`<p class="awc-user-info__name">${this.name}</p>` : ''}
                                  ${this.description ? html`<p class="awc-user-info__status">${this.description}</p>` : ''}
                              </div>
                          </div>
                      </a>
                  </div>
              `
            : html`
                  <div class="awc-user-info__wrapper">
                      <div class="awc-user-info" name=${this.name} ?reverse=${this.reverse}>
                          <div class="awc-user-info__main">
                              <awc-avatar
                                  .size=${this.avatarSize}
                                  title=${this.name}
                                  image-link=${this.avatarLink}
                                  status=${this.status}
                                  color=${this.avatatColor}
                                  custom-color="${this.avatarCustomColor}"
                              ></awc-avatar>
                              <div class="awc-user-info__description ${this.reverse ? 'awc-user-info__description--reverse' : ''}">
                                  ${this.name ? html`<p class="awc-user-info__name">${this.name}</p>` : ''}
                                  ${this.description ? html`<p class="awc-user-info__status">${this.description}</p>` : ''}
                              </div>
                          </div>
                      </div>
                  </div>
              `;

        return isLink;
    }

    /**
     * @ignore
     */
    static styles = [userInfoStyle];
}
