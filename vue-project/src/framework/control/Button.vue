<template>
	<button v-if="isIcon == false " v-show="visible" :class="style" @click="onClickButton">{{ value }}</button>
	<button v-if="isIcon == true" v-show="visible" class="button_icon" @click="onClickButton">{{ iconCode }}</button>
</template>
 
<style scoped>
.button {
	height: 2rem;
	border-radius: 5px;
	border: 0;
	margin-left: 0.25rem;
	margin-right: 0.25rem;
	min-width: 5rem;
}

.button_icon {
	height: 2rem;
	width: 2rem;
	border-radius: 5px;
	margin-left: 0.25rem;
	margin-right: 0.25rem;
	min-width: 2rem;
	background-color: transparent;
	border: 0;
	font-family: 'IconFont', Fallback, sans-serif;
}

.button_emphasis {
	background-color: cornflowerblue;
	color: white;
}
</style>
<script setup>
import Icon from "../icons/Icon"
</script>
<script>
export default {
	props: {
		value: { type: String },
		icon: { type: String },
		type: { type: String },
		visible: { type: Boolean, default: true },
	},
	emits: ['onClick'],
	methods: {
		onClickButton(event) {
			this.$emit("onClick", event);
		}
	},
	computed: {
		isIcon() {
			return this.value == null;
		},
		iconCode() {
			const code = Icon[this.icon];
			return code;
		},
		style() {
			if (this.type == "emphasis") {
				return "button button_emphasis";
			}
			return "button"
		}
	}
}
</script>