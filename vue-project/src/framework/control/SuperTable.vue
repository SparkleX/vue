<template>
	<table>
		<tr>
			<th v-for="col in this.columnHeader">{{col}}</th>
		</tr>		
		<tr v-for="row in this.value">
			<!--<button v-for="item in this.$slots.default()">
				
				{{ item.props.title }}
			</button>-->
			<td v-for="name in columns">
				<slot :name="name" :row="row"></slot>
			</td>
		</tr>
	</table>
</template>
 
<style scoped></style>
<script>
export default {
	props: {
		value: { type: Array },
		columns: { type: Array },
		columnHeader: { type: Array },
	}
}
</script>