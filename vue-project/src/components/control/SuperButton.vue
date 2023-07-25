<template>
    <button @click="onClick">{{value}}</button>
</template>
 
<style scoped>
.super_label {
 height: 32px;
}
</style>
<script setup>
//defineEmits(['aaa'])
</script>
<script>
export default {
 props: ['value'] ,
 methods: {
    onClick(event) {
      return false;
    }
 }
}
</script>