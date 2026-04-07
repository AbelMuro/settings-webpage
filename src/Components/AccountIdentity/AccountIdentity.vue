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
            <Switch label="Enable Username Changes" setting="UsernameChanges"/>
            <Switch label="Enable Private Profile" setting="PrivateProfile"/>
            <Switch label="Enable Email Notifications" setting="EmailNotifications"/>
            <Switch label="Enable SMS Notifications" setting="SMSNotifications"/>
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
</style>