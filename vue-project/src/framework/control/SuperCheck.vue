<template>
	<label>
		<input type="checkbox" :checked="checked_value" @input="onChange" :disabled="editable == false" class="check"/>
		{{ label }}
	</label>
</template>
 
<style scoped>
.check{
	background-color: aqua;
}
</style>
<script>
export default {
	props: {
		value: { type: [String, Boolean] },
		valYes: { type: String, default: 'Y' },
		valNo: { type: String, default: 'N' },
		label: { type: String, default: "" },
		editable: { type: Boolean, default: true },
		enable: { type: Boolean, default: true },
	},
	computed: {
		checked_value() {
			return this.value == this.valYes;
		}
	},
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.checked ? this.valYes : this.valNo);
		}
	}
}
</script>