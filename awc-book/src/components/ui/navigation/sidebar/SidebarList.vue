<template>
    <ul class="sidebar-list">
        <slot></slot>
    </ul>
</template>

<style scoped>
.sidebar-list {
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-m);
}
</style>