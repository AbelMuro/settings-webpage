<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import NavigationBar from '../../Components/NavigationBar';
    import Search from '../../Components/Search';
    import BackButton from '../../Components/BackButton';

</script>

<template>
    <section 
        class="container">
            <NavigationBar/>
            <BackButton/>
            <Search/>
            <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        width: 700px;
        height: fit-content;
        border-radius: 15px;
        padding: 20px;
        position: absolute;
        inset: 0;
        margin: auto;
        background-color: var(--preset-background-color-2);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 40px auto;
        column-gap: 25px;
        row-gap: 20px;
        transition: none;
    }
</style>