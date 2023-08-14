<template>
	<div class="control">
		<input v-if="editable == true" class="super_link" type="text" :value="value" @input="onChange" />
		<div v-if="editable == true" class="btn" @click="onClickButton">&#xe1f3</div>
		<a v-if="editable == false" href="http://"  class="readonly">{{ value }}</a>
	</div>
	<component :is="chooseFromList" @onChoose="onPressChoose" @onCancel="onChooseCancel" :table="linkTo" :visible="chooseFromListVisible"/>
</template>
  
<style scoped>
.readonly {
	height: 2rem;
	font-size: 1rem;
}
.control {
	background-color: rgb(240,240,240);
	border-bottom: 1px solid black;
	outline: none;
}
.control:focus-within{
	outline:auto;
	outline-color: var(--color-blue)
}
.super_link {
	border: 0px;
	height: 2rem;
	font-size: 1rem;
	width: calc(100% - 2.35rem);
	background: transparent;
}

.super_link:focus{
    outline: none;
}
.btn {
	/*background-color: aqua;*/
	width:1.9rem;
	height: 1.8rem;
	border: 0px solid var(--color-blue);
	display: inline-block;
	vertical-align:middle;
	text-align: center;
	line-height: 1.8rem;
	color: var(--color-blue);
	font-family: 'IconFont', Fallback, sans-serif;
	cursor: pointer;
}
</style>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue'
import openChooseFromList from '../choose/ChooseFromList'

</script>

<script>
export default {
	props: {
		value: {type: String},
		linkTo: {type: String},
		editable:{type: Boolean, default: true}
	},
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