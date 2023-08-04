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
				<th class="th_button">
				</th>
			</tr>
			<tr v-for="d in this.data" class="tr">
				<td v-for="item in this.metadata.order" class="td">
					{{ d[item] }}
				</td>
				<td class="td_button"> 
					<SuperButton icon="navigation-right-arrow" @press="onClickGoDetail($event, d.NodeId)"></SuperButton>
				</td>
			</tr>
		</table>
	</div>
</template>
 
<style scoped>
.filter {
	padding: 0.5rem;
}
.header {
	font-size:x-large;
	font-weight: bold;
	padding: 1rem;
	background-color: white;
	border-bottom: 1px solid rgb(0, 112, 242);
}

.list {
	padding: 1rem;
}

.th {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
	text-align:start;
}
.th_button {
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
	text-align:start;

}
.td {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
}
.td_button {
	border: 1px solid lightgray;
	border-collapse: collapse;
	line-height: 2rem;
	width: 0px;
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
	background-color: white;
	padding: 1rem;
	border-bottom: 1px solid rgb(0, 112, 242);
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