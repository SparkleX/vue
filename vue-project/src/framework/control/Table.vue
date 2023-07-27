<template>
	<select :value="value" @input="onChange" class="super_select" >
		<option v-for="code in codes" :value="code.value">{{ code.desc }}</option>
	</select>
</template>
 
<style scoped>
.super_select {
  height: 32px;
  width: 100%;
  line-height: 3em;
}
option{
     padding:20px 0;
   }

</style>
<script setup>

</script>
<script>
export default {
	props: ['value','codes'],
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.value);
		}
	}
}
</script>