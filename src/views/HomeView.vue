<template>
	<div class="mb-4">
		<search-cords-component @citySearch="getWeather"></search-cords-component>
	</div>

	<div class="row gy-3">
		<!-- Main section -->
		<div v-if="!loading" class="col-lg-9 col-12">
			<div class="mb-3">
				<h4 class="mb-3">Current Weather</h4>
				<div class="row gy-3 mb-3">
					<div class="col-lg-4">
						<weather-info :weather="weather"></weather-info>
					</div>
					<div class="col-lg-8">
						<weather-next-days-component :weatherDays="weatherDays"></weather-next-days-component>
					</div>
				</div>
				<div>
					<h4 class="mb-3">Average Week Temperature</h4>
					<average-temperature :weatherDays="weatherDays"></average-temperature>
				</div>
			</div>
		</div>
		<!-- Lateral section -->
		<div v-if="!loading" class="col-lg-3 col-12">
			<div class="mb-3">
				<h4 class="mb-3">Chance of rain</h4>
				<weather-chance-rain></weather-chance-rain>
			</div>
			<div>
				<h4 class="mb-3">Other large cities</h4>
				<weather-other-cities></weather-other-cities>
			</div>
		</div>
	</div>
</template>

<script>
	import WeatherInfo from "../components/weather/WeatherInfo.vue";
	import SearchCordsComponent from "@/components/SearchCords.vue";
	import WeatherNextDaysComponent from "@/components/weather/WeatherNextDays.vue";
	import WeatherOtherCities from "@/components/weather/WeatherOtherCities.vue";
	import WeatherChanceRain from "@/components/weather/WeatherChanceRain.vue";
	import AverageTemperature from "@/components/weather/AverageTemperature.vue";

	export default {
		name: "HomeView",
		components: {
			WeatherInfo,
			SearchCordsComponent,
			WeatherNextDaysComponent,
			WeatherOtherCities,
			WeatherChanceRain,
			AverageTemperature,
		},
		data() {
			return {
				weather: {},
				weatherDays: [],
				chanceRain: [],
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
				//this.getChanceRain(city);
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

			async getChanceRain(city) {
				const currentDate = new Date();
				const startHour = Math.round(currentDate.getTime() / 1000);

				let auxHour = new Date(currentDate.setDate(currentDate.getDate() + 1));
				let endHour = Math.round(auxHour.getTime() / 1000);

				await this.$axios
					.get(
						`${this.$rainApi}lat=${city.latitude}&lng=${city.longitude}&params=precipitation&start=${startHour}&end=${endHour}`,
						{
							headers: {
								Authorization: this.$apiPresipitationkey,
							},
						}
					)
					.then(res => {
						this.chanceRain = res.hours;
						console.log(res);
						console.log(res.hours);
					});

				this.loading = false;
			},
		},
	};
</script>
