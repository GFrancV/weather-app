<template>
	<div v-if="!loading" class="card-background">
		<div class="card-container">
			<table>
				<tbody>
					<tr v-for="weather in weatherDays" :key="weather.dt">
						<td>
							<img
								:src="
									'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'
								"
								alt="weather-icon"
							/>
						</td>
						<td>
							<span class="fw-bold fs-4"> {{ getTemperature(weather.main.temp_max) }}°/</span>
							<span class="fs-5">{{ getTemperature(weather.main.temp_min) }}°</span>
						</td>
						<td>
							<span class="gray">{{ getDate(weather.dt * 1000) }}</span>
						</td>
						<td>
							<span class="gray">{{ getDay(weather.dt * 1000) }}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	{{ weather }}
</template>

<script>
	export default {
		name: "WeatherNextDays",
		data() {
			return {
				weatherDays: [],
				loading: true,
			};
		},

		created() {
			this.getWeatherNextDays();
		},

		methods: {
			async getWeatherNextDays() {
				let auxWeather = [];

				await this.$axios
					.get(`${this.$weatherApi}forecast?lat=39.7436200&lon=-8.8070500&units=metric&appid=${this.$apikey}`)
					.then(res => {
						auxWeather = res.data.list;
						this.loading = false;
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
						console.log();
					}

					auxDate = weatherDate;
				});
			},

			getTemperature(temp) {
				return Math.round(temp);
			},

			getDate(date) {
				return new Date(date).toLocaleString("en-us", {
					month: "short",
					day: "numeric",
				});
			},

			getDay(date) {
				return new Date(date).toLocaleString("en-us", {
					weekday: "short",
				});
			},
		},
	};
</script>

<style>
	table {
		width: 100%;
	}
</style>
