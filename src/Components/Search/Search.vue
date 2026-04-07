<script setup lang="ts">
    import {watch} from 'vue';
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import useSettingsStore from '../../Store';

    const router = useRouter();
    const store = useSettingsStore();
    const {searchQuery} = storeToRefs(store);
    const {updateSearchQuery} = store;

    watch(searchQuery, (newSearch) => {
        if(!newSearch) return;
        router.push('search-results')
    });

    watch(searchQuery, (newSearch) => {
        updateSearchQuery(newSearch);
    })


</script>

<template>
    <form class="search_container">
        <input 
            type="text" 
            placeholder="Search settings..." 
            class="search_input"
            v-model="searchQuery"
        />
    </form>
</template>

<style scoped>
    .search_container{
        width: 150px;
        height: 40px;
        justify-self: end;
    }
    .search_input{
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 15px;
        background-color: white;
        border: 4px solid transparent;
        background-clip: padding-box;
        color: var(--preset-text-color);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }

    .search_input:focus{
        outline: none;
        border: 4px solid var(--preset-background-color-1)
    }

</style>