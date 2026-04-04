<script setup lang="ts">
    import Switch from './Common/Components/Switch';

    const x : number = 1;

    /* 
        this is where i left off, i need to create css variables for all the font styles that i will use for this app
    */

</script>

<template>
    <section class="container">
        <Switch label="Enable Two-Factor Authentication" setting="TwoFactorAuth"/>
    </section>
</template>

<style>
    .container{
        width: 500px;
        height: 500px;
        border-radius: 15px;
        padding: 20px;
        position: absolute;
        inset: 0;
        margin: auto;
        background-color: grey;
        display: flex;
        justify-content: start;
        align-items: start;
    }

    body{
        padding: 0px;
        margin: 0px;
    }

    *{
        box-sizing: border-box;
        transition: all 0.2s linear;
    }
</style>