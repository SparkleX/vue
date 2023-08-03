<template>
	<table class="table">
		<thead>
			<tr>
				<th v-for="col in this.columnHeader" class="th">{{ col }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row in this.value">
				<!--<button v-for="item in this.$slots.default()">
				
				{{ item.props.title }}
			</button>-->
				<td v-for="name in columns" class="td">
					<slot :name="name" :row="row"></slot>
				</td>
			</tr>
		</tbody>
	</table>
</template>
 
<style scoped>
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
  	border-collapse: collapse;
}
</style>
<script>
export default {
	props: {
		value: { type: Array },
		columns: { type: Array },
		columnHeader: { type: Array },
	}
}
</script>