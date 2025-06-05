import { CSSResult, LitElement, html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import AwcSegmentSwitcherItem, { AwcSegmentSwitcherItemTag } from './awc-segment-switcher-item/awc-segment-switcher-item';
import { segmentSwitcherStyle } from './awc-segment-switcher.style';
import anime from 'animejs';

@customElement('awc-segment-switcher')
export default class AwcSegmentSwitcher extends LitElement {
    @state() private sliderPosition = 0;
    @state() private sliderWidth = 0;
    @state() private isAnimating = false;
    @query('.slider') private _slider!: HTMLDivElement;
    @query('.awc-segment-switcher') private _container!: HTMLDivElement;

    private pendingItem: AwcSegmentSwitcherItem | null = null;
    private currentAnimation: any | null = null;
    private resizeObserver!: ResizeObserver;

    private get segmentSwitcherItems(): AwcSegmentSwitcherItem[] {
        return [...this.querySelectorAll(AwcSegmentSwitcherItemTag)] as AwcSegmentSwitcherItem[];
    }

    firstUpdated(): void {
        requestAnimationFrame(() => {
            const activeSegment = this.segmentSwitcherItems.find((segment) => segment.active);
            if (activeSegment) {
                this.initializeSliderPosition(activeSegment);
            } else {
                this.hideSlider();
            }

            this.resizeObserver = new ResizeObserver(() => {
                const activeSegment = this.segmentSwitcherItems.find((segment) => segment.active);
                if (activeSegment) {
                    this.updateSliderPosition(activeSegment);
                } else {
                    this.hideSlider();
                }
            });

            this.resizeObserver.observe(this._container);
        });
    }

    disconnectedCallback(): void {
        this.resizeObserver.disconnect();
    }

    private initializeSliderPosition(segmentItem: AwcSegmentSwitcherItem): void {
        const segmentItemRect = segmentItem.getBoundingClientRect();
        const containerRect = this._container.getBoundingClientRect();

        this.sliderPosition = segmentItemRect.left - containerRect.left;
        this.sliderWidth = segmentItem.offsetWidth;

        this._slider.style.transform = `translateX(${this.sliderPosition}px)`;
        this._slider.style.width = `${this.sliderWidth}px`;
        this._slider.style.visibility = 'visible';
        this._slider.style.opacity = '1';
    }

    private updateSliderPosition(segmentItem: AwcSegmentSwitcherItem): void {
        const segmentItemRect = segmentItem.getBoundingClientRect();
        const containerRect = this._container.getBoundingClientRect();

        const targetX = segmentItemRect.left - containerRect.left;
        const targetWidth = segmentItem.offsetWidth;

        this.sliderPosition = targetX;
        this.sliderWidth = targetWidth;

        this._slider.style.transform = `translateX(${targetX}px)`;
        this._slider.style.width = `${targetWidth}px`;
        this._slider.style.visibility = 'visible';
        this._slider.style.opacity = '1';
    }

    private handleSegmentItemClick(event: MouseEvent): void {
        const clickedItem = event.target as AwcSegmentSwitcherItem;
        if (clickedItem && !clickedItem.active) {
            if (this.isAnimating) {
                this.pendingItem = clickedItem;
            } else {
                this.setActiveItem(clickedItem);
            }
        }
    }

    private setActiveItem(segmentItem: AwcSegmentSwitcherItem): void {
        this.isAnimating = true;

        const segmentItemRect = segmentItem.getBoundingClientRect();
        const containerRect = this._container.getBoundingClientRect();

        const targetX = segmentItemRect.left - containerRect.left;
        const targetWidth = segmentItem.offsetWidth;

        this.segmentSwitcherItems.forEach((segment) => {
            segment.active = false;
        });
        segmentItem.active = true;

        if (this.currentAnimation) {
            this.currentAnimation.pause();
            anime.remove(this._slider);
        }

        this.currentAnimation = anime({
            targets: this._slider,
            translateX: targetX,
            width: targetWidth,
            duration: 300,
            easing: 'easeOutCubic',
            begin: () => {
                this._slider.style.visibility = 'visible';
                this._slider.style.opacity = '1';
            },
            complete: () => {
                this.sliderPosition = targetX;
                this.sliderWidth = targetWidth;
                this.isAnimating = false;
                this.currentAnimation = null;

                if (this.pendingItem) {
                    const nextItem = this.pendingItem;
                    this.pendingItem = null;
                    this.setActiveItem(nextItem);
                }
            },
        });
    }

    private hideSlider(): void {
        this.sliderPosition = 0;
        this.sliderWidth = 0;
        this._slider.style.transform = `translateX(0px)`;
        this._slider.style.width = `0px`;
        this._slider.style.visibility = 'hidden';
        this._slider.style.opacity = '0';
    }

    protected render() {
        return html`
            <div class="awc-segment-switcher">
                <div class="slider"></div>
                <slot @click=${this.handleSegmentItemClick}></slot>
            </div>
        `;
    }

    static styles: CSSResult = segmentSwitcherStyle;
}
