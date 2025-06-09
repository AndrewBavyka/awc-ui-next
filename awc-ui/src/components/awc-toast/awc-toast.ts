import { CSSResult, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { awcToastStyle } from './awc-toast.style';
import { AwcToastPosition, AwcToastType, AwcToastSanitizeLevel, IAwcToastOptions } from './awc-toast.types';
import { AWC_TOAST_CLOSE_ICON, AWC_TOAST_CHECKMARK_ICON, AWC_TOAST_ALERT_ICON } from './awc-toast.icons';
import DOMPurify from 'dompurify';
import anime from 'animejs';

export const awcToastTag = 'awc-toast';

@customElement(awcToastTag)
export default class AwcToast extends LitElement {
    /**
     * Текст уведомления.
     */
    @property({ type: String }) text?: string;

    /**
     * HTML-контент уведомления.
     * @property {string | undefined}
     */
    @property({ type: String }) htmlContent?: string;

    /**
     * Позиция уведомления на странице (отражается в атрибутах элемента).
     * @property {AwcToastPosition}
     * @default "top-center"
     */
    @property({ type: String, reflect: true }) position: AwcToastPosition = 'top-center';

    /**
     * Тип уведомления (отражается в атрибутах элемента).
     * @property {AwcToastType}
     * @default "info"
     */
    @property({ type: String, reflect: true }) variant: AwcToastType = 'info';

    /**
     * Длительность отображения уведомления в миллисекундах (отражается в атрибутах элемента).
     * @property {number}
     * @default 3000
     */
    @property({ type: Number, reflect: true }) duration = 3000;

    /**
     * Флаг, указывающий, следует ли отображать кнопку закрытия (отражается в атрибутах элемента).
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, attribute: 'with-close' }) withClose = false;

    /**
     * Флаг, указывающий, следует ли санитизировать HTML-контент для безопасности.
     * @property {boolean}
     * @default true
     */
    @property({ type: Boolean }) sanitize = true;

    /**
     * Уровень санитизации текста уведомления.
     * @property {AwcToastSanitizeLevel}
     * @default "sanitize"
     */
    @property({ type: String }) textSanitize: AwcToastSanitizeLevel = 'sanitize';

    /**
     * Уровень санитизации HTML-контента уведомления.
     * @property {AwcToastSanitizeLevel}
     * @default "sanitize"
     */
    @property({ type: String }) contentSanitize: AwcToastSanitizeLevel = 'sanitize';

    /**
     * Callback: Вызывается при показе тоста.
     */
    @property({ attribute: false }) onShown: ((toastElement: HTMLElement) => void) | undefined;

    /**
     * Callback: Вызывается при скрытии тоста.
     */
    @property({ attribute: false }) onHidden: (() => void) | undefined;

    /**
     * Callback: Вызывается при клике на тост.
     */
    @property({ attribute: false }) onClick: (() => void) | undefined;

    /**
     * Callback: Вызывается при клике на крестик.
     */
    @property({ attribute: false }) onCloseClick: (() => void) | undefined;

    @state() private isVisible = false;

    private isQueued = false;
    private timeoutId?: NodeJS.Timeout | number;
    private isHovered = false;
    private resumeTimeoutAfterHover?: NodeJS.Timeout | number;

    private static toastQueue: AwcToast[] = [];
    private static maxVisibleToasts = 5;

    connectedCallback() {
        super.connectedCallback();

        if (!window.AwcToast) this.initializeToast();

        if ((this.text || this.htmlContent) && !this.isQueued) {
            this.isQueued = true;
            AwcToast.addToQueue(this);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.clearTimeout();
        AwcToast.removeFromQueue(this);
    }

    private clearTimeout() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    }

    private static getToastContainer(position: string): HTMLElement {
        let container = document.querySelector(`.awc-toast-container-${position}`) as HTMLElement | null;
        if (!container) {
            container = document.createElement('div');
            container.className = `awc-toast-container awc-toast-container-${position}`;
            container.style.cssText = `
                position: fixed;
                z-index: 99999999;
                display: flex;
                flex-direction: column;
                gap: 8px;
                ${position === 'top-center' ? 'top: 20px; left: 50%; transform: translateX(-50%);' : 'bottom: 20px; left: 20px; align-items: flex-start;'}
            `;
            document.body.appendChild(container);
        }
        return container;
    }

    private static addToQueue(toast: AwcToast) {
        this.toastQueue.push(toast);
        const container = this.getToastContainer(toast.position);
        const isBottomLeft = toast.position === 'bottom-left';
        if (isBottomLeft) container.appendChild(toast);
        else container.insertBefore(toast, container.firstChild);
        this.processQueue(toast.position);
    }

    private static removeFromQueue(toast: AwcToast) {
        const index = this.toastQueue.indexOf(toast);
        if (index !== -1) this.toastQueue.splice(index, 1);
        this.processQueue(toast.position);
    }

    private static async processQueue(position: string) {
        const queue = this.toastQueue.filter((toast) => toast.position === position);
        const visibleToasts = queue.filter((toast) => toast.isVisible);
        const container = this.getToastContainer(position);
        const isBottomLeft = position === 'bottom-left';

        const nextToast = queue.find((toast) => !toast.isVisible);
        if (nextToast) await nextToast.show();

        if (visibleToasts.length > this.maxVisibleToasts) {
            const toastToHide = isBottomLeft ? visibleToasts[0] : visibleToasts[visibleToasts.length - 1];
            await toastToHide.hide();
        }

        const updatedVisible = queue.filter((toast) => toast.isVisible);

        if (updatedVisible.length > 0) {
            const newestToast = isBottomLeft ? updatedVisible[updatedVisible.length - 1] : updatedVisible[0];
            const toastElement = newestToast.renderRoot.querySelector('.awc-toast') as HTMLElement;
            if (toastElement) {
                const toastRect = toastElement.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                if (isBottomLeft) {
                    if (toastRect.bottom > viewportHeight) {
                        container.style.bottom = `${parseFloat(container.style.bottom || '20') + (toastRect.bottom - viewportHeight)}px`;
                    } else if (toastRect.top < 0 && toastRect.bottom <= viewportHeight) {
                        container.style.bottom = `${Math.max(20, parseFloat(container.style.bottom || '20') - Math.abs(toastRect.top))}px`;
                    }
                } else {
                    if (toastRect.top < 0) {
                        container.style.top = `${parseFloat(container.style.top || '20') - toastRect.top}px`;
                    } else if (toastRect.bottom > viewportHeight) {
                        container.style.top = `${Math.max(20, parseFloat(container.style.top || '20') - (toastRect.bottom - viewportHeight))}px`;
                    }
                }
            }
        }
    }

    private startAutoHideTimer() {
        if (this.duration && !this.isHovered) {
            this.timeoutId = setTimeout(() => {
                if (!this.isHovered) {
                    this.hide();
                } else {
                    this.resumeTimeoutAfterHover = setTimeout(() => {
                        this.startAutoHideTimer();
                    }, 500);
                }
            }, this.duration);
        }
    }

    private async show() {
        this.isVisible = true;
        await this.updateComplete;

        const toastElement = this.renderRoot.querySelector('.awc-toast') as HTMLElement;
        if (toastElement) {
            const isBottomLeft = this.position === 'bottom-left';

            await anime({
                targets: toastElement,
                opacity: [0, 1],
                translateY: isBottomLeft ? ['100%', '0%'] : ['-100%', '0%'],
                duration: 300,
                easing: 'easeOutQuad',
            }).finished;

            if (typeof this.onShown === 'function') {
                const toastElement = this.renderRoot.querySelector('.awc-toast') as HTMLElement;
                if (toastElement) {
                    this.onShown(toastElement);
                }
            }

            this.startAutoHideTimer();
            this.bindEvents(toastElement);
        }
    }

    private bindEvents(toastElement: HTMLElement) {
        toastElement.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.clearTimeout();
            if (this.resumeTimeoutAfterHover) clearTimeout(this.resumeTimeoutAfterHover);
        });

        toastElement.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.resumeTimeoutAfterHover = setTimeout(() => {
                this.startAutoHideTimer();
            }, 500);
        });

        toastElement.addEventListener('click', (e) => {
            const closeEl = this.renderRoot.querySelector('.awc-toast__close');
            if (!closeEl || !closeEl.contains(e.target as Node)) {
                if (this.onClick) {
                    this.onClick();
                }
            }
        });

        const closeEl = this.renderRoot.querySelector('.awc-toast__close');

        if (closeEl && this.onCloseClick) {
            closeEl.addEventListener('click', () => {
                this.onCloseClick?.();
            });
        }
    }

    private async hide() {
        this.clearTimeout();
        if (this.resumeTimeoutAfterHover) {
            clearTimeout(this.resumeTimeoutAfterHover);
            this.resumeTimeoutAfterHover = undefined;
        }

        const toastElement = this.renderRoot.querySelector('.awc-toast');
        if (!toastElement) return;

        const isBottomLeft = this.position === 'bottom-left';
        await anime({
            targets: toastElement,
            opacity: [1, 0],
            translateY: isBottomLeft ? ['0%', '100%'] : ['0%', '-100%'],
            duration: 300,
            easing: 'easeInQuad',
        }).finished;

        if (typeof this.onHidden === 'function') {
            this.onHidden();
        }

        this.isVisible = false;
        this.isQueued = false;
        this.remove();

        await AwcToast.processQueue(this.position);
    }

    private getIcon(): TemplateResult {
        if (this.variant === 'warning') {
            return AWC_TOAST_ALERT_ICON;
        } else {
            return AWC_TOAST_CHECKMARK_ICON;
        }
    }

    private handleClose() {
        this.hide();
    }

    private createToastInstance(variant: AwcToastType, text: string | HTMLElement, content?: string | HTMLElement, options?: IAwcToastOptions): AwcToast {
        const toast = document.createElement(awcToastTag) as AwcToast;
        toast.variant = variant;
        toast.duration = options?.timeOut ?? 3000;
        toast.withClose = true;
        toast.position = options?.position ?? 'top-center';

        const toHTML = (input: string | HTMLElement): string => {
            if (typeof input === 'string') {
                return input;
            } else if (input instanceof HTMLElement) {
                return input.outerHTML;
            }

            return '';
        };

        if (text != null) {
            toast.innerHTML += `<div class="awc-toast-slotted__text" slot="awc-toast-text">${toHTML(text)}</div>`;
        }

        if (content != null) {
            toast.innerHTML += `<div class="awc-toast-slotted__content" slot="awc-toast-content">${toHTML(content)}</div>`;
        }

        toast.onShown = options?.onShown;
        toast.onHidden = options?.onHidden;
        toast.onClick = options?.onClick;
        toast.onCloseClick = options?.onCloseClick;

        if (options?.textSanitize) toast.textSanitize = options.textSanitize;
        if (options?.contentSanitize) toast.contentSanitize = options.contentSanitize;

        toast.isQueued = true;

        return toast;
    }

    private initializeToast() {
        window.AwcToast = {
            error: (text: string, content?: string, options?: IAwcToastOptions) => {
                const toast = this.createToastInstance('error', text, content, options);
                AwcToast.addToQueue(toast);
                return toast;
            },
            info: (text: string, content?: string, options?: IAwcToastOptions) => {
                const toast = this.createToastInstance('info', text, content, options);
                AwcToast.addToQueue(toast);
                return toast;
            },
            success: (text: string, content?: string, options?: IAwcToastOptions) => {
                const toast = this.createToastInstance('success', text, content, options);
                AwcToast.addToQueue(toast);
                return toast;
            },
            warning: (text: string, content?: string, options?: IAwcToastOptions) => {
                const toast = this.createToastInstance('warning', text, content, options);
                AwcToast.addToQueue(toast);
                return toast;
            },
            clear: () => {
                AwcToast.toastQueue.forEach((toast) => toast.remove());
                AwcToast.toastQueue = [];
            },
            remove: (toast: AwcToast) => toast?.hide(),
            getContainer: (position = 'top-center') => AwcToast.getToastContainer(position),
            options: { positionClass: 'top-center' },
        };
    }

    private renderSanitizedContent(content: string, level: AwcToastSanitizeLevel): TemplateResult | string {
        if (level === 'safety') return html`${content}` || '';
        if (level === 'unsafe') return html`${unsafeHTML(content)}`;

        return html`${unsafeHTML(DOMPurify.sanitize(content))}`;
    }

    protected render(): TemplateResult | typeof nothing {
        if (!this.isVisible) return nothing;

        return html`
            <div class="awc-toast awc-toast--${this.variant}">
                <div class="awc-toast__icon">${this.getIcon()}</div>
                <div class="awc-toast__main">
                    <div class="awc-toast__text">
                        ${this.text ? this.renderSanitizedContent(this.text, this.textSanitize) : html`<slot name="awc-toast-text"></slot>`}
                    </div>
                    <div class="awc-toast__content">
                        ${this.htmlContent ? this.renderSanitizedContent(this.htmlContent, this.contentSanitize) : html`<slot name="awc-toast-content"></slot>`}
                    </div>
                </div>
                ${this.withClose ? html`<div class="awc-toast__close" @click=${this.handleClose}>${AWC_TOAST_CLOSE_ICON}</div>` : nothing}
            </div>
        `;
    }

    getShadowElement(selector: string): HTMLElement | null {
        return this.renderRoot ? this.renderRoot.querySelector(selector) : null;
    }

    static styles?: CSSResult = awcToastStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcToastTag]: AwcToast;
    }
    interface Window {
        AwcToast: {
            error: (
                text: string,
                content?: string,
                options?: {
                    timeOut?: number;
                    position?: AwcToastPosition;
                    textSanitize?: AwcToastSanitizeLevel;
                    contentSanitize?: AwcToastSanitizeLevel;
                }
            ) => AwcToast;
            info: (
                text: string,
                content?: string,
                options?: {
                    timeOut?: number;
                    position?: AwcToastPosition;
                    textSanitize?: AwcToastSanitizeLevel;
                    contentSanitize?: AwcToastSanitizeLevel;
                }
            ) => AwcToast;
            success: (
                text: string,
                content?: string,
                options?: {
                    timeOut?: number;
                    position?: AwcToastPosition;
                    textSanitize?: AwcToastSanitizeLevel;
                    contentSanitize?: AwcToastSanitizeLevel;
                }
            ) => AwcToast;
            warning: (
                text: string,
                content?: string,
                options?: {
                    timeOut?: number;
                    position?: AwcToastPosition;
                    textSanitize?: AwcToastSanitizeLevel;
                    contentSanitize?: AwcToastSanitizeLevel;
                }
            ) => AwcToast;
            clear: () => void;
            remove: (toast: AwcToast) => void;
            getContainer: (position?: string) => HTMLElement;
            options: { positionClass: string };
        };
    }
}
