<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import SidebarList from './SidebarList.vue';

const router = useRouter();

const categoryMap: Record<string, string> = {
    docs: 'Документация',
    styles: 'Стили',
    components: 'Компоненты'
};

const categorizedLinks = computed(() => {
    const categoryLinks: Record<string, { name: string; path: string }[]> = {};

    router.getRoutes().forEach(({ path, name, meta }) => {
        if (!name || !meta || meta.showInSidebar === false) return;

        const firstSegment = path.split('/')[1];
        const category = categoryMap[firstSegment] || 'Прочее';

        if (!categoryLinks[category]) {
            categoryLinks[category] = [];
        }

        categoryLinks[category].push({ name: name.toString(), path });
    });

    return categoryLinks;
});
</script>

<template>
    <nav class="awc-book-navigation">
        <awc-accordion>
            <awc-accordion-item v-for="(links, category) in categorizedLinks" :key="category" :title="category">
                <SidebarList>
                    <SidebarItem v-for="link in links" :key="link.path" :to="link.path" :title="link.name">
                        {{ link.name }}
                    </SidebarItem>
                </SidebarList>
            </awc-accordion-item>
        </awc-accordion>
    </nav>
</template>

<style scoped>
    .awc-book-navigation {
        position: fixed;
        top: 3.5rem;
        bottom: 0;
        z-index: 99;
        border-right: 1px solid var(--awc-book-border-color);
        inline-size: 16.25rem;
    }

    awc-accordion-item {
        --awc-accordion-item-padding-title: 0 16px;
    }
   
</style>
