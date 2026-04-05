<script setup lang="ts">
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const handleOptions = (option: string) => {
        router.push(option);
    };
</script>

<template>
    <nav class="nav_bar">
        <ul class="nav_options">
            <li class="nav_option">
                <button @click="() => handleOptions('/')">
                    <div class='nav_icon'/>
                    Account & Identity
                </button>
            </li>
            <li class="nav_option">
                <button @click="() => handleOptions('security-privacy')">
                    <div class='nav_icon'/>
                    Security & Privacy
                </button>
            </li>
            <li class="nav_option">
                <button @click="() => handleOptions('notifications')">
                    <div class='nav_icon'/>
                    Notification Preferences
                </button>
            </li>
            <li class="nav_option">
                <button @click="() => handleOptions('messaging-features')">
                    <div class='nav_icon'/>
                    Messaging Features
                </button>
            </li>
            <li class="nav_option">
                <button @click="() => handleOptions('appearance')">
                    <div class='nav_icon'/>
                    Appearance
                </button>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .nav_bar{
        width: 300px;
        height: 100%;
        border-radius: 15px;
        padding: 20px 0px 20px 20px;
        background-color: var(--preset-background-color-1)
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

    .nav_option > button{
        cursor: pointer;
        color: var(--preset-text-color);
        background-color: transparent;
        padding: 0px;
        display: flex;
        justify-content: center;
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