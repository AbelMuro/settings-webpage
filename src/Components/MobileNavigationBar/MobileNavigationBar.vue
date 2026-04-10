<script setup lang="ts">
    import {useRouter} from 'vue-router';
    import {useMediaQuery} from '../../Common/Hooks';
    import icons from '../../Common/icons';
    import {motion, AnimatePresence} from 'motion-v';

    const [mobile] = useMediaQuery<string>('(max-width: 750px)'); 
    const router = useRouter();

    const handleNavigation = (option: string) => {
        router.push(option);
    }

</script>

<template>
    <AnimatePresence>
        <motion.nav
            :initial="{y: '100%'}"
            :animate="{y: '0%'}"
            :exit="{y: '100%'}"
            class="navigation_bar" 
            v-if="mobile">
                <ul class="navigation_options">
                    <li>
                        <button class="navigation_option" @click="() => handleNavigation('/')">
                            <img :src="icons['user']"/>
                        </button>
                    </li>
                    <li>
                        <button class="navigation_option" @click="() => handleNavigation('security-privacy')">
                            <img :src="icons['lock']"/>
                        </button>
                    </li>
                    <li>
                        <button class="navigation_option" @click="() => handleNavigation('notifications')">
                            <img :src="icons['bell']"/>
                        </button>
                    </li>
                    <li>
                        <button class="navigation_option" @click="() => handleNavigation('messaging-features')">
                            <img :src="icons['comment']"/>
                        </button>
                    </li>
                    <li>
                        <button class="navigation_option" @click="() => handleNavigation('appearance')">
                            <img :src="icons['half']"/>
                        </button>
                    </li>
                </ul>
        </motion.nav>
    </AnimatePresence>
</template>

<style scoped>
    .navigation_bar{
        width: 100%;
        height: 60px;
        background-color: var(--preset-background-color-1);
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }

    .navigation_options{
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .navigation_option{
        background-color: var(--preset-background-color-2);
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }

    .navigation_option:active{
        background-color: #0000f2;
    }

    .navigation_option > img{
        width: 30px;
        object-fit: contain;
    }
</style>