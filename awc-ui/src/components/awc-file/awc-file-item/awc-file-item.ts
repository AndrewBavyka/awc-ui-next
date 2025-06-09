import { CSSResult, html, LitElement, TemplateResult, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { localized, msg } from '@lit/localize';
import { awcFileItemStyles } from './awc-file-item.style';
import { EventDispatcher, event } from '../../../utilities/event';
import { formatFileSize } from '../../../utilities/file-size-converter';
import { IAwcFileItemDetails, AwcFileItemType } from './awc-file-item.types';
import { AwcFileDisplayType } from '../awc-file.types';
import {
    AWC_FILE_ITEM_DOTS_ICON,
    AWC_FILE_ITEM_DOWNLOAD_ICON,
    AWC_FILE_ITEM_LOCK_ICON,
    AWC_FILE_ITEM_TRASH_ICON,
    AWC_FILE_ITEM_UNLOCK_ICON,
    fileTypeIcons,
    defaultFileIcon,
    providerIcons,
    folderIcons,
    defaultFolderIcon,
} from './awc-file-item.icons';
import { getLocale, setLocale } from '../../../generated/localization';
import { allLocales } from '../../../generated/locale-codes';

export const awcFileItemTag = 'awc-file-item';

type LocaleType = (typeof allLocales)[number];
@customElement(awcFileItemTag)
@localized()
export default class AwcFileItem extends LitElement {
    @property({ type: String, reflect: true }) view: AwcFileDisplayType = 'list_block';
    @property({ type: String, reflect: true }) provider: string;
    @property({ type: String }) id: string;
    @property({ type: String }) thumbnail: string;
    @property({ type: String }) name: string;
    @property({ type: String }) date: string;
    @property({ type: String }) format: string;
    @property({ type: String }) type: AwcFileItemType = 'file';
    @property({ type: String, attribute: 'local-file' }) localFile: string;
    @property({ type: String, attribute: 'external-file-link' }) externalFileLink: string;
    @property({ type: String }) locale: LocaleType = 'en';
    @property({ type: Number }) size?: number;
    @property({ type: Boolean, reflect: true }) private: boolean = false;
    @property({ type: Boolean, attribute: 'show-private' }) showPrivate: boolean = false;
    @property({ type: Boolean, attribute: 'show-download' }) showDownload: boolean = false;
    @property({ type: Boolean, attribute: 'show-delete' }) showDelete: boolean = false;
    @property({ type: Boolean, attribute: 'is-interactive' }) isInteractive: boolean = false;
    @property({ type: Boolean, attribute: 'hide-subinfo' }) hideSubinfo: boolean = false;

    @state() isHoveredButtons: boolean = false;
    @state() showHoverText: boolean = false;
    @state() showFallbackIcon: boolean = false;

    @event('awc-file-download') private _onDownloadEvent!: EventDispatcher<IAwcFileItemDetails>;
    @event('awc-file-private') private _onPrivateEvent!: EventDispatcher<IAwcFileItemDetails>;
    @event('awc-file-delete') private _onDeleteEvent!: EventDispatcher<IAwcFileItemDetails>;
    @event('awc-file-preview') private _onPreviewEvent!: EventDispatcher<HTMLElement>;

    private _getFileDetails(): IAwcFileItemDetails {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            format: this.format,
            thumbnail: this.thumbnail,
            localFile: this.localFile,
            externalFileLink: this.externalFileLink,
            size: this.size!,
            date: this.date,
            provider: this.provider,
            private: this.private,
        };
    }

    private _getIconByFormat(): TemplateResult | undefined {
        if (this.type === 'file') {
            return fileTypeIcons[this.format]! || defaultFileIcon!;
        }
    }

    private _getIconByFolder(): TemplateResult | undefined {
        if (this.type === 'folder' || this.type === 'systemFolder' || this.type === 'publicFolder') {
            return folderIcons[this.type] || defaultFolderIcon;
        }
        return undefined;
    }

    private _getPrivateModeIcon(): TemplateResult {
        return this.private ? AWC_FILE_ITEM_LOCK_ICON : AWC_FILE_ITEM_UNLOCK_ICON;
    }

    private _getPrivateModeText(): string {
        return this.private ? msg('Open access') : msg('Close access');
    }

    private _getPrivateModeTooltip(): string {
        return this.private ? msg('Share a file with an external user') : msg('Share a file only with internal users');
    }

    private _triggerDownload(e: Event): void {
        e.stopPropagation();

        if (this.localFile) {
            window.open(this.localFile, '_self', 'noopener,noreferrer');
            this._onDownloadEvent(this._getFileDetails());
        }
    }

    private _triggerDelete(e: Event): void {
        e.stopPropagation();

        this._onDeleteEvent(this._getFileDetails());
    }

    private _togglePrivateMode(e: Event): void {
        e.stopPropagation();

        this.private = !this.private;
        this._onPrivateEvent(this._getFileDetails());
    }

    private _openExternalLink(e: Event): void {
        const target = e.target as HTMLElement;

        if (target.closest('awc-popover') || target.closest('awc-icon-button')) {
            e.stopPropagation();
            return;
        }

        if (this.externalFileLink) {
            e.stopPropagation();
            window.open(this.externalFileLink, '_blank', 'noopener,noreferrer');
        }
    }

    private _handlePreview(e: Event): void {
        const target = e.target as HTMLElement;

        if (target.closest('awc-popover') || target.closest('awc-icon-button')) return;

        if (this.isInteractive && !this.externalFileLink) {
            this._onPreviewEvent(target);
        }
    }

    private _formatFileSize(): string {
        return formatFileSize(this.size!, true, getLocale());
    }

    private _renderDropdown(): TemplateResult | typeof nothing {
        if (this.querySelector('[slot="awc-file-item-dropdown-control"]')) {
            return html`
                <div class="awc-file-item-button">
                    <slot name="awc-file-item-dropdown-control"></slot>
                </div>
            `;
        }

        if (!this.showDownload && !this.showPrivate && !this.showDelete) {
            return nothing;
        }

        const needsDivider = this.showDelete && (this.showDownload || this.showPrivate) && !this.externalFileLink;

        return html`
            <awc-popover trigger-type="click" strategy="fixed" position="bottom" no-padding>
                <div class="awc-file-item-wrapper" slot="awc-popover-content">
                    <awc-dropdown-group ?divider=${needsDivider}>
                        ${this.showDownload && !this.externalFileLink
                            ? html` <awc-dropdown-item @click=${this._triggerDownload}> ${AWC_FILE_ITEM_DOWNLOAD_ICON} ${msg('Download')} </awc-dropdown-item> `
                            : nothing}
                        ${this.showPrivate
                            ? html`
                                  <awc-tooltip strategy="absolute" .message=${this._getPrivateModeTooltip()}>
                                      <awc-dropdown-item @click=${this._togglePrivateMode}>
                                          ${this._getPrivateModeIcon()} ${this._getPrivateModeText()}
                                      </awc-dropdown-item>
                                  </awc-tooltip>
                              `
                            : nothing}
                    </awc-dropdown-group>
                    ${this.showDelete
                        ? html` <awc-dropdown-item @click=${this._triggerDelete}> ${AWC_FILE_ITEM_TRASH_ICON} ${msg('Delete')} </awc-dropdown-item> `
                        : nothing}
                </div>
                <awc-icon-button class="awc-file-item-button">${AWC_FILE_ITEM_DOTS_ICON}</awc-icon-button>
            </awc-popover>
        `;
    }

    private _renderHoverButtons(): TemplateResult | typeof nothing {
        if (this.querySelector('[slot="awc-file-item-hover-control"]')) {
            return html`<slot name="awc-file-item-hover-control"></slot>`;
        }

        const hasActions = this.showPrivate || this.showDownload || this.showDelete;

        if (!hasActions) return nothing;

        return html`
            <div class="awc-file-item__buttons">
                ${this.showPrivate
                    ? html`
                          <awc-tooltip strategy="fixed" position="bottom" .message=${this._getPrivateModeTooltip()}>
                              <awc-icon-button @click=${this._togglePrivateMode}> ${this._getPrivateModeIcon()} </awc-icon-button>
                          </awc-tooltip>
                      `
                    : nothing}
                ${this.showDownload && !this.externalFileLink
                    ? html`
                          <awc-tooltip strategy="fixed" position="bottom" .message=${msg('Download')}>
                              <awc-icon-button @click=${this._triggerDownload}> ${AWC_FILE_ITEM_DOWNLOAD_ICON} </awc-icon-button>
                          </awc-tooltip>
                      `
                    : nothing}
                ${this.showDelete
                    ? html`
                          <awc-tooltip strategy="fixed" position="bottom" .message=${msg('Delete')}>
                              <awc-icon-button @click=${this._triggerDelete}> ${AWC_FILE_ITEM_TRASH_ICON} </awc-icon-button>
                          </awc-tooltip>
                      `
                    : nothing}
            </div>
        `;
    }

    private _isImageValid = false;

    private _renderPreview(): TemplateResult {
        return html`
            <div class="awc-file-item__preview" @click=${this._openExternalLink}>
                ${this._isImageValid
                    ? html` <img class="awc-file-item__image" src=${this.thumbnail} alt=${this.name} loading="lazy" /> `
                    : html` <span class="awc-file-item__icon"> ${this._getIconByFormat() || this._getIconByFolder()} </span> `}
                ${this.view === 'grid' ? this._renderDropdown() : nothing}
            </div>
        `;
    }

    private _imageValidationCache: Record<string, boolean> = {};

    private _isValidImageUrl(url: string): boolean {
        if (!url) return false;
        try {
            const parsedUrl = new URL(url, window.location.origin);
            return parsedUrl.protocol.startsWith('http') || parsedUrl.protocol.startsWith('https');
        } catch (e) {
            return false;
        }
    }

    private async _checkImageValidity(url: string): Promise<boolean> {
        if (this._imageValidationCache[url] !== undefined) {
            return this._imageValidationCache[url];
        }

        if (!this._isValidImageUrl(url)) {
            this._imageValidationCache[url] = false;
            return false;
        }

        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                this._imageValidationCache[url] = true;
                resolve(true);
            };
            img.onerror = () => {
                this._imageValidationCache[url] = false;
                resolve(false);
            };
        });
    }

    private async _updateImageState(): Promise<void> {
        if (!this.thumbnail || !this._isValidImageUrl(this.thumbnail)) {
            this._isImageValid = false;
        } else {
            this._isImageValid = await this._checkImageValidity(this.thumbnail);
        }

        this.requestUpdate();
    }

    private _decodeHTMLEntities(text: string): string {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        return doc.documentElement.textContent || '';
    }

    private _renderGridView(): TemplateResult {
        return html`
            ${this._renderPreview()}
            <div class="awc-file-item__info">
                <p class="awc-file-item__name" title=${this._decodeHTMLEntities(this.name)}>${this._decodeHTMLEntities(this.name)}</p>
                ${!this.hideSubinfo
                    ? html`
                          <div class="awc-file-item__subinfo">
                              <span class="awc-file-item__size">${this._formatFileSize()}</span>
                              <span class="awc-file-item__type">${this.format}</span>
                              <span class="awc-file-item__provider">${this.provider ? providerIcons[this.provider] : nothing}</span>
                          </div>
                      `
                    : nothing}
            </div>
        `;
    }

    private _renderListView(): TemplateResult {
        return html`
            ${this._renderPreview()}
            <div class="awc-file-item__info">
                <div class="awc-file-item__name" title=${this._decodeHTMLEntities(this.name)}>
                    <p class="awc-file-item__text">${this._decodeHTMLEntities(this.name)}</p>
                    <span class="awc-file-item__provider">${this.provider ? providerIcons[this.provider] : nothing}</span>
                </div>

                ${!this.hideSubinfo
                    ? html`
                          <div class="awc-file-item__subinfo">
                              ${this.size && !this.isHoveredButtons ? html`<span class="awc-file-item__size">${this._formatFileSize()}</span>` : nothing}
                              ${this.date && !this.isHoveredButtons ? html`<span class="awc-file-item__date">${this.date}</span>` : nothing}
                              ${this.isHoveredButtons ? this._renderHoverButtons() : nothing}
                          </div>
                      `
                    : nothing}
            </div>
        `;
    }

    private _renderListBlockView(): TemplateResult {
        return html`
            ${this._renderPreview()}
            <div class="awc-file-item__info">
                <p class="awc-file-item__name" title=${this._decodeHTMLEntities(this.name)}>${this._decodeHTMLEntities(this.name)}</p>
                ${!this.hideSubinfo
                    ? html`
                          <div class="awc-file-item__subinfo">
                              ${this.showHoverText && this.externalFileLink
                                  ? html` <span class="awc-file-item__subtext">${msg('Click to go')}</span> `
                                  : this.showHoverText && !this.externalFileLink
                                    ? html` <span class="awc-file-item__subtext">${msg('Click to preview')}</span> `
                                    : html`
                                          <span class="awc-file-item__size">${this._formatFileSize()}</span>
                                          <span class="awc-file-item__type">${this.format}</span>
                                          <span class="awc-file-item__provider">${this.provider ? providerIcons[this.provider] : nothing}</span>
                                      `}
                          </div>
                      `
                    : nothing}
            </div>
            ${this.isHoveredButtons ? this._renderHoverButtons() : nothing}
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        if (this.isInteractive || this.view === 'list' || this.view === 'list_block') {
            this.addEventListener('mouseenter', () => (this.isHoveredButtons = true));
            this.addEventListener('mouseleave', () => (this.isHoveredButtons = false));
        }

        if (this.isInteractive) {
            this.addEventListener('click', this._handlePreview);
            this.addEventListener('mouseenter', () => (this.showHoverText = true));
            this.addEventListener('mouseleave', () => (this.showHoverText = false));
        }

        if ((this.view === 'list' || this.view === 'list_block') && this.externalFileLink) {
            this.addEventListener('click', this._openExternalLink);
        }

        if (this.locale && allLocales.includes(this.locale)) {
            setLocale(this.locale);
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('click', this._handlePreview);
        this.removeEventListener('click', this._openExternalLink);
        this.removeEventListener('mouseenter', () => (this.isHoveredButtons = true));
        this.removeEventListener('mouseleave', () => (this.isHoveredButtons = false));
        this.removeEventListener('mouseenter', () => (this.showHoverText = true));
        this.removeEventListener('mouseleave', () => (this.showHoverText = false));
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('locale')) {
            if (this.locale && allLocales.includes(this.locale)) {
                setLocale(this.locale);
            }
        }

        if (_changedProperties.has('thumbnail')) {
            this._updateImageState();
        }
    }

    protected render(): TemplateResult {
        switch (this.view) {
            case 'grid':
                return this._renderGridView();
            case 'list':
                return this._renderListView();
            case 'list_block':
                return this._renderListBlockView();
            default:
                return this._renderListBlockView();
        }
    }

    static styles: CSSResult = awcFileItemStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcFileItemTag]: AwcFileItem;
    }
}
