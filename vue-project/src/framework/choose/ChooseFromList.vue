<template>
	<Dialog v-if="this.visible" title="Choose" @onPressOk="onClickChoose" @onPressCancel="onClickCancel">
<!--	<div v-if="this.visible" class="background">
		<div class="header">Choose {{ title }}</div>-->
		<div class="list" v-if="this.metadata">
			<div class="table_bar">
				<SuperButton value="New" @press="onClickNew" type="emphasis"></SuperButton>
			</div>
			<table>
				<tr class="table_row" >
					<th v-for="item in this.metadata.order" class="table_cell">
						{{ this.metadata.columns[item].name }}
					</th>
				</tr>
				<tr v-for="d in this.data" @click="onClickRow($event, d)" class="table_row">
					<td v-for="item in this.metadata.order" class="table_cell">
						{{ d[item] }}
					</td>
				</tr>
			</table>

		</div>
<!--	</div>-->
</Dialog>
</template>
 
<style scoped>
.list {
	padding: 0.5rem;
}

table {
	width: 100%;
	border-collapse: collapse;
	border: 1px solid;
}

.table_row {
	line-height: 2rem;
}
.table_cell {
	padding-left: 1rem;
	padding-right: 1rem;
}

th,
td {
	border: 1px solid;
}

.table_bar {
	padding-top: 1rem;
	padding-bottom: 1rem;
	text-align: end;
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
import Button from '../control/SuperButton.vue'
import Dialog from '../dialog/Dialog.vue'
</script>

<script>
export default {
	props: ['title', 'table','visible'],
	emits: ['onChoose','onCancel'],
	data() {
		return {
			metadata: null,
			loading: true,
			data: []
		};
	},
	methods: {
		onClickRow(event, row) {
			//alert(row.NodeId);
			this.$emit("onChoose", row.NodeId);

		},
		onClickChoose(event) {
			this.$emit("onChoose", event);
		},
		onClickCancel(event) {
			this.$emit("onCancel", event);
		}
	},
	async created() {
		try {
			const table = this.table;
			this.metadata = await oMetadataApi.choose(null, { table: table });
			this.data = await oBoAll.findAll(null, { table: table });
		} finally {
			this.loading = false;
		}
	},
}
</script>