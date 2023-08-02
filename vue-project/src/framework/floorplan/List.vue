<template>
	<div class="header">{{ title }}</div>
	<div v-if="this.metadata" class="grid-container">
		<div v-for="item in this.metadata.order">
			{{ this.metadata.columns[item].name }}:<br> <input />
		</div>
		<div>Search:<br><Button value="Go"></button></div>
	</div>
	<div class="list" v-if="this.metadata">
		<div class="table_bar">
			<Button value="New" @onClick="onClickNew" type="emphasis"></Button>
		</div>
		<table>
			<tr>
				<th v-for="item in this.metadata.order">
					{{ this.metadata.columns[item].name }}
				</th>
				<th>
				</th>
			</tr>
			<tr v-for="d in this.data">
				<td v-for="item in this.metadata.order">
					{{ d[item] }}
				</td>
				<td> <Button icon="navigation-right-arrow" @onClick="onClickGoDetail($event, d.NodeId)"></button></td>
			</tr>
		</table>
	</div>
</template>
 
<style scoped>
.header {
	padding: 1rem;
	background-color: burlywood;
}

.list {
	padding: 1rem;
}

table {
	width: 100%;
	border-collapse: collapse;
	border: 2px solid;
}

th,
td {
	border: 1px solid;
}

.table_bar {
	padding-bottom: 1rem;
}

.item {
	grid-area: item;
	background-color: #EEEEEE;
}

.grid-container {
	display: grid;
	grid-template-columns: auto auto auto auto auto;
	background-color: beige;
	padding: 1rem;
}
</style>
<script setup>


import oBoAll from '../../api/BoAll'
import oMetadataApi from '../../api/Metadata'
import Button from '../../framework/control/Button.vue'
</script>

<script>
export default {
	props: ['title', 'table'],
	data() {
		return {
			metadata: null,
			loading: true,
			data: []
		};
	},
	methods: {
		onClickNew(evt) {
			this.$router.push({ path: `/${this.table}/Detail/new`});
		},
		onClickGoDetail(evt, id) {
			this.$router.push({ path: `/${this.table}/Detail/${id}`});
		}
	},
	async created() {
		try {
			this.metadata = await oMetadataApi.listViewMetadata(null, { table: this.table });
			this.data = await oBoAll.findAll(null, { table: this.table });
		} finally {
			this.loading = false;
		}
	},
}
</script>