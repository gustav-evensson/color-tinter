<template>
	<div :style="{ backgroundColor: color }" class="color" @click="copyColor()">
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M27 23V5H9" :stroke="displayTextColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M23 9H5V27H23V9Z" :stroke="displayTextColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<p :style="{ color: displayTextColor }">{{ displayText }}</p>
		<h3 :style="{color: displayTextColor}" :class="{ copied: data.copied}">Copied!</h3>
	</div>
</template>

<script>
import { readableColor, toHex } from 'color2k';
import { reactive } from 'vue';
import '../css/App.css'

export default {
	props: ['color'],
	setup(props) {
		const displayText = toHex(props.color); 
		const displayTextColor = readableColor(props.color); // This is a function from the color2k library that return black or white depending on the inputed colors contrast to eather of them.
		const data = reactive({
			copied: false
		})

		function copyColor(){
			navigator.clipboard.writeText(displayText);
			data.copied = true // This shows a popup text when the color is copied and eventually hides it after 1s
			setTimeout(() => {
				data.copied = false
			}, 1000);
		}

		return {
			displayText,
			displayTextColor,
			copyColor,
			data
		};
	},
};
</script>
