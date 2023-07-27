<template>
	<button v-if="isIcon==false" class="button" @click="onClick">{{ value }}</button>
	<button v-if="isIcon==true" class="button_icon" @click="onClick">{{iconCode}}</button>
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
	methods: {
		onClick(event) {
			return false;
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