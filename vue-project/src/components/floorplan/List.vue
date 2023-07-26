<template>
	<div class="header">{{ title }}</div>
	<div v-if="this.metadata" class="grid-container">
		<div v-for="item in this.metadata.order">
			{{ this.metadata.columns[item].name }}:<br> <input />
		</div>
		<div>Search:<br><button>Go</button></div>
	</div>
	<div class="list">
		<div class="table_bar">
			<button>New</button>
		</div>
		<table>
			<tr>
				<td>
					Card Code
				</td>
				<td>
					Card Name
				</td>
				<td></td>
			</tr>
			<tr>
				<td>
					C001
				</td>
				<td>
					Microsoft
				</td>
				<td> <button>New</button></td>

			</tr>
			<tr>
				<td>
					C002
				</td>
				<td>
					IBM
				</td>
				<td> <button>New</button> </td>

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
th, td {
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
	background-color:beige;
	padding: 1rem;
}
</style>
<script setup>


import oMetadataApi from '../../api/Metadata'

</script>

<script>
export default {
	props: ['title', 'table'],
	data() {
		return {
			metadata: null,
			loading: true,
		};
	},
	async created() {
		try {
			this.metadata = await oMetadataApi.listViewMetadata();
		} finally {
			this.loading = false;
		}
	},
}
</script>