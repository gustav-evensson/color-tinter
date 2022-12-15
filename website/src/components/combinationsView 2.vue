<template>
    <div class="combinationsView">
        <spectrum-view :color-array="complementaryArray" title="Complementary"/>
        <spectrum-view :color-array="complementaryPairArray" title="Split-Complementary"/>
        <spectrum-view :color-array="trioArray" title="Trio"/>
        <spectrum-view :color-array="SquareArray" title="Square"/>
        <spectrum-view :color-array="monocromArray" title="Monocromatic"/>
    </div>
</template>

<script lang="ts" setup>
import { getComplementary, getComplementaryPair, getMonocrom, getSquare, getTrio, } from '../Color Tinter/color-tinter'
import spectrumView from './spectrumView.vue';

const props = defineProps<{color: string}>()

const complementaryArray = getComplementary(props.color)
const complementaryPairArray = getComplementaryPair(props.color)
const trioArray = getTrio(props.color)
const SquareArray = getSquare(props.color)
const monocromArray = getMonocrom(props.color)

</script>