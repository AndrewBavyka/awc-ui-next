<script lang="ts" setup>
import Sidebar from '../components/ui/navigation/sidebar/Sidebar.vue';
import Header from '../components/ui/navigation/header/Header.vue';

</script>


<template>
    <div class="awc-book">
        <Header />
        <div class="awc-book__wrapper">
            <Sidebar />
            <section class="awc-book__content">
                <router-view />
            </section>
        </div>
    </div>
</template>


<style scoped>
.awc-book {
    position: relative;
    display: flex;
}

.awc-book__wrapper {
    padding-top: 3.5rem;
}

.awc-book__content {
    margin-left: 16.25rem;
}
</style>