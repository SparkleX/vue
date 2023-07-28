<template>
	<label>
		<input type="checkbox" :checked="checked_value" @input="onChange" :disabled="editable == false" />
		{{ label }}
	</label>
</template>
 
<style scoped>
</style>
<script setup>
import { defineProps, computed } from 'vue'
/*const props = defineProps({
	value: [Boolean, String],
	valYes: {
		type: String,
		default: 'Y'
	},
	valNo: {
		type: String,
		default: 'N'
	}
});

const checked_value = computed({
	get() {
		
	}
})*/
</script>
<script>
export default {
	props: {
		value: { type: String },
		valYes: { type: String, default: 'Y' },
		valNo: { type: String, default: 'N' },
		label: { type: String, default: "CheckBox" },
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