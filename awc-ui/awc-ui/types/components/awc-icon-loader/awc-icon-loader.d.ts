import { LitElement } from 'lit';
export declare const awcIconLoaderTag = "awc-icon-loader";
export default class AwcIconLoader extends LitElement {
    type: string;
    size: string;
    src: string;
    private _setGlobalIcons;
    protected firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcIconLoaderTag]: AwcIconLoader;
    }
}
