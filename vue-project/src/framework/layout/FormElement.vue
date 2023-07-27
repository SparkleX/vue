<template>
	<div class="form_element">
	<div class="label">
		<Label :value="label"></Label>
	</div>
	<div class="input">
		<slot>

		</slot>
	</div>
</div>
</template>


<style scoped>
.form_element {
	margin-bottom: 0.5rem;
}
.label {
	display:inline-block;
	width: 30%;
}
.input {
	display:inline-block;
	width: calc(70% - 1rem);
}
.input>>>.super_input {
	width: calc(100% - 6px)
}
@media only screen and (max-width:500px) {
	[class*="label"] {
		width: 100%
	}
	[class*="input"] {
		width: 100%
	}
}
</style>
<script setup>
import Label from '../../framework/control/Label.vue'
</script>
<script>
export default {
	props: ['label'],

}
</script>