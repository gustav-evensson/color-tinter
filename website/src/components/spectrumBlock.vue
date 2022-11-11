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
			const selectedColor = parseToHsla(props.color);
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[2] = i / 10;
				lightnessArray.push(hsla(newColor[0], newColor[1], newColor[2], newColor[3]));
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
			return saturationArray.reverse();
		}

		function generateDiagonal() {
			let diagonalArray = [];
			const selectedColor = parseToHsla(props.color);
			let i = 1;
			while (i < 10) {
				let newColor = selectedColor;
				newColor[1] = i / 10;
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

		function showMore(id) {
			const thisSection = document.querySelector('#' + id);
			if (thisSection.classList.contains('showMore')) {
				thisSection.classList.remove('showMore');
			} else {
				thisSection.classList.add('showMore');
			}
		}

		function changeLanguage(language) {
			store.commit('setLanguage', language);
			data.language = language;
		}
		function changeFormat(format) {
			store.commit('setColorFormat', format);
			data.colorFormat = format;
		}

		function copyText() {
			let text = '';
			const elements = document.querySelector('.copyText').childNodes;
			elements.forEach((element) => {
				if (element.nodeName == 'P') {
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
			data.copyConfirm = true;
			setTimeout(() => {
				data.copyConfirm = false
			}, 1000)
		}

		onBeforeMount(() => {
			data.language = store.state.language;
			data.colorFormat = store.state.colorFormat;
			if (props.spectrum == 'saturation') {
				data.colorArray = generateSaturation();
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

		watch(
			() => store.state.language,
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
			showMore,
			copyText,
		};
	},
};
</script>

<style lang="scss" scoped></style>
