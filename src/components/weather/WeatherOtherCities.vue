<template>
	<div v-for="weather in weatherCities" :key="weather.id" class="card-container city mb-3">
		<div class="row">
			<div class="col-lg-8 col-12"><span class="alternative-color">US</span><br />California<br />Sunny</div>
			<div class="col-lg-4 col-12"><span style="font-weight: bold; font-size: 1.6em">29°</span></div>
		</div>
	</div>
	{{ weatherCities }}
</template>

<script>
	export default {
		name: "WeatherOtherCities",
		data() {
			return {
				cities: ["New York", "London", "Hong Kong"],
				weatherCities: [],
			};
		},

		created() {
			this.getWeatherCities();
		},

		methods: {
			async getWeatherCities() {
				this.loading = true;

				this.cities.forEach(city => {
					this.$axios
						.get(`${this.$weatherApi}/weather?q=${city}&units=metric&appid=${this.$apikey}`)
						.then(res => {
							this.weatherCities.push(res);
						});
				});
			},
		},
	};
</script>

<style>
	.card-container.city {
		padding: 20px 30px;
	}
</style>
