<template>
	<select :value="value" @input="onChange" class="super_select">
		<option value="1">Volvo</option>
		<option value="2">Saab</option>
		<option value="3">Mercedes</option>
		<option value="4">Audi</option>
	</select>
</template>
 
<style scoped>
.super_select {
  height: 32px;
  width: 100%;
}
</style>
<script setup>

</script>
<script>
export default {
	props: ['value'],
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.value);
		}
	}
}
</script>