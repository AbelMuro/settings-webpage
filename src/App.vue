<script setup lang="ts">
    import { RouterView } from 'vue-router';

    /* 
        this is where i left off, i am working on the responsiveness of the app.

        i am currently in the navigation bar component
    */

</script>

<template>
    <RouterView/>
</template>

<style>
    body{
        padding: 0px;
        margin: 0px;
        background-color: white;
    }

    *{
        box-sizing: border-box;
        transition: all 0.2s linear, opacity 0s, transform 0s;
    }

    @font-face {
        font-family: 'outfit';
        src: url('./assets/Fonts/outfit.ttf') format('truetype');
    }

    :root{
        --preset-text-color: #d7d7d7;
        --preset-text-color-hover: rgb(120, 131, 255);
        --preset-text-color-active: rgb(76, 91, 255);
        --preset-background-color-1: #00005a;
        --preset-background-color-2: #00008f;

        --preset-text-1-font-family: 'outfit';
        --preset-text-1-font-size: 3rem;
        --preset-text-1-font-weight: 700;
        --preset-text-1-line-height: 3.5rem;
        --preset-text-1-letter-spacing: 0px;

        --preset-text-2-font-family: 'outfit';
        --preset-text-2-font-size: 2rem;
        --preset-text-2-font-weight: 400;
        --preset-text-2-line-height: 2.5rem;
        --preset-text-2-letter-spacing: 0px;

        --preset-text-3-font-family: 'outfit';
        --preset-text-3-font-size: 1.5rem;
        --preset-text-3-font-weight: 300;
        --preset-text-3-line-height: 2rem;
        --preset-text-3-letter-spacing: 0px;

        --preset-text-4-font-family: 'outfit';
        --preset-text-4-font-size: 1rem;
        --preset-text-4-font-weight: 300;
        --preset-text-4-line-height: 1.75rem;
        --preset-text-4-letter-spacing: 0px;
    }
</style>