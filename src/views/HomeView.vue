<template>
	<div class="mb-4">
		<search-cords-component @citySearch="getWeather"></search-cords-component>
	</div>
	<div v-if="!loading" class="row mb-3">
		<div class="col-4">
			<weather-info :weather="weather"></weather-info>
		</div>
		<div class="col-8">
			<weather-highlight :weather="weather"></weather-highlight>
		</div>
	</div>
	<div v-if="!loading" class="row">
		<h3>5 days forecast</h3>
		<div class="col-4">
			<weather-next-days-component :weatherDays="weatherDays"></weather-next-days-component>
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
				weatherDays: [],
				loading: true,
				//Cords Leiria
				city: { latitude: 39.74362, longitude: -8.80705 },
			};
		},

		created() {
			this.getWeather(this.city);
		},

		methods: {
			async getWeather(city) {
				this.loading = true;
				this.city = city;

				await this.$axios
					.get(
						`${this.$weatherApi}/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${this.$apikey}`
					)
					.then(res => {
						this.weather = res.data;
					});

				this.getWeatherNextDays(city);
			},

			async getWeatherNextDays(city) {
				let auxWeather = [];
				//Empty the array
				this.weatherDays = [];

				await this.$axios
					.get(
						`${this.$weatherApi}forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${this.$apikey}`
					)
					.then(res => {
						auxWeather = res.data.list;
					});

				let auxDate = "";
				const currenDate = new Date().toLocaleString("en-us", {
					day: "numeric",
					month: "long",
					year: "2-digit",
				});
				auxWeather.forEach(weather => {
					let weatherDate = new Date(weather.dt * 1000).toLocaleString("en-us", {
						day: "numeric",
						month: "long",
						year: "2-digit",
					});

					if (auxDate != weatherDate && weatherDate != currenDate) {
						this.weatherDays.push(weather);
					}

					auxDate = weatherDate;
				});

				this.loading = false;
			},
		},
	};
</script>
