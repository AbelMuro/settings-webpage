<script setup lang="ts">
    import {useRoute} from 'vue-router';

    const route = useRoute();
    const pathname = route.path;
</script>

<template>
    <button class="back_button"> 

    </button>
</template>

<style scoped>
    .back_button{
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: start;
        background-color: transparent;
        color: white;
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>