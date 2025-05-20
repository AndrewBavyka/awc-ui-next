import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from '../generated/routes';
import customRoutes from '../generated/customRoutes';

const routes: RouteRecordRaw[] = [
    ...generatedRoutes,
    ...customRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;