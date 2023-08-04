<template>
123
</template>
 

<script>
export default {
	props: {
		title: { type: String, default: 'title' },
		visible: { type: Boolean, default: true },
	},
	emits: ['onPressOk', 'onPressCancel'],
	methods: {
		onClickOk: function(event) {
			this.$emit("onPressOk", event);
		},
		onClickCancel: function(event) {
			this.$emit("onPressCancel", event);
		}
	}
}
</script>