<script setup lang="ts">
    import {watch, ref} from 'vue';
    import {storeToRefs} from 'pinia';
    import useSettingsStore from '../../Store';
    import Switch from '../../Common/Components/Switch'

    type SwitchArray = Array<{label : string, setting: string}>;
    const store = useSettingsStore();
    const {searchQuery} = storeToRefs(store);
    const switches = ref<SwitchArray>([]);

    const settings = [{
            'Two Factor Authentication' : 'TwoFactorAuth'
        }, 
        {
            'Login From New Devices' : 'LoginFromNewDevices'
        },
        {
            'Auto Logout': 'AutoLogout'
        },
        {
            'Email From Public Profile' : 'EmailFromPublicProfile'
        },
        {
            'Data Collection For Analytics' : 'DataCollectionForAnalytics'
        }, 
        {
            'Username Changes' : 'UsernameChanges'
        },
        {
            'Private Profile' : 'PrivateProfile'
        },
        {
            'Email Notifications' : 'EmailNotifications'
        }, 
        {
            'SMS Notifications' : 'SMSNotifications'
        },
        {
            'Push Notifications' : 'PushNotification'
        },
        {
            'Email Summary' : 'EmailSummary'
        },
        {
            'In App Alerts' : 'InAppAlerts'
        },
        {
            'Sound Vibration' : 'SoundVibration'
        },
        {
            'Marketing Emails' : 'MarketingEmails'
        },
        {
            'Read Receipts' : 'ReadReceipts'
        },
        {
            'Typing Indicators' : 'TypingIndicators'
        },
        {
            'Message Reactions' : 'MessageReactions'
        },
        {
            'Message Editing' : 'MessageEditing'
        },
        {
            'Message Deletion' : 'MessageDeletion'
        },
        {
            'Dark Mode' : 'DarkMode'
        },
        {
            'Compact Mode': 'CompactMode'
        },
        {
            'Custom Themes': 'CustomThemes'
        },
        {
            'Font Size Adjustment' : 'FontSizeAdjustment'
        },
        {
            'High Contract Mode' : 'HighContrastMode'
    }]

    watch(searchQuery, (newSearch) => {
        const currentSettings : SwitchArray = [];
        if(!newSearch) {
            switches.value = [];
            return;
        }

        settings.forEach((setting) => {
            const label = Object.keys(setting)[0];
            const value = Object.values(setting)[0];
            if(label.toLowerCase().startsWith(newSearch.toLowerCase()))
                currentSettings.push({label, setting: value})
        });
        switches.value = currentSettings;
    }, {immediate: true})

</script>

<template>
    <section class="search_results">
        <Switch v-for="(currentSwitch) in switches" :label="currentSwitch.label" :setting="currentSwitch.setting"/>
    </section>
</template>

<style scoped>
    .search_results{
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