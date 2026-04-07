<script setup lang="ts">
    import {watch} from 'vue';
    import {storeToRefs} from 'pinia';
    import useSettingsStore from '../../Store';

    const store = useSettingsStore();
    const {searchQuery} = storeToRefs(store);

    watch(searchQuery, (newSearch) => {
        console.log(newSearch);
    })

</script>

<template>
    <section class="search_results">

    </section>
</template>

<style scoped>
    .search_results{
        grid-column: 2/3;
        grid-row: 2/3;
    }
</style>