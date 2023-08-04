<template>
	<div class="select">
		<select v-if="editable == true" :value="value" @input="onChange" class="super_select" :disabled="enable == false">
			<option v-for="code in codes" :value="code.value">{{ code.desc }}</option>
		</select>
		<div v-if="editable==false" class="readonly">{{ desc }}</div>
	</div>
</template>
 
<style scoped>
.select {
	display:inline-block;
	width: 100%;
	height: 2rem;
}
.readonly {
}
.super_select {
	height: 2rem;
	width: 100%;
	line-height: 2rem;
}

option {
	padding: 20px 0;
}
</style>
<script setup>

</script>
<script>
export default {
	props: {
		value: { type: String },
		codes: { type: Array },
		editable: { type: Boolean, default: true },
		enable: { type: Boolean, default: true }
	},
	methods: {
		onChange(event) {
			this.$emit("update:value", event.target.value);
		}
	},
	computed: {
		desc() {
			for (let v of this.codes) {
				if (v.value == this.value) {
					return v.desc;
				}
			}
			return "-";
		},
	}
}
</script>