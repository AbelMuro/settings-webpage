<script setup lang="ts">
    import Switch from '../../Common/Components/Switch';
</script>

<template>
    <div class="switches">
        <Switch label="Enable Two-Factor Authentication" setting="TwoFactorAuth"/>
        <Switch label="Enable Email Notifications" setting="EmailNotifications"/>
        <Switch label="Enable Dark Mode" setting="DarkMode"/>
    </div>
</template>

<style scoped>
    .switches{
        width: 323px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>