<template>
	{{ title }}<p></p>
	<div v-if="this.metadata">
		<div v-for="item in this.metadata.order">
			{{ this.metadata.columns[item].name }}<br> <input/>
		</div>
		<div><button>Search</button></div>
	</div>
	<table>
		<tr>
			<td>
				Card Code
			</td>
			<td>
				Card Name
			</td>
		</tr>
		<tr>
			<td>
				C001
			</td>
			<td>
				Microsoft
			</td>
		</tr>
		<tr>
			<td>
				C002
			</td>
			<td>
				IBM
			</td>
		</tr>
	</table>
</template>
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