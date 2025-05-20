<template>
    <div class="awc-book-burger">
        <span class="awc-book-burger-item"></span>
        <span class="awc-book-burger-item"></span>
        <span class="awc-book-burger-item"></span>
    </div>
</template>

<style scoped>
.awc-book-burger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-right: 18px;
    cursor: pointer;
}

.awc-book-burger:hover .awc-book-burger-item {
    opacity: 0.8;
}

.awc-book-burger-item {
    width: 24px;
    height: 2px;
    border-radius: 8px;
    background-color: var(--awc-book-burger);
    transition: opacity .3s ease;
    opacity: 1;
}
</style>
