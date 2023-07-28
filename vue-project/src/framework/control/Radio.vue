<template>
	<label>
		<input type="radio" name="contact" :checked="checked_value" @input="onChange" :disabled="editable == false">
		{{ label }}
	</label>
</template>
 
<style scoped></style>

<script>
export default {
	props: {
		value: [Boolean, String],
		label: { type: String, default: "Radio" },
		valActive: {
			type: String
		},
		editable: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		checked_value() {
			return this.value == this.valActive
		}
	},
	methods: {
		onChange(event) {
			if (event.target.checked) {
				this.$emit("update:value", this.valActive);
			}
		}
	}
}
</script>