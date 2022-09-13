<template>
	<search-cords-component></search-cords-component>
	<div class="row">
		<div class="col-12">
			<weather-info></weather-info>
		</div>
	</div>
</template>

<script>
	import WeatherInfo from "../components/WeatherInfoComponent.vue";
	import SearchCordsComponent from "@/components/SearchCordsComponent.vue";

	export default {
		name: "HomeView",
		components: {
			WeatherInfo,
			SearchCordsComponent,
		},
	};
</script>
