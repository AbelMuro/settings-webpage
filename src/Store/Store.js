import {defineStore} from 'pinia';

const useSettingsStore = defineStore('settings', {
    state: () => ({
        twoFactorAuth: false,
        loginFromNewDevices: false,
        autoLogout: false,
        showEmailFromPublicProfile: false,
        allowDataCollectionForAnalytics: false,

        /* 
            Account & Identity
        */
        enableUsernameChanges: false,
        enablePrivateProfile: false,
        enableEmailNotifications: false,
        enableSMSNotifications: false,

        /* 
            Notification Preferences
        */
        enablePushNotifications: false,
        enableEmailSummary: false,
        enableInAppAlerts: false,
        enableSoundVibration: false,
        enableMarketingEmails: false,

        /* 
            Messaging Features
        */
        allowReadReceipts: false,
        allowTypingIndicators: false,
        allowMessageReactions: false,
        allowMessageEditing: false,
        allowMessageDeletion: false,

        /* 
            Appearance
        */

        enableDarkMode: false,
        enableCompactMode: false,
        enableCustomThemes: false,
        enableFontSizeAdjustment: false,
        enableHighContrastMode: false
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
        },
        toggleUsernameChanges(checked) {
            this.enableUsernameChanges = checked;
        },
        togglePrivateProfile(checked) {
            this.enablePrivateProfile = checked;
        },
        toggleEmailNotifications(checked) {
            this.enableEmailNotifications = checked;
        },
        toggleSMSNotifications(checked) {
            this.enableSMSNotifications = checked;
        },
        togglePushNotifications(checked) {
            this.enablePushNotifications = checked;
        },
        toggleEmailSummary(checked) {
            this.enableEmailSummary = checked;
        },
        toggleInAppAlerts(checked) {
            this.enableInAppAlerts = checked;           
        },
        toggleSoundVibration(checked) {
            this.enableSoundVibration = checked;
        },
        toggleMarketingEmails(checked) {
            this.enableMarketingEmails = checked;
        },
        toggleReadReceipts(checked) {
            this.allowReadReceipts = checked;
        },
        toggleTypingIndicators(checked) {
            this.allowTypingIndicators = checked;
        },
        toggleMessageReactions(checked) {
            this.allowMessageReactions = checked;
        },
        toggleMessageEditing(checked) {
            this.allowMessageEditing = checked;
        },
        toggleMessageDeletion(checked) {
            this.allowMessageDeletion = checked;
        },
        toggleDarkMode(checked) {
            this.enableDarkMode = checked;
        },
        toggleCompactMode(checked) {
            this.enableCompactMode = checked;
        },
        toggleCustomThemes(checked) {
            this.enableCustomThemes = checked;
        },
        toggleFontSizeAdjustment(checked) {
            this.enableFontSizeAdjustment = checked;
        },
        toggleHighContrastMode(checked) {
            this.enableHighContrastMode = checked;
        }
    }     
});

export default useSettingsStore;