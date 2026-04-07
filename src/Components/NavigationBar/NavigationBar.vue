<script setup lang="ts">
    import {watch, ref} from 'vue';
    import {useRouter} from 'vue-router';
    import {motion} from 'motion-v';

    const router = useRouter();
    const selectedOption = ref<string>('');    

    const handleOptions = (option: string) => {
        router.push(option);
    };

    watch(router.currentRoute, (currentRoute) => {
        const newPathname = currentRoute.path;
        selectedOption.value = newPathname;
    }, {immediate: true});
</script>

<template>
    <nav class="nav_bar">
        <ul class="nav_options">
            <li class="nav_option">
                <motion.button 
                    @click="() => handleOptions('/')" 
                    :initial="false"
                    :animate="selectedOption === '/' ? {backgroundColor: '#00008f'} : {backgroundColor: '#00005a'}">
                    <div class='nav_icon'/>
                    Account & Identity
                </motion.button>
            </li>
            <li class="nav_option">
                <motion.button @click="() => handleOptions('security-privacy')" 
                    :initial="false" 
                    :animate="selectedOption === '/security-privacy' ? {backgroundColor: '#00008f'} : {backgroundColor: '#00005a'}" >
                    <div class='nav_icon'/>
                    Security & Privacy
                </motion.button>
            </li>
            <li class="nav_option">
                <motion.button @click="() => handleOptions('notifications')" 
                    :initial="false" 
                    :animate="selectedOption === '/notifications' ? {backgroundColor: '#00008f'} : {backgroundColor: '#00005a'}" >
                    <div class='nav_icon'/>
                    Notification Preferences
                </motion.button>
            </li>
            <li class="nav_option">
                <motion.button @click="() => handleOptions('messaging-features')" 
                    :initial="false" 
                    :animate="selectedOption === '/messaging-features' ? {backgroundColor: '#00008f'} : {backgroundColor: '#00005a'}" >
                    <div class='nav_icon'/>
                    Messaging Features
                </motion.button>
            </li>
            <li class="nav_option">
                <motion.button @click="() => handleOptions('appearance')" 
                    :initial="false" 
                    :animate="selectedOption === '/appearance' ? {backgroundColor: '#00008f'} : {backgroundColor: '#00005a'}">
                    <div class='nav_icon'/>
                    Appearance
                </motion.button>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .nav_bar{
        width: 300px;
        height: fit-content;
        border-radius: 15px;
        padding: 20px 0px 20px 20px;
        background-color: var(--preset-background-color-1);
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .nav_options{
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        list-style-type: none;
        display: flex;
        gap: 10px;
        justify-content: start;
        align-items: start;
        flex-direction: column;
    }

    .nav_option{
        width: 100%;
    }

    .nav_option > button{
        width: 100%;
        cursor: pointer;
        color: var(--preset-text-color);
        background-color: var(--preset-background-color-1);
        padding: 10px;
        border-radius: 10px 0px 0px 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        border: none;
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        letter-spacing: var(--preset-text-4-letter-spacing);
        line-height: var(--preset-text-4-line-height);
    }

    .nav_option > button:hover{
        color: var(--preset-text-color-hover);
    }

    .nav_option > button:active{
        color: var(--preset-text-color-active);
    }

    .nav_icon{
        width: 20px;
        height: 20px;
        mask-size: 20px 20px;
        mask-position: center;
        mask-repeat: no-repeat;
        background-color: var(--preset-text-color);
    }

    .nav_option:nth-of-type(1) .nav_icon{
        mask-image: url('./icons/user-icon.svg');
    }

    .nav_option:nth-of-type(2) .nav_icon{
        mask-image: url('./icons/lock-icon.svg');
    }

    .nav_option:nth-of-type(3) .nav_icon{
        mask-image: url('./icons/bell-icon.svg');
    }

    .nav_option:nth-of-type(4) .nav_icon{
        mask-image: url('./icons/comment-icon.svg');
    }

    .nav_option:nth-of-type(5) .nav_icon{
        mask-image: url('./icons/half-icon.svg');
    }

    .nav_option > button:hover > .nav_icon{
        background-color: var(--preset-text-color-hover);
    }

    .nav_option > button:active > .nav_icon{
        background-color: var(--preset-text-color-active);
    }

</style>