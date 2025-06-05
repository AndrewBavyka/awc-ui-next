import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type VueControlType = 'construct' | 'closure' | 'component';

/**
 *
 * Этот компонент позволяет динамически монтировать компоненты Vue, используя либо прямой конструктор (construct)
 * или метод замыкания (closure) для инициализации экземпляра Vue.
 *
 * @element awc-vue-mounter
 */
@customElement('awc-vue-mounter')
export default class AwcVueMounter extends LitElement {
    /**
     * Имя конструктора компонента Vue. Это может быть простая строка или путь к вложенному объекту.
     *
     * @type {string}
     */
    @property({ type: String, reflect: true }) name: string = '';

    /**
     * Параметры для передачи в качестве данных экземпляру Vue.
     *
     * @type {object}
     */
    @property({ type: Object }) options: object = {};

    /**
     * Тип используемой инициализации: construct или closure.
     *
     * @type {VueControlType}
     */
    @property({ type: String, reflect: true }) type: VueControlType = 'construct';

    /**
     * Содержит экземпляр Vue после его создания.
     *
     * @type {any}
     * @private
     */
    private vueInstance: any;

    /**
     * Создает экземпляр Vue на основе предоставленных свойств name и type.
     *
     * @private
     */
    private createVueInstance(): void {
        const vueConstructor = this.getVueConstructor(this.name);
        const vueConstructorGlobal = Vue.component(this.name);

        if (!vueConstructor && this.type !== 'component') {
            throw new Error(`Vue constructor "${this.name}" not found on window object.`);
        }

        switch (this.type) {
            case 'closure':
                if (!vueConstructor) throw new Error(`Cannot create Vue instance via closure: constructor "${this.name}" is not found.`);
                this.vueInstance = this.createViaClosure(vueConstructor);
                break;
            case 'construct':
                if (!vueConstructor) throw new Error(`Cannot create Vue instance via construct: constructor "${this.name}" is not found.`);
                this.vueInstance = this.createViaConstruct(vueConstructor);
                break;
            case 'component':
                if (!vueConstructorGlobal) throw new Error(`Vue component "${this.name}" not found globally.`);
                this.vueInstance = this.createViaComponent(vueConstructorGlobal);
                break;
            default:
                throw new Error(`Invalid type "${this.type}". Expected "construct", "closure", or "component".`);
        }

        if (!this.vueInstance) {
            throw new Error('Vue instance could not be created.');
        }

        this.vueInstance.$mount(this.renderRoot.querySelector('#vue-root'));
    }

    /**
     * Извлекает функцию конструктора Vue из объекта окна на основе предоставленного пути.
     *
     * @param {string} path - Путь к конструктору Vue объекта окна.
     * @returns {any} - Функция конструктора Vue.
     * @private
     */
    private getVueConstructor(path: string): any {
        return path.split('.').reduce((prev, curr) => {
            return prev ? (prev as { [key: string]: any })[curr] : undefined;
        }, window);
    }

    /**
     * Создает экземпляр Vue, используя метод construct, напрямую передавая параметры в качестве данных.
     *
     * @param {any} vueConstructor - Функция конструктора Vue.
     * @returns {any} - Экземпляр Vue.
     * @private
     */
    private createViaConstruct(vueConstructor: any) {
        return new vueConstructor({
            data: this.options,
        });
    }

    /**
     * Создает экземпляр Vue, используя метод замыкания, обрабатывая параметры перед передачей их как данных.
     *
     * @param {any} vueConstructor -  Функция конструктора Vue.
     * @returns {any} - Экземпляр Vue.
     * @private
     */
    private createViaClosure(vueConstructor: any) {
        const closureParams = this.closure(this.options);

        return new vueConstructor({
            data: closureParams,
        });
    }

    /**
     * Создает экземпляр Vue, используя предоставленный компонент Vue.
     * Этот метод принимает конструктор компонента и передает параметры через `propsData`,
     * что позволяет корректно инициализировать Vue-компоненты с входными параметрами (props).
     *
     * @param {any} vueConstructor - Конструктор Vue-компонента, который будет создан.
     * @returns {any} - Экземпляр Vue, который создается на основе переданного конструктора и параметров.
     * Этот экземпляр затем может быть примонтирован в DOM для отображения компонента.
     * @private
     */
    private createViaComponent(vueConstructor: any) {
        return new vueConstructor({
            propsData: this.options,
        });
    }

    /**
     * Обрабатывает `options` и возвращает измененные данные для использования с методом `closure`.
     *
     * @param {any} params - Начальные параметры передаются компоненту.
     * @returns {any} - Модифицированные опции.
     * @private
     */
    private closure(params: any) {
        return { ...params };
    }

    /**
     * Хук жизненного цикла: вызывается, когда компонент добавляется в DOM.
     * Он настраивает создание экземпляра Vue после загрузки содержимого DOM.
     */
    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', () => this.createVueInstance());
    }

    /**
     * Хук жизненного цикла: вызывается, когда компонент удаляется из DOM.
     * Уничтожает экземпляр Vue.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.vueInstance) {
            this.vueInstance.$destroy();
        }
    }

    /**
     * Хук жизненного цикла: вызывается при обновлении компонента.
     * Воссоздает экземпляр Vue, чтобы отразить любые изменения в свойствах.
     *
     * @param {PropertyValues} _changedProperties - Измененные свойства.
     */
    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        this.createVueInstance();
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    protected render(): TemplateResult {
        return html`<div id="vue-root"></div>`;
    }
}

/*

Для теста:

<awc-vue-mounter name="vueComponents.MyVueComponent" type="construct"></awc-vue-mounter>
<awc-vue-mounter name="vueComponents.MyVueComponent" type="closure"></awc-vue-mounter>

window.vueComponents = {
    MyVueComponent: Vue.extend({
        template: `<div>{{ message }}</div>`,
        data() {
            return { message: "Hello from Vue!" };
        }
    })
};

<awc-vue-mounter type="component" name="my-h1" options='{"message": "Привет, мир!"}'></awc-vue-mounter>

Vue.component('my-h1', {
  template: '<h1>{{ message }}</h1>',
  props: ['message']
});

*/
