<template>
    <div @click="copyColor()" class="colorBlock" :style="{ backgroundColor: props.color }">
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 9H8C6.34315 9 5 10.3431 5 12V24C5 25.6569 6.34315 27 8 27H20C21.6569 27 23 25.6569 23 24V12C23 10.3431 21.6569 9 20 9Z"
                :stroke="readableColor(props.color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9 9V8C9 6.34315 10.3431 5 12 5H24C25.6569 5 27 6.34315 27 8V20C27 21.6569 25.6569 23 24 23H23"
                :stroke="readableColor(props.color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <p :style="{ color: readableColor(props.color) }">{{ props.color }}</p>
    </div>
</template>

<script lang="ts" setup>
import { readableColor } from "color2k";
import { useStore } from "vuex";

const props = defineProps<{ color: string }>();
const emit = defineEmits(['copyColor'])
const store = useStore()

function copyColor(){
    emit('copyColor', props.color, props.color)
    navigator.clipboard.writeText(props.color);
}
</script>
