import {createApp} from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
import {createPinia} from 'pinia';
import Settings from './Pages/Settings';
import AccountIdentity from './Components/AccountIdentity';
import SecurityPrivacy from './Components/SecurityPrivacy';
import Notifications from './Components/NotificationPreferences';
import MessagingFeatures from './Components/MessagingFeatures';
import Appearance from './Components/Appearance';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: Settings,
            children: [
                {
                    path: '/',
                    component: AccountIdentity
                }, 
                {
                    path: 'security-privacy',
                    component: SecurityPrivacy
                }, 
                {
                    path: 'notifications',
                    component: Notifications
                }, 
                {
                    path: 'messaging-features',
                    component: MessagingFeatures
                }, 
                {
                    path: 'appearance',
                    component: Appearance
                }
            ]
        }
    ]
})

app.use(router)
app.use(pinia);
app.mount('#root');