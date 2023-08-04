<template>
	<div class="control">
		<input v-if="editable == true" class="super_input" type="text" :value="value" @input="onChange" />
		<div v-if="editable == false" class="super_input_ro">{{ value }}</div>
	</div>
</template>
  
<style scoped>
.control {
	background-color: rgb(240,240,240);
	border-bottom: 1px solid black;

}
.super_input_ro {
  font-size: 1rem;
  height: 2rem;
  background: transparent;

}
.super_input {

  height: 2rem;
  width: 100%;
  padding: 0rem;
  border: 0px solid black;
  font-size: 1rem;
  background: transparent;
}
</style>



<script>
export default {
  props: {
    value: {type: [String,Number]},
    editable:{ type: Boolean, default: true}
  },
  methods: {
    onChange(event) {
      this.$emit("update:value", event.target.value);
    }
  },
}
</script>