<template>
	<navbar></navbar>
	<router-view />
</template>

<script>
	import Navbar from "./components/NavbarComponent.vue";

	export default {
		components: {
			Navbar,
		},
		data() {
			return {};
		},
		methods: {},

		computed: {},
	};
</script>

<style>
	#app {
		background-color: #003b59;
		min-height: 100vh;
		color: white;
		overflow-x: hidden;
	}
</style>
