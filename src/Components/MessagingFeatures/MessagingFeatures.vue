<script setup lang="ts">
    import {motion} from 'motion-v'; 
    import Switch from '../../Common/Components/Switch';

    const variants = {
        hidden: {},
        visible: {}
    }
</script>

<template>
    <motion.div
        initial="hidden"
        animate="visible"
        :variants="variants"
        :transition="{staggerChildren: 0.06}"
        class="switches">
            <Switch label="Allow Read Receipts" setting="ReadReceipts"/>
            <Switch label="Allow Typing Indicators" setting="TypingIndicators"/>
            <Switch label="Allow Message Reactions" setting="MessageReactions"/>
            <Switch label="Allow Message Editing" setting="MessageEditing"/>
            <Switch label="Allow Message Deletion" setting="MessageDeletion"/>
    </motion.div>
</template>

<style scoped>
    .switches{
        width: 323px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        grid-column: 2/3;
        grid-row: 2/3;
    }

    @media(max-width: 750px){
        .switches{
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
</style>