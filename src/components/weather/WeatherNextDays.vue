<template>
	<div class="card-background">
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
</template>

<script>
	export default {
		name: "WeatherNextDays",
		props: {
			weatherDays: Array,
		},
		data() {
			return {};
		},

		methods: {
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

		computed: {
			normalizedSize() {
				return this.city;
			},
		},
	};
</script>

<style>
	table {
		width: 100%;
	}
</style>
