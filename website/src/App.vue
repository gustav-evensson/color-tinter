<template>
	<div class="app">
		<nav>
			<div class="navItems">
				<img src="./assets/color-tinter.png" alt="color tinter logo" />
				<div class="topContainer">
					<div class="filterBar">
						<button class="filterWrapper dropdownMenu">
							<p :class="{ filterActive: data.filter != 'Filter' }">{{ data.filter }}</p>
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M26 12L16 22L6 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<div class="filterOptions">
								<button v-for="(option, index) in data.filterOptions" :key="index" @click="data.filter = option">{{ option }}</button>
							</div>
						</button>
						<div class="inputWrapper">
							<input type="text" v-model="data.inputColor" placeholder="#FF0000" />
							<div class="pickedColor">
								<div :style="{ background: data.inputColor }" class="thisColor"></div>
							</div>
							<div class="colorPicker">
								<input type="color" v-model="data.inputColor" />
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M27.7 18.675C27.9073 17.7648 28.008 16.8335 28 15.9C27.95 9.2875 22.475 3.9375 15.875 4C13.0554 4.02973 10.3363 5.05142 8.19484 6.88581C6.05337 8.7202 4.62626 11.2501 4.16391 14.0317C3.70155 16.8133 4.23349 19.6688 5.66639 22.0973C7.09928 24.5259 9.34161 26.3722 12 27.3125C12.4522 27.4754 12.937 27.5268 13.4133 27.4623C13.8896 27.3978 14.3433 27.2194 14.7359 26.9421C15.1285 26.6648 15.4485 26.2969 15.6685 25.8696C15.8886 25.4423 16.0023 24.9681 16 24.4875V24C15.9983 23.6056 16.0748 23.2147 16.225 22.85C16.3751 22.4853 16.596 22.1539 16.875 21.875C17.1539 21.5961 17.4852 21.3752 17.85 21.225C18.2147 21.0748 18.6055 20.9983 19 21H24.775C25.4536 21.0004 26.1124 20.7708 26.6436 20.3485C27.1749 19.9262 27.5473 19.3362 27.7 18.675V18.675Z"
										stroke="#8D8D8D"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path d="M16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z" fill="#8D8D8D" />
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
						<button class="reGenerate" @click="generateSpectrum">Generate</button>
					</div>
				</div>
				<button class="menuToggle" @click="data.showMenu = !data.showMenu">
					<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="33" height="2" rx="1" fill="black" />
						<rect x="13.3572" y="11" width="19.6429" height="2" rx="1" fill="black" />
						<rect x="7.07153" y="22" width="25.9286" height="2" rx="1" fill="black" />
					</svg>
				</button>
				<div class="menu" :class="{ showMenu: data.showMenu }">
					<button class="closeMenu" @click="data.showMenu = !data.showMenu">
						<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.125488" y="23.9601" width="33" height="2" rx="1" transform="rotate(-45 0.125488 23.9601)" fill="black" />
							<rect width="33" height="2" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.8743 23.9601)" fill="black" />
						</svg>
					</button>
					<div class="filterBar">
						<button class="filterWrapper dropdownMenu">
							<p :class="{ filterActive: data.filter != 'Filter' }">{{ data.filter }}</p>
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M26 12L16 22L6 12" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<div class="filterOptions">
								<button v-for="(option, index) in data.filterOptions" :key="index" @click="data.filter = option">{{ option }}</button>
							</div>
						</button>
						<div class="inputWrapper">
							<input type="text" v-model="data.inputColor" placeholder="#FF0000" />
							<div class="pickedColor">
								<div :style="{ background: data.inputColor }" class="thisColor"></div>
							</div>
							<div class="colorPicker">
								<input type="color" v-model="data.inputColor" />
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M27.7 18.675C27.9073 17.7648 28.008 16.8335 28 15.9C27.95 9.2875 22.475 3.9375 15.875 4C13.0554 4.02973 10.3363 5.05142 8.19484 6.88581C6.05337 8.7202 4.62626 11.2501 4.16391 14.0317C3.70155 16.8133 4.23349 19.6688 5.66639 22.0973C7.09928 24.5259 9.34161 26.3722 12 27.3125C12.4522 27.4754 12.937 27.5268 13.4133 27.4623C13.8896 27.3978 14.3433 27.2194 14.7359 26.9421C15.1285 26.6648 15.4485 26.2969 15.6685 25.8696C15.8886 25.4423 16.0023 24.9681 16 24.4875V24C15.9983 23.6056 16.0748 23.2147 16.225 22.85C16.3751 22.4853 16.596 22.1539 16.875 21.875C17.1539 21.5961 17.4852 21.3752 17.85 21.225C18.2147 21.0748 18.6055 20.9983 19 21H24.775C25.4536 21.0004 26.1124 20.7708 26.6436 20.3485C27.1749 19.9262 27.5473 19.3362 27.7 18.675V18.675Z"
										stroke="#8D8D8D"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path d="M16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z" fill="#8D8D8D" />
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
						<button class="reGenerate" @click="generateSpectrum">Generate</button>
					</div>
				</div>
			</div>
		</nav>
		<section class="spectrumSection">
			<spectrum-block-vue v-if="data.filter == 'Filter' || data.filter == 'Saturation'" :key="data.color" spectrum="saturation" :color="data.color" />
			<spectrum-block-vue v-if="data.filter == 'Filter' || data.filter == 'Lightness'" :key="data.color" spectrum="lightness" :color="data.color" />
			<spectrum-block-vue v-if="data.filter == 'Filter' || data.filter == 'Diagonal'" :key="data.color" spectrum="diagonal" :color="data.color" />
			<spectrum-block-vue v-if="data.filter == 'Filter' || data.filter == 'Opacity'" :key="data.color" spectrum="opacity" :color="data.color" />
		</section>
	</div>
</template>

<script>
import { onBeforeMount, reactive } from 'vue';
import './css/App.css';
import spectrumBlockVue from './components/spectrumBlock.vue';
import { parseToHsla } from 'color2k';

export default {
	components: { spectrumBlockVue },
	setup() {
		const data = reactive({
			color: '#8001DD',
			inputColor: '',
			filter: 'Filter',
			filterOptions: ['Filter', 'Saturation', 'Lightness', 'Diagonal', 'Opacity'],
			showMenu: false,
		});

		function generateSpectrum() {				// This function is necessary bacause if we type a color in the text input field we will get ann error everytime the we try to create a spectrum out of a value that is invalid 
			try {									// for exaple, if i start to enter the color #FF0000 i will at some point have a value of #FF wich is invalid. Therefore we created a button so that when we have entere our color only then we render the spectrum.
				parseToHsla(data.inputColor);
				data.color = data.inputColor;
				localStorage.setItem('savedColor', data.color);
			} catch (err) {
				alert(err);
			}
		}

		onBeforeMount(() => {	// Before we mount we check the localstorage if we have a saved color, if so we asign that value to our color variables
			const savedColor = localStorage.getItem('savedColor');
			if (savedColor) {
				data.color = savedColor;
				data.inputColor = savedColor;
			}
		});

		return {
			data,
			generateSpectrum,
		};
	},
};
</script>
