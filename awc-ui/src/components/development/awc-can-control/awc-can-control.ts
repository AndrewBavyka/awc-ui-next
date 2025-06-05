import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('awc-can-control')
export default class AwcCanControl extends LitElement {
    @property({ type: String, reflect: true }) name: string = '';
    @property({ type: Object }) options: Record<string, unknown> = {};

    @state() private _canInstance: any | null = null;

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', this._setupCanControl.bind(this));
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this._automaticallyDestroyComponent();
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        if (_changedProperties.has('name')) {
            this._setupCanControl();
        }
    }

    private _setupCanControl(): void {
        if (!this.name) return;

        const can = window.can;
        if (!can) {
            console.error('can is not available. Please ensure it is loaded via CDN.');
            return;
        }

        const ClassRef = can.Control.extend({}, {});
        if (ClassRef) {
            this._canInstance = new ClassRef(this, this.options);
        }
    }

    private _automaticallyDestroyComponent(): void {
        if (this._canInstance && typeof this._canInstance.destroy === 'function') {
            this._canInstance.destroy();
        }
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    protected render(): TemplateResult {
        return html`<slot></slot>`;
    }
}
declare global {
    interface Window {
        can: typeof import('can');
    }
}
