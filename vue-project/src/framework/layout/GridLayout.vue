<template>
	<div class="col-6">
		<slot></slot>
	</div>
</template>
<style scoped>
.col-6 {
	display: inline-block;
	width: calc(50% );
	vertical-align: top
/*	margin-left: 1rem;
	margin-right: 1rem;*/
}

@media only screen and (max-width:500px) {
	[class*="col-"] {
		width: calc(100%)
	}
}
</style>
<script>
export default {

}
</script>