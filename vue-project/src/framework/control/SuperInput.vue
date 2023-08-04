<template>
  <input v-if="editable == true" class="super_input" type="text" :value="value" @input="onChange" />
  <div v-if="editable == false" class="super_input_ro">{{ value }}</div>
</template>
  
<style scoped>
.super_input_ro {
  font-size: 1rem;
  height: 2rem;
}
.super_input {

  height: 2rem;
  width: 100%;
  padding: 0rem;
  border: 0px solid black;
  font-size: 1rem;
}
</style>



<script>
export default {
  props: {
    value: {type: String},
    editable:{ type: Boolean, default: true}
  },
  methods: {
    onChange(event) {
      this.$emit("update:value", event.target.value);
    }
  },
}
</script>