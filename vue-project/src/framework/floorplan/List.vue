<template>
	<div class="header">{{ title }}</div>
	<div v-if="this.metadata" class="grid-container">
		<div v-for="item in this.metadata.order" class="filter">
			{{ this.metadata.columns[item].name }}:<br>
			<SuperInput />
		</div>
		<div class="filter">Search:<br><SuperButton value="Go"></SuperButton></div>
	</div>
	<div class="list" v-if="this.metadata">
		<div class="table_bar">
			<SuperButton value="New" @press="onClickNew" type="emphasis"></SuperButton>
		</div>
		<table class="table">
			<tr class="tr">
				<th v-for="item in this.metadata.order" class="th">
					{{ this.metadata.columns[item].name }}
				</th>
				<th class="th">
				</th>
			</tr>
			<tr v-for="d in this.data" class="tr">
				<td v-for="item in this.metadata.order" class="td">
					{{ d[item] }}
				</td>
				<td class="td"> <SuperButton icon="navigation-right-arrow" @press="onClickGoDetail($event, d.NodeId)"></SuperButton></td>
			</tr>
		</table>
	</div>
</template>
 
<style scoped>
.filter {
	padding: 0.5rem;
}
.header {
	padding: 1rem;
	background-color: burlywood;
}

.list {
	padding: 1rem;
}
/*
table {
	width: 100%;
	border-collapse: collapse;
	border: 2px solid;
}

th,
td {
	border: 1px solid;
}*/

.th {
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
}

.td {
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
}

.table {
	width: 100%;
	border-collapse: collapse;
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
import SuperInput from '../control/SuperInput.vue'

import oBoAll from '../../api/BoAll'
import oMetadataApi from '../../api/Metadata'
import SuperButton from '../../framework/control/SuperButton.vue'
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