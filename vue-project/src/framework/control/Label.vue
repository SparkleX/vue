<template>
     <label class="super_label">{{value}}:</label>
</template>
  
<style scoped>
.super_label {
  height: 2rem;
  white-space:nowrap;
}
</style>
<script>
export default {
  props: ['value']  
}
</script>