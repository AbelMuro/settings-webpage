<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';
    import useSettingsStore from '../../../Store';
    const {setting, label} = defineProps({
        setting: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    })

    const store = useSettingsStore();
    const dispatchAction = store[`toggle${setting}`];
    const isChecked = ref(false);

    const handleChecked = () => {
        isChecked.value = !isChecked.value;
    }

    watch(isChecked, (newValue) => {
        dispatchAction(newValue)
    })
</script>

<template>  
    <div class="switch_container">
        <label class="switch_label">{{ label }}</label>
        <motion.div 
            @click="handleChecked" 
            class="switch"
            :initial="false"
            :animate="isChecked ? {backgroundColor: '#0000ff'} : {backgroundColor: '#4444ff'}"
            >
                <motion.div 
                    :initial="false"
                    :animate="isChecked ? {x: 30} : {x: 0}"
                    :transition="{duration: 0.2, type: 'spring', stiffness: 700, damping: 30}"
                    class="dot">
                </motion.div>
        </motion.div>
    </div>

</template>

<style scoped>
    .switch_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .switch{
        width: 60px;
        height: 30px;
        padding: 5px;
        border-radius: 15px;
        cursor: pointer;
        color: #44d3ff;
    }

    .switch_label{
        color: var(--preset-text-color);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }
    .dot{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: white;
        transition: none;
    }
</style>