
    import type { RouteRecordRaw } from 'vue-router';
    
    const routes: RouteRecordRaw[] = [
      {
  "path": "/components/awc-accordion",
  "name": "AwcAccordion",
  "component": () => import('../pages/components/awc-accordion/AwcAccordion.vue'),
  "meta": {
    "tagName": "awc-accordion",
    "description": "",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-accordion/docs",
  "name": "AwcAccordionDocs",
  "component": () => import('../pages/components/awc-accordion/AwcAccordionDocs.vue'),
  "meta": {
    "tagName": "awc-accordion",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-accordion/examples",
  "name": "AwcAccordionExample",
  "component": () => import('../pages/components/awc-accordion/AwcAccordionExample.vue'),
  "meta": {
    "tagName": "awc-accordion",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-alert",
  "name": "AwcAlert",
  "component": () => import('../pages/components/awc-alert/AwcAlert.vue'),
  "meta": {
    "tagName": "awc-alert",
    "description": "",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-alert/docs",
  "name": "AwcAlertDocs",
  "component": () => import('../pages/components/awc-alert/AwcAlertDocs.vue'),
  "meta": {
    "tagName": "awc-alert",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-alert/examples",
  "name": "AwcAlertExample",
  "component": () => import('../pages/components/awc-alert/AwcAlertExample.vue'),
  "meta": {
    "tagName": "awc-alert",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-button",
  "name": "AwcButton",
  "component": () => import('../pages/components/awc-button/AwcButton.vue'),
  "meta": {
    "tagName": "awc-button",
    "description": "Кнопка (`awc-button`).\nИспользуется для выполнения действий пользователя при взаимодействии с элементом интерфейса.\nЭтот компонент поддерживает кастомные стили, различные состояния и варианты отображения.",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-button/docs",
  "name": "AwcButtonDocs",
  "component": () => import('../pages/components/awc-button/AwcButtonDocs.vue'),
  "meta": {
    "tagName": "awc-button",
    "description": "Кнопка (`awc-button`).\nИспользуется для выполнения действий пользователя при взаимодействии с элементом интерфейса.\nЭтот компонент поддерживает кастомные стили, различные состояния и варианты отображения.",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-button/examples",
  "name": "AwcButtonExample",
  "component": () => import('../pages/components/awc-button/AwcButtonExample.vue'),
  "meta": {
    "tagName": "awc-button",
    "description": "Кнопка (`awc-button`).\nИспользуется для выполнения действий пользователя при взаимодействии с элементом интерфейса.\nЭтот компонент поддерживает кастомные стили, различные состояния и варианты отображения.",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-icon",
  "name": "AwcIcon",
  "component": () => import('../pages/components/awc-icon/AwcIcon.vue'),
  "meta": {
    "tagName": "awc-icon",
    "description": "Элемент для отображения иконок.",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-icon/docs",
  "name": "AwcIconDocs",
  "component": () => import('../pages/components/awc-icon/AwcIconDocs.vue'),
  "meta": {
    "tagName": "awc-icon",
    "description": "Элемент для отображения иконок.",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-icon/examples",
  "name": "AwcIconExample",
  "component": () => import('../pages/components/awc-icon/AwcIconExample.vue'),
  "meta": {
    "tagName": "awc-icon",
    "description": "Элемент для отображения иконок.",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-spinner",
  "name": "AwcSpinner",
  "component": () => import('../pages/components/awc-spinner/AwcSpinner.vue'),
  "meta": {
    "tagName": "awc-spinner",
    "description": "",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-spinner/docs",
  "name": "AwcSpinnerDocs",
  "component": () => import('../pages/components/awc-spinner/AwcSpinnerDocs.vue'),
  "meta": {
    "tagName": "awc-spinner",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-spinner/examples",
  "name": "AwcSpinnerExample",
  "component": () => import('../pages/components/awc-spinner/AwcSpinnerExample.vue'),
  "meta": {
    "tagName": "awc-spinner",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-tooltip",
  "name": "AwcTooltip",
  "component": () => import('../pages/components/awc-tooltip/AwcTooltip.vue'),
  "meta": {
    "tagName": "awc-tooltip",
    "description": "",
    "showInSidebar": true
  }
},
{
  "path": "/components/awc-tooltip/docs",
  "name": "AwcTooltipDocs",
  "component": () => import('../pages/components/awc-tooltip/AwcTooltipDocs.vue'),
  "meta": {
    "tagName": "awc-tooltip",
    "description": "",
    "showInSidebar": false
  }
},
{
  "path": "/components/awc-tooltip/examples",
  "name": "AwcTooltipExample",
  "component": () => import('../pages/components/awc-tooltip/AwcTooltipExample.vue'),
  "meta": {
    "tagName": "awc-tooltip",
    "description": "",
    "showInSidebar": false
  }
}
    ];
    
    export default routes;
    