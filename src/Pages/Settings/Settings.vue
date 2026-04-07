<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import NavigationBar from '../../Components/NavigationBar';

</script>

<template>
    <section 
        class="container">
            <NavigationBar/>
            <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        width: 700px;
        height: 500px;
        border-radius: 15px;
        padding: 20px;
        position: absolute;
        inset: 0;
        margin: auto;
        background-color: var(--preset-background-color-2);
        display: flex;
        justify-content: space-between;
        align-items: start;
        transition: none;
    }
</style>