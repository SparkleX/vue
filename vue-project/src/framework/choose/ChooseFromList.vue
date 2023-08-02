<template>
	<div v-if="this.visible" class="background">
		<div class="header">Choose {{ title }}</div>
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
				</tr>
			</table>
			<div class="table_bar">
				<Button value="Choose" @onClick="onClickChoose" type="emphasis"></Button>
				<Button value="Cancel" @onClick="onClickCancel" type="emphasis"></Button>
			</div>
		</div>
	</div>
</template>
 
<style scoped>
.background {
	background-color: white;
	margin: 0.5rem;
	position: absolute;
/*	width: calc(100% - 1.5rem);*/
	border-radius: 6px;
	border: 3px solid cornflowerblue;
	left: 10%;
	right: 10%;
	top: 10%;
	padding: 8px 0;
	text-align: left;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.header {
	padding: 1rem;
	background-color: cornflowerblue;
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
	padding-top: 1rem;
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
import Button from '../control/Button.vue'
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