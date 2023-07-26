<template>
	{{ title }}<p></p>
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
<script>
export default {
	props: ['title', 'table']
}
</script>