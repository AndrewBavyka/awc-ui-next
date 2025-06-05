import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { skeletonStyle } from './awc-skeleton.style';

export const awcSkeletonTag = 'awc-skeleton';

export enum SkeletonEffect {
    None = 'none',
    Pulse = 'pulse',
    Sheen = 'sheen',
}

export enum SkeletonRounded {
    Radius_8 = '8',
    Radius_12 = '12',
    Radius_Rounded = 'rounded',
}

export enum SkeletonColor {
    Primary = 'primary',
    Secodary = 'secondary',
}

@customElement(awcSkeletonTag)
export default class AwcSkeleton extends LitElement {
    /**
     * Определяет, какой эффект будет использовать скелетон.
     * @type {string}
     * @default pulse
     */
    @property({ type: String, reflect: true }) effect: SkeletonEffect = SkeletonEffect.Pulse;

    /**
     * Задает скругления.
     * @type {string}
     * @default rounded
     */
    @property({ type: String, reflect: true }) rounded: SkeletonRounded = SkeletonRounded.Radius_Rounded;

    /**
     * Цвет скелетона
     * @type {string}
     * @default primary
     */
    @property({ type: String, reflect: true }) color: SkeletonColor = SkeletonColor.Primary;

    protected render(): TemplateResult {
        return html`
            <div class="awc-skeleton">
                <div class="awc-skeleton__indicator"></div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [skeletonStyle];
}
