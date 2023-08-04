<template>
	<div>
		{{ label }}
		<div class="toolsbar">
			<slot name="toolsbar"></slot>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th class="th">#</th>
					<th v-for="col in this.columnHeader" class="th">{{ col }}</th>
				</tr>
			</thead>
			<tbody>


				<tr v-for="row in this.value">
					<td class="td">
						<SuperCheck />
					</td>
					<!--<button v-for="item in this.$slots.default()">
				
				{{ item.props.title }}
			</button>-->
					<td v-for="name in columns" class="td">
						<slot :name="name" :row="row"></slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
 
<style scoped>
.toolsbar {
	text-align: end;
}

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
</style>
<script setup>
import SuperCheck from '../control/SuperCheck.vue'
</script>
<script>
export default {
	props: {
		value: { type: Array },
		columns: { type: Array },
		columnHeader: { type: Array },
		label: { type: String }
	}
}
</script>