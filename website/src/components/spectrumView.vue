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
            />
        </div>
        <div class="textContainer">
            <div v-if="data.textFormat == 'Array'">
                <p>[</p>
                <p v-for="color in data.formatedcolors" :key="color">"{{ color }}",</p> 
                <p>]</p>
            </div>
            <div v-else-if="data.textFormat == 'CSS'">
                <p>:root {</p>
                    <p v-for="(color, index) in data.formatedcolors" :key="color">--ct-{{ props.title.toLowerCase() }}-{{index}}: {{ color }};</p> 
                <p>}</p>
            </div>
            <div v-else-if="data.textFormat== 'SCSS'">
                <p v-for="(color, index) in data.formatedcolors" :key="color">$ct-{{ props.title.toLowerCase() }}-{{index}}: {{ color }};</p> 
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toHsla, toRgba } from 'color2k'
import { onMounted, reactive, watch, computed } from "vue";
import { useStore } from "vuex";
import colorBlock from "./colorBlock.vue";

const props = defineProps<{ colorArray: string[]; title: string }>();

// let formatedcolors: string[] = props.colorArray;
const store = useStore();
const data = reactive({
    textFormat: "CSS",
    colorFormat: "Hex",
    formatedcolors: props.colorArray
});

function formatColors(){
    data.formatedcolors = []
    for(let i = 0; i in props.colorArray; i++){
        if(data.colorFormat == 'Hsla'){
            data.formatedcolors.push(toHsla(props.colorArray[i]))
        }
        else if(data.colorFormat == 'Rgba'){
            data.formatedcolors.push(toRgba(props.colorArray[i]))
        }
        else{
            data.formatedcolors.push(props.colorArray[i])
        }
    }
}

onMounted(() => {
    data.textFormat = store.state.textFormat;
    data.colorFormat = store.state.colorFormat;
    formatColors()
});

watch(store.state, (newState: any) => {
    data.colorFormat = newState.colorFormat;
    data.textFormat = newState.textFormat;
    formatColors()
});


</script>
