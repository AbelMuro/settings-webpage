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
        <Switch label="Enable Two-Factor Authentication" setting="TwoFactorAuth"/>
        <Switch label="Allow login from new devices" setting="LoginFromNewDevices"/>
        <Switch label="Enable Auto Logout" setting="AutoLogout"/>
        <Switch label="Show/hide email from public profile" setting="EmailFromPublicProfile"/>
        <Switch label="Allow data collection for analytics" setting="DataCollectionForAnalytics"/>
    </motion.div>
</template>

<style scoped>
    .switches{
        width: 323px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media(max-width: 750px){
        .switches{
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
</style>