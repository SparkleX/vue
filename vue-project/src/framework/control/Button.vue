<template>
	<button v-if="isIcon==false" class="button" @click="onClickButton">{{ value }}</button>
	<button v-if="isIcon==true" class="button_icon" @click="onClickButton">{{iconCode}}</button>
</template>
 
<style scoped>
.button {
	height: 2rem;
}

.button_icon {
	height: 2rem;
	width: 2rem;
	font-family: 'IconFont', Fallback, sans-serif;
}
</style>
<script setup>
import Icon from "../icons/Icon"
</script>
<script>
export default {
	props: ['value', 'icon'],
	emits: ['onClick'],
	methods: {
		onClickButton(event) {
			this.$emit("onClick", event);
		}
	},
	computed: {
		isIcon() {
			return this.value==null;
		},
		iconCode() {
			const code = Icon[this.icon];
			return code;
		}
	}
}
</script>