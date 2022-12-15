<template>
    <div class="tintsView">
        <spectrum-view :color-array="darknessArray" title="Darkness"/>
        <spectrum-view :color-array="lightnessArray" title="Lightness"/>
        <spectrum-view :color-array="diagonalArray" title="Diagonal"/>
        <spectrum-view :color-array="saturationArray" title="Saturation"/>
        <spectrum-view :color-array="opacityArray" title="Opacity"/>
    </div>
</template>

<script lang="ts" setup>
import { getDiagonal, getLightness, getOpacity, getSaturation, getDarkness } from '../Color Tinter/color-tinter'
import spectrumView from './spectrumView.vue';

const props = defineProps<{color: string}>()

const darknessArray = getDarkness(props.color)
const lightnessArray = getLightness(props.color)
const saturationArray = getSaturation(props.color)
const diagonalArray = getDiagonal(props.color)
const opacityArray = getOpacity(props.color)

</script>
