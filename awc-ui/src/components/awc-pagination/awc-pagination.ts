import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { paginationStyle } from './awc-pagination.style';

export const awcPaginationTag = 'awc-pagination';

@customElement(awcPaginationTag)
export default class AwcPagination extends LitElement {
    private _activePage: number = 1;
    private _itemsPerPage: number = 1;
    private _totalItemsCount: number = 1;

    /**
     * Индекс активной в данный момент страницы.
     * @property {Number}
     * @default 1
     */
    @property({ type: Number, reflect: true, attribute: 'active-page' })
    get activePage(): number {
        return this._activePage;
    }
    set activePage(value: number) {
        const totalPages = Math.ceil(this._totalItemsCount / this._itemsPerPage);
        const newValue = Math.min(Math.max(1, value || 1), totalPages);
        const oldValue = this._activePage;
        if (newValue !== oldValue) {
            this._activePage = newValue;
            this.requestUpdate('activePage', oldValue);
        }
    }
    /**
     * Общее количество элементов, которые должны отображаться на странице.
     * @property {Number}
     * @default 1
     */
    @property({ type: Number, reflect: true, attribute: 'items-per-page' })
    get itemsPerPage(): number {
        return this._itemsPerPage;
    }
    set itemsPerPage(value: number) {
        const newValue = Math.max(1, value || 1);
        const oldValue = this._itemsPerPage;
        if (newValue !== oldValue) {
            this._itemsPerPage = newValue;
            this.requestUpdate('itemsPerPage', oldValue);
        }
    }
    /**
     * Общее количество элементов.
     * @property {Number}
     * @default 1
     */
    @property({ type: Number, reflect: true, attribute: 'total-items-count' })
    get totalItemsCount(): number {
        return this._totalItemsCount;
    }
    set totalItemsCount(value: number) {
        const newValue = Math.max(1, value || 1);
        const oldValue = this._totalItemsCount;
        if (newValue !== oldValue) {
            this._totalItemsCount = newValue;
            this.requestUpdate('totalItemsCount', oldValue);
        }
    }
    /**
     * Кнопка первой страницы.
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) first = false;
    /**
     * Кнопка последней страницы.
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) last = false;

    private _maxVisibleItems = 5;
    private _ellipsisVisible = false;

    private _generatePages(totalPages: number): (number | string)[] {
        const pages: (number | string)[] = [];
        const halfVisible = Math.floor(this._maxVisibleItems / 2);

        let start = Math.max(1, this.activePage - halfVisible);
        let end = Math.min(totalPages, this.activePage + halfVisible);

        if (this.activePage <= halfVisible) {
            end = Math.min(totalPages, this._maxVisibleItems);
        } else if (this.activePage > totalPages - halfVisible) {
            start = Math.max(1, totalPages - this._maxVisibleItems + 1);
        }

        if (totalPages === end && this._maxVisibleItems !== totalPages && (totalPages && end && start) !== 1) {
            pages.push(1);
            pages.push('...');
            this._ellipsisVisible = true;
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (this._maxVisibleItems === end && this._maxVisibleItems !== totalPages) {
            this._ellipsisVisible = true;
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    }

    private _nextPage(): void {
        const totalPages = Math.ceil(this.totalItemsCount / this.itemsPerPage);

        if (this.activePage < totalPages) {
            this.activePage++;
        }

        this._onChange();
    }

    private _previousPage(): void {
        if (this.activePage > 1) {
            this.activePage--;
        }

        this._onChange();
    }

    private _onPageClick(page: number | string): void {
        if (typeof page === 'number' && page === this.activePage) return;

        if (typeof page === 'number') {
            this.activePage = page;
            this._onChange();
        }
    }

    private _handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            const activeElement = this.shadowRoot?.activeElement as HTMLElement;

            if (activeElement?.classList.contains('awc-pagination__button--prev')) {
                this._previousPage();
            } else if (activeElement?.classList.contains('awc-pagination__button--next')) {
                this._nextPage();
            } else if (activeElement?.classList.contains('awc-pagination__button--first')) {
                this._firstPage();
            } else if (activeElement?.classList.contains('awc-pagination__button--last')) {
                this._lastPage();
            } else {
                const page = parseInt(activeElement.textContent as string, 10);
                this._onPageClick(page);
            }

            this._onChange();
        }
    }

    private _firstPage(): void {
        this.activePage = 1;
        this._onChange();
    }

    private _lastPage(): void {
        const totalPages = Math.ceil(this.totalItemsCount / this.itemsPerPage);
        this.activePage = totalPages;
        this._onChange();
    }

    private _onChange(): void {
        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this._handleKeydown);
    }

    disconnectedCallback() {
        this.removeEventListener('keydown', this._handleKeydown);
        super.disconnectedCallback();
    }

    protected render(): TemplateResult {
        const totalPages = Math.ceil(this.totalItemsCount / this.itemsPerPage);
        const pages = this._generatePages(totalPages);

        const prevButton = html`
            <span
                role="button"
                @keydown=${this._handleKeydown}
                @click=${this._previousPage}
                tabIndex="0"
                class="awc-pagination__button awc-pagination__button--prev"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
                        fill="#919BB6"
                    />
                </svg>
            </span>
        `;

        const nextButton = html`
            <span
                role="button"
                @keydown=${this._handleKeydown}
                @click=${this._nextPage}
                tabIndex="0"
                class="awc-pagination__button awc-pagination__button--next"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z"
                        fill="#919BB6"
                    />
                </svg>
            </span>
        `;

        const firstPageButton = html`
            <span
                role="button"
                @click=${this._firstPage}
                @keydown=${this._handleKeydown}
                tabIndex="0"
                class="awc-pagination__button awc-pagination__button--first"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L12.4142 12L16.7071 16.2929ZM8.00004 17C8.00004 17.5523 7.55232 18 7.00004 18C6.44775 18 6.00004 17.5523 6.00004 17V7C6.00004 6.44772 6.44775 6 7.00004 6C7.55232 6 8.00004 6.44772 8.00004 7V17Z"
                        fill="#919BB6"
                    />
                </svg>
            </span>
        `;

        const lastPageButton = html`
            <span role="button" @click=${this._lastPage} tabIndex="0" class="awc-pagination__button awc-pagination__button--last">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.29293 16.2929C6.90241 16.6834 6.90241 17.3166 7.29293 17.7071C7.68345 18.0976 8.31662 18.0976 8.70714 17.7071L13.7071 12.7071C13.8947 12.5196 14 12.2652 14 12C14 11.7348 13.8947 11.4804 13.7071 11.2929L8.70714 6.29289C8.31662 5.90237 7.68345 5.90237 7.29293 6.29289C6.90241 6.68342 6.90241 7.31658 7.29293 7.70711L11.5858 12L7.29293 16.2929ZM16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7C18 6.44771 17.5523 6 17 6C16.4477 6 16 6.44771 16 7V17Z"
                        fill="#919BB6"
                    />
                </svg>
            </span>
        `;

        return html`
            <nav class="awc-pagination" aria-label="Pagination">
                ${this.first ? firstPageButton : ''} ${this.activePage > 1 ? prevButton : ''}

                <ul class="awc-pagination__list">
                    ${pages.map(
                        (page) => html`
                            <li>
                                <span
                                    class="awc-pagination__item ${page === this.activePage ? 'active' : ''}"
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Page ${page}"
                                    @click=${() => this._onPageClick(page)}
                                    >${page}</span
                                >
                            </li>
                        `
                    )}
                </ul>

                ${this.activePage < totalPages ? nextButton : ''} ${this.last ? lastPageButton : ''}
            </nav>
        `;
    }

    /**
     * @ignore
     */

    static styles: CSSResultGroup = [paginationStyle];
}
