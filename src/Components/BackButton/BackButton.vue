<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';

    const previousPath = ref<string>('')
    const router = useRouter();

    router.beforeEach((to, from, next) => {
        previousPath.value = from.fullPath;
        next();
    })

    const handleBack = () => {
        router.back();
    }

    const formatPath = (path : string) => {
        let formattedPath = path.replace('/', '');
        if(formattedPath === '')
            return 'account'
        let divider = formattedPath.indexOf('-');
        divider = divider === -1 ? formattedPath.length : divider;
        return formattedPath.slice(0, divider);
    }   
</script>

<template>
    <button class="back_button" @click="handleBack"> 
        <div class="arrow"/>
        {{formatPath(previousPath)}}
    </button>
</template>

<style scoped>
    .back_button{
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: start;
        background-color: transparent;
        text-transform: capitalize;
        color: white;
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        overflow: visible;
    }

    .arrow{
        width: 20px;
        height: 20px;
        object-fit: contain;
        mask-image: url('./icons/arrow-left.svg');
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: 20px 20px;
        background-color: white;
    }

    .back_button:hover{
        color: rgb(177, 177, 177);
    }

    .back_button:hover > .arrow{
        background-color: rgb(177, 177, 177);
    }

    .back_button:active{
        color: rgb(109, 109, 109);
    }

    .back_button:active > .arrow{
        background-color: rgb(109, 109, 109);
    }

    @media(max-width: 750px){
        .back_button{
            grid-column: 1/2;
            grid-row: 1/2;
        }
    }

</style>