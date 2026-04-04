import {defineStore} from 'pinia';

const useSettingsStore = defineStore('settings', {
    state: () => ({
        twoFactorAuth: false,
        emailNotifications: false,
        darkMode: false,
    }),
    actions: {
        toggleTwoFactorAuth(checked) {
            this.twoFactorAuth = checked;
        },
        toggleEmailNotifications(checked) {
            this.emailNotifications = checked;
        },
        toggleDarkMode(checked) {
            this.darkMode = checked;
        },
    }
});

export default useSettingsStore;