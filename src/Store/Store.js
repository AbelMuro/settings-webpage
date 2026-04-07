import {defineStore} from 'pinia';

const useSettingsStore = defineStore('settings', {
    state: () => ({
        searchQuery: '',

        TwoFactorAuth: false,
        LoginFromNewDevices: false,
        AutoLogout: false,
        EmailFromPublicProfile: false,
        DataCollectionForAnalytics: false,
        /* 
            Account & Identity
        */
        UsernameChanges: false,
        PrivateProfile: false,
        EmailNotifications: false,
        SMSNotifications: false,

        /* 
            Notification Preferences
        */
        PushNotifications: false,
        EmailSummary: false,
        InAppAlerts: false,
        SoundVibration: false,
        MarketingEmails: false,
        /* 
            Messaging Features
        */
        ReadReceipts: false,
        TypingIndicators: false,
        MessageReactions: false,
        MessageEditing: false,
        MessageDeletion: false,
        /* 
            Appearance
        */

        DarkMode: false,
        CompactMode: false,
        CustomThemes: false,
        FontSizeAdjustment: false,
        HighContrastMode: false
    }),
    actions: {
        updateSearchQuery(query) {
            this.searchQuery = query;
        },
        toggleTwoFactorAuth(checked) {
            this.TwoFactorAuth = checked;
        },
        toggleLoginFromNewDevices(checked) {
            this.LoginFromNewDevices = checked;
        },
        toggleAutoLogout(checked) {
            this.AutoLogout = checked;
        },
        toggleEmailFromPublicProfile(checked) {
            this.EmailFromPublicProfile = checked;
        },
        toggleDataCollectionForAnalytics(checked) {
            this.DataCollectionForAnalytics = checked;
        },
        toggleUsernameChanges(checked) {
            this.UsernameChanges = checked;
        },
        togglePrivateProfile(checked) {
            this.PrivateProfile = checked;
        },
        toggleEmailNotifications(checked) {
            this.EmailNotifications = checked;
        },
        toggleSMSNotifications(checked) {
            this.SMSNotifications = checked;
        },
        togglePushNotifications(checked) {
            this.PushNotifications = checked;
        },
        toggleEmailSummary(checked) {
            this.EmailSummary = checked;
        },
        toggleInAppAlerts(checked) {
            this.InAppAlerts = checked;           
        },
        toggleSoundVibration(checked) {
            this.SoundVibration = checked;
        },
        toggleMarketingEmails(checked) {
            this.MarketingEmails = checked;
        },
        toggleReadReceipts(checked) {
            this.ReadReceipts = checked;
        },
        toggleTypingIndicators(checked) {
            this.TypingIndicators = checked;
        },
        toggleMessageReactions(checked) {
            this.MessageReactions = checked;
        },
        toggleMessageEditing(checked) {
            this.MessageEditing = checked;
        },
        toggleMessageDeletion(checked) {
            this.MessageDeletion = checked;
        },
        toggleDarkMode(checked) {
            this.DarkMode = checked;
        },
        toggleCompactMode(checked) {
            this.CompactMode = checked;
        },
        toggleCustomThemes(checked) {
            this.CustomThemes = checked;
        },
        toggleFontSizeAdjustment(checked) {
            this.FontSizeAdjustment = checked;
        },
        toggleHighContrastMode(checked) {
            this.HighContrastMode = checked;
        }
    }     
});

export default useSettingsStore;