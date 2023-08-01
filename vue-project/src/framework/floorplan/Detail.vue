<template>
	<div class="header">
		<div class="title">{{ title }}</div>
		<div class="toolsbar"><slot name="toolsbar"></slot></div>
	</div>
	<slot></slot>
	<div v-if="showFooter==true" class="footerbar">
		<slot name="footer"></slot>
	</div>
</template>
<style scoped>
.title {
	width: 50%;
	display:inline-block;
}
.header {
	padding: 1rem;
	background-color: burlywood;
}
.toolsbar {
	width: 50%;
	text-align: right;
	display:inline-block;

}
.footerbar {
	background-color:black;
	margin: 0.5rem;
	position: absolute;
	width: calc(100% - 1.5rem);
	border-radius: 6px;
	left: 0%;
	bottom: 0%;
	height: 2rem;
	padding: 8px 0;
	text-align: right;
	padding-right: 0.5rem;
}
</style>
<script setup>
import Button from '../../framework/control/Button.vue'
</script>
<script>
export default {
	props: ['title', 'table', 'showFooter'],
	methods: {
		onClickEdit(event) {
			alert('edit');
		}

	}
}
</script>