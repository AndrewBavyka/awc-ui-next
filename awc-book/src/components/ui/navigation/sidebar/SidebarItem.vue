<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{ to: string }>();
</script>

<template>
    <li class="awc-book-sidebar-list__item">
        <RouterLink class="awc-book-sidebar-list__link" :to="to" active-class="awc-book-sidebar-list__link--active">
            <slot></slot>
        </RouterLink>
    </li>
</template>

<style scoped>

.awc-book-sidebar-list__item {
    display: flex;
    align-items: center;
    text-align: start;
}

.awc-book-sidebar-list__link {
    text-decoration: none;
    width: 100%;
    font: var(--awc-book-sidebar-font-link);
    color: var(--awc-book-sidebar-link-color);
    position: relative;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    min-height: 32px;
}

.awc-book-sidebar-list__link:hover {
    color: var(--awc-book-sidebar-link-color-hover);
}

.awc-book-sidebar-list__link--active {
    color: var(--awc-book-sidebar-link-color-active);
}

.awc-book-sidebar-list__link::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: var(--awc-book-sidebar-link-color-active);
    border-radius: 2px;

    transform: scaleY(0);
    transform-origin: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    will-change: transform, opacity;
}

.awc-book-sidebar-list__link--active::before {
    transform: scaleY(1);
}

.awc-book-sidebar-list__link:not(.awc-book-sidebar-list__link--active)::before {
    transition-delay: 0.05s;
    transform: scaleY(0);
}
</style>
