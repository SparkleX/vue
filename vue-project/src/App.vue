<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="grid-container">
		<div class="head">Business One</div>
		<div class="menu">
			<p></p>
			<RouterLink to="/CARD/List">Business Partner</RouterLink>&nbsp;
			<RouterLink to="/CARD/Detail">[+]</RouterLink>
			<p></p>
			<RouterLink to="/ITEM/List">Item Master Data</RouterLink>&nbsp;
			<RouterLink to="/ITEM/Detail">[+]</RouterLink>
			<p></p>
			<RouterLink to="/ORDR/List">Sales Order</RouterLink>&nbsp;
			<RouterLink to="/ORDR/Detail">[+]</RouterLink>
			<p></p>
		</div>
		<div class="body">
			<RouterView />
		</div>
	</div>
</template>

  
<style scoped>
.head {
	grid-area: header;
	background-color: black;
	height: 3rem;
	color: aliceblue;
	font-size: 2rem;

}

.menu {
	grid-area: menu;
	background-color: #EEEEEE;
	height: calc(100vh - 3rem);
	color: aliceblue;
	font-size: 1rem;
}

a:link {
	text-decoration: none;
}

a:visited {
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:active {
	text-decoration: underline;
}

.body {
	background-color: white;
	grid-area: main;
	width: 100%;
}

.grid-container {
	display: grid;
	height: 100%;
	grid-template-areas:
		'header header header'
		'menu main main';
	grid-template-columns: 15rem calc(100vh - 3rem);;
}</style>