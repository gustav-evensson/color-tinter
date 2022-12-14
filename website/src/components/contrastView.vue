<template>
    <div class="contrastContainer">
        <div class="inputFields">
            <p>Your color:</p>
            <div class="inputItem colorPicker">
                <input
                    type="text"
                    placeholder="Your Color"
                    v-model="data.color"
                />
                <div class="colorInput">
                    <input type="color" v-model="data.color" />
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.7 18.675C27.9073 17.7648 28.008 16.8335 28 15.9C27.95 9.2875 22.475 3.9375 15.875 4C13.0554 4.02973 10.3363 5.05142 8.19484 6.88581C6.05337 8.7202 4.62626 11.2501 4.16391 14.0317C3.70155 16.8133 4.23349 19.6688 5.66639 22.0973C7.09928 24.5259 9.34161 26.3722 12 27.3125C12.4522 27.4754 12.937 27.5268 13.4133 27.4623C13.8896 27.3978 14.3433 27.2194 14.7359 26.9421C15.1285 26.6648 15.4485 26.2969 15.6685 25.8696C15.8886 25.4423 16.0023 24.9681 16 24.4875V24C15.9983 23.6056 16.0748 23.2147 16.225 22.85C16.3751 22.4853 16.596 22.1539 16.875 21.875C17.1539 21.5961 17.4852 21.3752 17.85 21.225C18.2147 21.0748 18.6055 20.9983 19 21H24.775C25.4536 21.0004 26.1124 20.7708 26.6436 20.3485C27.1749 19.9262 27.5473 19.3362 27.7 18.675V18.675Z"
                            stroke="#8D8D8D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="outline"
                        />
                        <path
                            d="M16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M10.375 14.25C11.2034 14.25 11.875 13.5784 11.875 12.75C11.875 11.9216 11.2034 11.25 10.375 11.25C9.54657 11.25 8.875 11.9216 8.875 12.75C8.875 13.5784 9.54657 14.25 10.375 14.25Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M10.375 20.75C11.2034 20.75 11.875 20.0784 11.875 19.25C11.875 18.4216 11.2034 17.75 10.375 17.75C9.54657 17.75 8.875 18.4216 8.875 19.25C8.875 20.0784 9.54657 20.75 10.375 20.75Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M21.625 14.25C22.4534 14.25 23.125 13.5784 23.125 12.75C23.125 11.9216 22.4534 11.25 21.625 11.25C20.7966 11.25 20.125 11.9216 20.125 12.75C20.125 13.5784 20.7966 14.25 21.625 14.25Z"
                            fill="#8D8D8D"
                        />
                    </svg>
                </div>
            </div>
            <p>Contrast color:</p>
            <div class="inputItem colorPicker">
                <input
                    type="text"
                    placeholder="Your Color"
                    v-model="data.contrastColor"
                />
                <div class="colorInput">
                    <input type="color" v-model="data.contrastColor" />
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.7 18.675C27.9073 17.7648 28.008 16.8335 28 15.9C27.95 9.2875 22.475 3.9375 15.875 4C13.0554 4.02973 10.3363 5.05142 8.19484 6.88581C6.05337 8.7202 4.62626 11.2501 4.16391 14.0317C3.70155 16.8133 4.23349 19.6688 5.66639 22.0973C7.09928 24.5259 9.34161 26.3722 12 27.3125C12.4522 27.4754 12.937 27.5268 13.4133 27.4623C13.8896 27.3978 14.3433 27.2194 14.7359 26.9421C15.1285 26.6648 15.4485 26.2969 15.6685 25.8696C15.8886 25.4423 16.0023 24.9681 16 24.4875V24C15.9983 23.6056 16.0748 23.2147 16.225 22.85C16.3751 22.4853 16.596 22.1539 16.875 21.875C17.1539 21.5961 17.4852 21.3752 17.85 21.225C18.2147 21.0748 18.6055 20.9983 19 21H24.775C25.4536 21.0004 26.1124 20.7708 26.6436 20.3485C27.1749 19.9262 27.5473 19.3362 27.7 18.675V18.675Z"
                            stroke="#8D8D8D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="outline"
                        />
                        <path
                            d="M16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M10.375 14.25C11.2034 14.25 11.875 13.5784 11.875 12.75C11.875 11.9216 11.2034 11.25 10.375 11.25C9.54657 11.25 8.875 11.9216 8.875 12.75C8.875 13.5784 9.54657 14.25 10.375 14.25Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M10.375 20.75C11.2034 20.75 11.875 20.0784 11.875 19.25C11.875 18.4216 11.2034 17.75 10.375 17.75C9.54657 17.75 8.875 18.4216 8.875 19.25C8.875 20.0784 9.54657 20.75 10.375 20.75Z"
                            fill="#8D8D8D"
                        />
                        <path
                            d="M21.625 14.25C22.4534 14.25 23.125 13.5784 23.125 12.75C23.125 11.9216 22.4534 11.25 21.625 11.25C20.7966 11.25 20.125 11.9216 20.125 12.75C20.125 13.5784 20.7966 14.25 21.625 14.25Z"
                            fill="#8D8D8D"
                        />
                    </svg>
                </div>
            </div>
            <p>Contrast data:</p>
            <div
                class="contrastData"
                :style="{ backgroundColor: data.qualityColor }"
            >
                <h2>{{ data.contrast }}</h2>
                <h5>{{ data.contrastQuality }}</h5>
            </div>
        </div>
        <div
            class="showCase"
            :style="{ color: data.color, backgroundColor: data.contrastColor }"
        >
            <h3>
                This text is to check the contrast of the colors you gave us
            </h3>
            <h5>
                This text is to check the contrast of the colors you gave us
            </h5>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { store } from "@/VueX/store";
import { getContrast, hasBadContrast, readableColor, toHex } from "color2k";
import { computed, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps<{ color: string }>();
const store = useStore();

//#40bf75
//#d6ce5c
//#d6665c

const data = reactive({
    color: "",
    contrastColor: "",
    contrast: 0,
    contrastQuality: "",
    qualityColor: "",
});

onMounted(() => {
    data.color = props.color || store.state.savedColor;
    data.contrastColor = toHex(readableColor(data.color));
});

// const contrast = computed(() => {
//     return getContrast(data.color, data.contrastColor)
// })

const guidelines = {
  decorative: 1.5,
  readable: 3,
  aa: 4.5,
  aaa: 7
};

watch(data, (newData) => {
    data.contrast = getContrast(newData.color, newData.contrastColor).toFixed(2);
    if (data.contrast >= 7) {
        data.qualityColor = "#40bf75";
        data.contrastQuality = "aaa";
    }
    else if (data.contrast >= 4.5) {
        data.qualityColor = "#40bf75";
        data.contrastQuality = "aa";
    }
    else if (data.contrast >= 3) {
        data.qualityColor = "#d6ce5c";
        data.contrastQuality = "readable";
    }
    else if (data.contrast >= 1.5) {
        data.qualityColor = "#d6ce5c";
        data.contrastQuality = "decorative";
    }
    else {
        data.qualityColor = "#d6665c";
        data.contrastQuality = "bad";
    }
});

// const contrastQuality = computed(() => {
//     if(!hasBadContrast(props.color, "aaa", data.contrastColor)) return "aaa"
//     if(hasBadContrast(props.color, "aaa", data.contrastColor)) return "aa"
//     if(hasBadContrast(props.color, "aa", data.contrastColor)) return "readable"
//     if(hasBadContrast(props.color, "readable", data.contrastColor)) return "decorative"
//     if(hasBadContrast(props.color, "decorative", data.contrastColor)) return "bad"
// })
</script>
