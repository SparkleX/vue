<template>
	<div v-if="this.visible" class="mask">
	</div>
	<div class="background">
		<div class="title">{{ title }}</div>
		<slot></slot>
		<div class="foot">
			<SuperButton value="OK" @press="onClickOk" type="emphasis"></SuperButton>
			<SuperButton value="Cancel" @press="onClickCancel"></SuperButton>
		</div>
	</div>
</template>
 
<style scoped>
.mask {
	background-color: grey;
	position: absolute;
	top: 0%;
	left: 0%;
	bottom: 0%;
	right: 0%;
	opacity: 0.5;
	z-index: 100;
}

.background {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid black;
	border-radius: 6px;
	background-color: white;
	opacity: 1;
	z-index: 101;
}

.title {
	padding: 0.75rem;
	border-bottom: 1px solid rgb(0, 112, 242)
}
.foot {
	border-top: 1px solid rgb(0, 112, 242);
	padding: 0.5rem;
	text-align: end;
}
</style>
<script setup>
import Button from '../control/SuperButton.vue'
</script>

<script>
export default {
	props: {
		title: { type: String, default: 'title' },
		visible: { type: Boolean, default: true },
	},
	emits: ['onPressOk','onPressCancel'],
	data() {
		return {

		};
	},
	methods: {
		onClickOk(event) {
			this.$emit("onPressOk", event);
		},
		onClickCancel(event) {
			this.$emit("onPressCancel", event);
		}
	}
}
</script>