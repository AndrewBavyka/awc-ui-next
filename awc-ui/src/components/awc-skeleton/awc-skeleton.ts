import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { skeletonStyle } from './awc-skeleton.style';
import { AwcSkeletonEffect, AwcSkeletonColor, AwcSkeletonRounded } from './awc-skeleton.types';

export const awcSkeletonTag = 'awc-skeleton';

@customElement(awcSkeletonTag)
export default class AwcSkeleton extends LitElement {
    /**
     * Определяет, какой эффект будет использовать скелетон.
     * @property {AwcSkeletonEffect}
     * @default pulse
     */
    @property({ type: String, reflect: true }) effect: AwcSkeletonEffect = 'pulse';

    /**
     * Задает скругления.
     * @property {AwcSkeletonRounded}
     * @default rounded
     */
    @property({ type: String, reflect: true }) rounded: AwcSkeletonRounded = 'rounded';

    /**
     * Цвет скелетона
     * @property {AwcSkeletonColor}
     * @default primary
     */
    @property({ type: String, reflect: true }) color: AwcSkeletonColor = 'primary';

    protected render(): TemplateResult {
        return html`
            <div class="awc-skeleton">
                <div class="awc-skeleton__indicator"></div>
            </div>
        `;
    }

    static styles: CSSResultGroup = [skeletonStyle];
}
