import {defineStore} from 'pinia';

const useSettingsStore = defineStore('settings', {
    state: () => ({
        twoFactorAuth: false,
        loginFromNewDevices: false,
        autoLogout: false,
        showEmailFromPublicProfile: false,
        allowDataCollectionForAnalytics: false,
    }),
    actions: {
        toggleTwoFactorAuth(checked) {
            this.twoFactorAuth = checked;
        },
        toggleLoginFromNewDevices(checked) {
            this.loginFromNewDevices = checked;
        },
        toggleAutoLogout(checked) {
            this.autoLogout = checked;
        },
        toggleEmailFromPublicProfile(checked) {
            this.showEmailFromPublicProfile = checked;
        },
        toggleDataCollectionForAnalytics(checked) {
            this.allowDataCollectionForAnalytics = checked;
        }
    }
});

export default useSettingsStore;