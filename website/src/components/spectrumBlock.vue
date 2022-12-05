<template>
	<div class="spectrumContainer">
		<div class="spectrumTopBar">
			<h2>{{ spectrum.charAt(0).toUpperCase() + spectrum.slice(1) }}</h2>
		</div>
		<div class="spectrum" v-if="data.colorArray.length > 0">
			<color-comp-vue v-for="(tint, index) in data.colorArray" :key="index" :contrast="tint" :color="tint" />
		</div>
		<div class="copyContainer">
			<div class="copyOptions">
				<button class="languageOptions dropdownMenu">
					<p style="color: #000">{{ data.language }}</p>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M26 12L16 22L6 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<div class="filterOptions">
						<button v-for="(option, index) in data.languageOptions" :key="index" @click="changeLanguage(option)">{{ option }}</button>
					</div>
				</button>
				<button class="colorFormatOptions dropdownMenu">
					<p style="color: #000">{{ data.colorFormat }}</p>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M26 12L16 22L6 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<div class="filterOptions">
						<button v-for="(option, index) in data.formatOptions" :key="index" @click="changeFormat(option)">{{ option }}</button>
					</div>
				</button>
			</div>
			<div style="position: relative">
				<button class="copyButton" @click="copyText()">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 23V5H9" stroke="#8d8d8d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M23 9H5V27H23V9Z" stroke="#8d8d8d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<div class="copyText" v-if="data.language == 'css'">
					<p class="preifx">:root {</p>
					<div v-if="data.colorFormat == 'HEX'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">--{{ spectrum + '-' + (index + 1) * 10 }}: {{ toHex(line) }};</p>
					</div>
					<div v-if="data.colorFormat == 'RGBA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">--{{ spectrum + '-' + (index + 1) * 10 }}: {{ toRgba(line) }};</p>
					</div>
					<div v-if="data.colorFormat == 'HSLA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">--{{ spectrum + '-' + (index + 1) * 10 }}: {{ line }};</p>
					</div>
					<p class="preifx">}</p>
				</div>
				<div class="copyText" v-if="data.language == 'scss'">
					<div v-if="data.colorFormat == 'HEX'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">${{ spectrum + '-' + (index + 1) * 10 }}: {{ toHex(line) }};</p>
					</div>
					<div v-if="data.colorFormat == 'RGBA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">${{ spectrum + '-' + (index + 1) * 10 }}: {{ toRgba(line) }};</p>
					</div>
					<div v-if="data.colorFormat == 'HSLA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">${{ spectrum + '-' + (index + 1) * 10 }}: {{ line }};</p>
					</div>
				</div>
				<div class="copyText" v-if="data.language == 'array'">
					<p class="preifx">[</p>
					<div v-if="data.colorFormat == 'HEX'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">"{{ toHex(line) }}",</p>
					</div>
					<div v-if="data.colorFormat == 'RGBA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">"{{ toRgba(line) }}",</p>
					</div>
					<div v-if="data.colorFormat == 'HSLA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">"{{ line }}",</p>
					</div>
					<p class="preifx">]</p>
				</div>
				<div class="copyText" v-if="data.language == 'object'">
					<p class="preifx">{</p>
					<div v-if="data.colorFormat == 'HEX'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">{{ spectrum + (index + 1) * 10 }}: "{{ toHex(line) }}",</p>
					</div>
					<div v-if="data.colorFormat == 'RGBA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">{{ spectrum + (index + 1) * 10 }}: "{{ toRgba(line) }}",</p>
					</div>
					<div v-if="data.colorFormat == 'HSLA'">
						<p class="colorText" v-for="(line, index) in data.colorArray" :key="index">{{ spectrum + (index + 1) * 10 }}: "{{ line }}",</p>
					</div>
					<p class="preifx">}</p>
				</div>
			</div>
		</div>
		<div :class="{ copyConfirm: true, showCopyConfirm: data.copyConfirm }">
			Copied!
		</div>
	</div>
</template>

<script>
import { parseToHsla, hsla, toHex, toRgba } from 'color2k';
import { reactive, watch, onBeforeMount } from 'vue';
import store from '../Store/store';
import colorCompVue from './colorComp.vue';

export default {
	components: { colorCompVue },
	props: ['color', 'spectrum'],
	setup(props) {
		const data = reactive({
			colorArray: [],
			language: '',
			languageOptions: ['css', 'scss', 'array', 'object'],
			colorFormat: '',
			formatOptions: ['HEX', 'RGBA', 'HSLA'],
			copyConfirm: false
		});

		function generateLightness() {
			let lightnessArray = [];
			const selectedColor = parseToHsla(props.color);	//This returns an array so we easily can modify the values. [hue, saturation, lightnes, alpha]
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[2] = i / 10;
				lightnessArray.push(hsla(newColor[0], newColor[1], newColor[2], newColor[3])); //Then we push the color put back to gether in hsla format.
				i++;
			}
			return lightnessArray;
		}

		function generateSaturation() { 
			let saturationArray = [];
			const selectedColor = parseToHsla(props.color);
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[1] = i / 10;
				saturationArray.push(hsla(newColor[0], newColor[1], newColor[2], newColor[3]));
				i++;
			}
			return saturationArray.reverse(); // Reversing to get the displayed color spectrum going the other way.
		}

		function generateDiagonal() {
			let diagonalArray = [];
			const selectedColor = parseToHsla(props.color);
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[1] = i / 10; //Here we modify 2 of the values (saturation and lightness) to get the diagonal spectrum.
				newColor[2] = i / 10;
				diagonalArray.push(hsla(newColor[0], newColor[1], newColor[2], newColor[3]));
				i++;
			}
			return diagonalArray;
		}

		function generateOpacity(){
			let lightnessArray = [];
			const selectedColor = parseToHsla(props.color);
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[3] = i / 10;
				lightnessArray.push(hsla(newColor[0], newColor[1], newColor[2], newColor[3]));
				i++;
			}
			return lightnessArray.reverse();
		}

		function changeLanguage(language) { 		// These two functions are used to set the format of the output text. 
			store.commit('setLanguage', language);  // We use Vuex to get the same settings over all components
			data.language = language;
		}
		function changeFormat(format) {
			store.commit('setColorFormat', format);
			data.colorFormat = format;
		}

		function copyText() { //This is the function for the copy button to get the output text to the users clipboard.
			let text = '';
			const elements = document.querySelector('.copyText').childNodes; 
			elements.forEach((element) => {  						// If we would copy the entire textContent of the parent element
				if (element.nodeName == 'P') {						// we get som unwanted linebreaks and spaces so this function solves this issue.
					text += element.textContent + '\n';
				} else if (element.nodeName == 'DIV') {
					element.childNodes.forEach((subElement) => {
						if (subElement.nodeName == 'P') {
							text += subElement.textContent + '\n';
						}
					});
				}
			});
			navigator.clipboard.writeText(text); 
			data.copyConfirm = true;		// This part is to show the confirmation card that pops up when the text is copied
			setTimeout(() => {
				data.copyConfirm = false    // Then after 1s we hide the card again
			}, 1000)
		}

		onBeforeMount(() => {								
			data.language = store.state.language;		//We get the language and color format from the store before we mount
			data.colorFormat = store.state.colorFormat;
			if (props.spectrum == 'saturation') {			// Because we are working with components that are going to output different color spectrums
				data.colorArray = generateSaturation();		// we need to know wich function to run depending on what the spectrum prop is set to.
			} else if (props.spectrum == 'lightness') {
				data.colorArray = generateLightness();
			} else if (props.spectrum == 'diagonal') {
				data.colorArray = generateDiagonal();
			} else if (props.spectrum == 'opacity') {
				data.colorArray = generateOpacity();
			} else {
				console.error('Spectrum does not exist');
			}
		});

		watch(								// These watchers are used for when we update the language or color format
			() => store.state.language,		// when one component updates the language we want to simultaneously update the other components
			(getLanguage) => {
				data.language = getLanguage; 
			}
		);
		watch(
			() => store.state.colorFormat,
			(getColorFormat) => {
				data.colorFormat = getColorFormat;
			}
		);

		return {
			data,
			changeLanguage,
			changeFormat,
			toHex,
			toRgba,
			parseToHsla,
			copyText,
		};
	},
};
</script>