<template>
	<div class="header">{{ title }}
		<slot name="toolsbar"></slot>
	</div>
	<slot></slot>
</template>
<style scoped>
.header {
	padding: 1rem;
	background-color: burlywood;
}
</style>
<script setup>
import Button from '../../framework/control/Button.vue'
</script >
<script>
export default {
	props: ['title', 'table'],
	methods: {
		onClickEdit(event) {
			alert('edit');
		}

	}
}
</script>