<template>
  <input v-if="editable == true" class="super_input" type="text" :value="value" @input="onChange" />
  <div v-if="editable == false">{{ value }}</div>
</template>
  
<style scoped>
.super_input {
  height: 2rem;
  width: 100%;
  padding: 0rem;
  border: 0px solid black;

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