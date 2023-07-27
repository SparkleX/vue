<template>
    <div v-if="value==activeValue" class="tabcontent">
        <slot></slot>
    </div>
</template>
 
<style scoped>
.tabcontent {
/*   display: none;*/
    padding: 6px 12px;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
}
</style>
<script setup>

</script>
<script>
export default {
    props: {
		title: { type: String},
		value: {type: String},
		activeValue:{type: String},
	}
}
</script>