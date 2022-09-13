<template>
	<div class="row">
		<div class="col-12">
			<weather-info></weather-info>
		</div>
	</div>
</template>

<script>
	import WeatherInfo from "../components/WeatherInfo.vue";

	export default {
		name: "HomeView",
		components: {
			WeatherInfo,
		},
	};
</script>
