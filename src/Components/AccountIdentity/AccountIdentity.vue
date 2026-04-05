<script setup lang="ts">
    import Switch from '../../Common/Components/Switch';
</script>

<template>
    <div class="switches">
        <Switch label="Enable Two-Factor Authentication" setting="TwoFactorAuth"/>
        <Switch label="Allow login from new devices" setting="LoginFromNewDevices"/>
        <Switch label="Enable Auto Logout" setting="AutoLogout"/>
        <Switch label="Show/hide email from public profile" setting="EmailFromPublicProfile"/>
        <Switch label="Allow data collection for analytics" setting="DataCollectionForAnalytics"/>
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