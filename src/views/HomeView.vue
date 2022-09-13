<template>
	<search-cords-component></search-cords-component>
	<div v-if="!loading" class="row mb-3">
		<div class="col-4">
			<weather-info :weather="weather"></weather-info>
		</div>
		<div class="col-8">
			<weather-highlight :weather="weather"></weather-highlight>
		</div>
	</div>
	<div class="row">
		<h3>5 days forecast</h3>
		<div class="col-4">
			<weather-next-days-component></weather-next-days-component>
		</div>
		<div class="col-8"></div>
	</div>
</template>

<script>
	import WeatherInfo from "../components/weather/WeatherInfo.vue";
	import SearchCordsComponent from "@/components/SearchCords.vue";
	import WeatherNextDaysComponent from "@/components/weather/WeatherNextDays.vue";
	import WeatherHighlight from "@/components/weather/WeatherHighlight.vue";

	export default {
		name: "HomeView",
		components: {
			WeatherInfo,
			SearchCordsComponent,
			WeatherNextDaysComponent,
			WeatherHighlight,
		},
		data() {
			return {
				weather: {},
				loading: true,
			};
		},

		created() {
			this.getWeather();
		},

		methods: {
			async getWeather() {
				await this.$axios
					.get(`${this.$weatherApi}/weather?lat=39.7436200&lon=-8.8070500&units=metric&appid=${this.$apikey}`)
					.then(res => {
						this.weather = res.data;
					});

				this.loading = false;
			},
		},
	};
</script>
