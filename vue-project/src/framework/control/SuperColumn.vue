<template>
	This is a Column
	<div v-for="row in this.value">
		{{row.NodeId}}
	</div>
</template>
 
<style scoped></style>
<script>
export default {
	props: {
		value: { type: Array }
	}
}
</script>