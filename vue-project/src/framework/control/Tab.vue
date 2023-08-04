<template>
	<div class="tab">
		<button v-for="item in this.$slots.default()" class="tablinks" @click="openTab($event, item.props.activeValue)">
			{{ item.props.title }}
		</button>
	</div>
	<slot>
	</slot>
</template>
 
<style scoped>
/* Style the tab */
.tab {
	overflow: hidden;
	border-bottom: 1px solid #ccc;
	background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
	background-color: inherit;
	float: left;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	transition: 0.3s;
	font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
	background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
	background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
	display: none;
	padding: 6px 12px;
	-webkit-animation: fadeEffect 1s;
	animation: fadeEffect 1s;
}

/* Fade in tabs */
@-webkit-keyframes fadeEffect {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes fadeEffect {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>
<script setup>
import { ref, h } from 'vue'
</script>
<script>
export default {
	props: ['value'],
	methods: {
		openTab(evt, tabName) {
			this.$emit("update:value", tabName);
		}
	},
	async created() {
		//this.openTab(null,'General');
	},
}
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs_fade
//https://snipcart.com/blog/vue-render-functions#Definition
</script>
