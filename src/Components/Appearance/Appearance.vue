<script setup lang="ts">
    import {motion} from 'motion-v';
    import Switch from '../../Common/Components/Switch';

    const variants = {
        hidden: {},
        visible: {}
    }
</script>

<template>
    <motion.div 
        initial="hidden"
        animate="visible"
        :variants="variants"
        :transition="{staggerChildren: 0.06}"
        class="switches">
        <Switch label="Enable Dark Mode" setting="DarkMode"/>
        <Switch label="Enable Compact Mode" setting="CompactMode"/>
        <Switch label="Enable Custom Themes" setting="CustomThemes"/>
        <Switch label="Enable Font Size Adjustment" setting="FontSizeAdjustment"/>
        <Switch label="Enable High Contrast Mode" setting="HighContrastMode"/>
    </motion.div>
</template>

<style scoped>
    .switches{
        width: 323px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        grid-column: 2/3;
        grid-row: 2/3;
    }

    @media(max-width: 750px){
        .switches{
            width: 100%;
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
</style>