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
            <Switch label="Enable Push Notifications" setting="PushNotifications"/>
            <Switch label="Enable Email Summary" setting="EmailSummary"/>
            <Switch label="Enable In App Alerts" setting="InAppAlerts"/>
            <Switch label="Enable Sound Vibration" setting="SoundVibration"/>   
            <Switch label="Enable Marketing Emails" setting="MarketingEmails"/>
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
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
</style>