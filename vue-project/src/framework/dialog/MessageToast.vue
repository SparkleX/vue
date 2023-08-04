<template>
	<div v-if="visible == true" class="toast">{{ text }}</div>
</template>
 
<style scoped>
.toast {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: black;
	background-color: white;
	width: 20rem;
	height: 2rem;
	border-radius: 6px;
	border: 1px solid rgb(0, 112, 242);
	padding-top: 0.5rem;
	padding-right: 0.5rem;
	text-align: center;
}
</style>
<script setup>
</script>

<script>
export default {
	props: {
	},
	data () {
		return {
			text: "-",
			visible: false
		}
	},
	methods: {
		show: function(message) {
			this.text = message;
			this.visible = true;
			setTimeout(() => {
          		this.visible = false;
        	}, 1000);
		}
	}
}
</script>