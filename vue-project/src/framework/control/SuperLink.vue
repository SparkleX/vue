<template>
	<input v-if="editable == true" class="super_input" type="text" :value="value" @input="onChange" />
	<div v-if="editable == false">{{ value }}</div>
	<button @click="onClickButton">TESt</button>
	<component :is="chooseFromList" @onCancel="onChooseCancel" :table="linkTo" :visible="chooseFromListVisible"/>

</template>
  
<style scoped>
.super_input {
	height: 2rem;
	width: 100%;
}
</style>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue'
import openChooseFromList from '../../choose/ChooseFromList'

</script>

<script>
export default {
	props: ['value', 'linkTo', 'editable'],
	data: function () {
		return {
			chooseFromList: null,
			chooseFromListVisible : false
		}
	},
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.value);
		},
		onClickButton(event) {
			this.chooseFromList = markRaw(openChooseFromList(this.linkTo));
			this.chooseFromListVisible = true
		},
		onChooseCancel() {
			this.chooseFromListVisible = false
		},
		onChoose() {
			this.chooseFromListVisible = false
		}
	},
}
</script>