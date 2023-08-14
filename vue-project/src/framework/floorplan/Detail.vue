<template>
	<div class="header">
		<div class="title">{{ title }}</div>
		<div class="toolsbar"><slot name="toolsbar"></slot></div>
	</div>
	<slot></slot>
	<div v-if="showFooter==true" class="footerbar">
		<slot name="footer"></slot>
	</div>
	<MessageBox ref="message"></MessageBox>
	<MessageToast ref="toast"/>
</template>
<style scoped>
.title {
	width: 50%;
	display:inline-block;
}
.header {
	padding: 1rem;
	font-size:x-large;
	font-weight: bold;
	background-color: white;
	border-bottom: 1px solid var(--color-blue);
}
.toolsbar {
	width: 50%;
	text-align: right;
	display:inline-block;
}
.footerbar {
	background-color:black;
	margin: 0.5rem;
	position: absolute;
	width: calc(100% - 1.5rem);
	border-radius: 6px;
	left: 0%;
	bottom: 0%;
	height: 2rem;
	padding: 8px 0;
	text-align: right;
	padding-right: 0.5rem;
}
</style>

<script>
export default {

	props: ['title', 'table', 'showFooter'],
	data: function () {
		return {
			chooseFromList: null,
			ui: {
				tab: "1",
				addMode: false,
				viewMode: true,
				updateMode: false
			},
			codes: {
			},
		}
	},
	methods: {
		onClickEdit(event) {
			alert('edit');
		}

	}
}
</script>