<template>
	<Dialog v-if="visible == true" title="Error">
		<div class="message">{{ text }}</div>
		<template #buttons>
			<SuperButton value="OK" @press="onPressOk" type="emphasis"></SuperButton>
		</template>
	</Dialog>
</template>
 
<style scoped>
.message {
	padding: 1rem 1rem 1rem 1rem;
}
</style>
<script>
export default {
	props:{},
	data() {
		return {
			text: "-",
			visible: false
		}
	},
	methods: {
		show(message) {
			this.visible = true;
			this.text = message;
		},
		onPressOk(){
			this.visible = false;
		}
	}
}
</script>