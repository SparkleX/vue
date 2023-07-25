<template>
	<input type="checkbox"  :checked="checked_value" @input="onChange" />
	<label for="vehicle1"> I have a bike</label>
</template>
 
<style scoped></style>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
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
		return props.value == props.valYes
	}
})
</script>
<script>
export default {
	props: ['value', 'valYes', 'valNo'] ,
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.checked ? this.valYes : this.valNo);
		}
	}
}
</script>