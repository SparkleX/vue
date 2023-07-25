<template>
     <label class="super_label">{{value}}</label>
</template>
  
<style scoped>
.super_label {
  height: 32px;
}
</style>
<script>
export default {
  props: ['value']  
}
</script>