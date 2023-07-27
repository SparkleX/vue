<template>	
	<label>
		<input type="radio" name="contact" :checked="checked_value" @input="onChange">
		{{label}}
	</label>
</template>
 
<style scoped></style>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
	value: [Boolean, String],
	label: { type:String, default:"RadioButton" },
	valActive: {
		type: String
	}
});

const checked_value = computed({
	get() {
		return props.value == props.valActive
	}
})
</script>
<script>
export default {
	props: ['value', 'valYes', 'valNo','label'] ,
	methods: {
		onChange(event) {
			if (event.target.checked) {
				this.$emit("update:value", this.valActive);
			}
		}
	}
}
</script>