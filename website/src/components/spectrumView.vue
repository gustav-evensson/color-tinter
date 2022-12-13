<template>
    <div class="spectrumView">
        <div class="titleBar">
            <h1>{{ props.title }}</h1>
        </div>
        <div class="colorsContainer">
            <color-block
                v-for="color in props.colorArray"
                :key="color"
                :color="color"
                @copy-color="createNotification"
            />
        </div>
        <div class="textContainer">
            <button class="copyButton" @click="copyText()">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 9H8C6.34315 9 5 10.3431 5 12V24C5 25.6569 6.34315 27 8 27H20C21.6569 27 23 25.6569 23 24V12C23 10.3431 21.6569 9 20 9Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9 9V8C9 6.34315 10.3431 5 12 5H24C25.6569 5 27 6.34315 27 8V20C27 21.6569 25.6569 23 24 23H23"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <div v-if="data.textFormat == 'Array'" class="copyText">
                <p>[</p>
                <p v-for="color in data.formatedcolors" :key="color">
                    "{{ color }}",
                </p>
                <p>]</p>
            </div>
            <div v-else-if="data.textFormat == 'CSS'" class="copyText">
                <p>:root {</p>
                <p v-for="(color, index) in data.formatedcolors" :key="color">
                    --ct-{{ props.title.toLowerCase() }}-{{ index }}:
                    {{ color }};
                </p>
                <p>}</p>
            </div>
            <div v-else-if="data.textFormat == 'SCSS'" class="copyText">
                <p v-for="(color, index) in data.formatedcolors" :key="color">
                    $ct-{{ props.title.toLowerCase() }}-{{ index }}:
                    {{ color }};
                </p>
            </div>
        </div>
        <notify-view ref="notifications"/>
    </div>
</template>

<script lang="ts" setup>
import { toHsla, toRgba } from "color2k";
import { onMounted, reactive, watch, computed, ref } from "vue";
import { useStore } from "vuex";
import colorBlock from "./colorBlock.vue";
import notifyView from "./notifyView.vue";

const props = defineProps<{ colorArray: string[]; title: string }>();

// let formatedcolors: string[] = props.colorArray;
const store = useStore();
const notifications = ref()
const data = reactive({
    textFormat: "CSS",
    colorFormat: "Hex",
    formatedcolors: props.colorArray,
});

function formatColors() {
    data.formatedcolors = [];
    for (let i = 0; i in props.colorArray; i++) {
        if (data.colorFormat == "Hsla") {
            data.formatedcolors.push(toHsla(props.colorArray[i]));
        } else if (data.colorFormat == "Rgba") {
            data.formatedcolors.push(toRgba(props.colorArray[i]));
        } else {
            data.formatedcolors.push(props.colorArray[i]);
        }
    }
}

function createNotification(notificationText: string, color: string){
    notifications.value.createNotification(`Copied ${notificationText}!`, color)
}

function copyText() {
    //This is the function for the copy button to get the output text to the users clipboard.
    let text = "";
    const elements = document.querySelector(".copyText").childNodes;
    elements.forEach((element) => {
        // If we would copy the entire textContent of the parent element
        if (element.nodeName == "P") {
            // we get som unwanted linebreaks and spaces so this function solves this issue.
            text += element.textContent + "\n";
        } else if (element.nodeName == "DIV") {
            element.childNodes.forEach((subElement) => {
                if (subElement.nodeName == "P") {
                    text += subElement.textContent + "\n";
                }
            });
        }
    });
    navigator.clipboard.writeText(text);
    createNotification(props.title, null)
    // data.copyConfirm = true; // This part is to show the confirmation card that pops up when the text is copied
    // setTimeout(() => {
    //     data.copyConfirm = false; // Then after 1s we hide the card again
    // }, 1000);
}

onMounted(() => {
    data.textFormat = store.state.textFormat;
    data.colorFormat = store.state.colorFormat;
    formatColors();
});

watch(store.state, (newState: any) => {
    data.colorFormat = newState.colorFormat;
    data.textFormat = newState.textFormat;
    formatColors();
});
</script>
