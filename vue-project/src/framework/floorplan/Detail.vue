<template>
    <div class="header">{{ title }}</div>

    <slot></slot>

</template>
<style scoped>
.header {
	padding: 1rem;
	background-color: burlywood;
}
</style>
<script>
export default {
	props: ['title', 'table']/*,
	data() {
		return {
			metadata: null,
			loading: true,
			data: []
		};
	},
	async created() {
		try {
			this.metadata = await oMetadataApi.listViewMetadata(null, {table:this.table});
			this.data = await oMetadataApi.listViewData(null, {table:this.table});
		} finally {
			this.loading = false;
		}
	},*/
}
</script>