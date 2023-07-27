<template>
    <input class="super_input" type="text" :value="value" @input="onChange" />
</template>
  
<style scoped>
.super_input {
  height: 2rem;
  width: 100%;
}
</style>



<script>
export default {
  props: ['value'],
  methods: {
    onChange(event) {
      this.$emit("update:value", event.target.value);
    }
  },  
}
</script>