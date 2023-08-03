<template>

	<div class="control">
		<input v-if="editable == true" class="super_link" type="text" :value="value" @input="onChange" />
		<!--<div v-if="editable == false">{{ value }}</div>-->

		<div class="btn" @click="onClickButton">&#xe1f3</div>
	</div>
		<component :is="chooseFromList" @onChoose="onPressChoose" @onCancel="onChooseCancel" :table="linkTo" :visible="chooseFromListVisible"/>

</template>
  
<style scoped>
.control {
	border: 1px solid black;
	outline: none;
}
.control:focus-within{
	outline:auto;
	outline-color: rgb(0, 112, 242)
}
.super_link {
	border: 0px;
	height: 2rem;
	width: calc(100% - 2.35rem);
}
.super_link:focus{
    outline: none;
}
.btn {
	/*background-color: aqua;*/
	width:1.9rem;
	height: 1.8rem;
	border: 0px solid rgb(0, 112, 242);
	display: inline-block;
	vertical-align:middle;
	text-align: center;
	line-height: 1.8rem;
	color: rgb(0, 112, 242);
	font-family: 'IconFont', Fallback, sans-serif;
	cursor: pointer;
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
		onPressChoose(nodeId) {
			this.$emit("update:value", nodeId);
			this.chooseFromListVisible = false;
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