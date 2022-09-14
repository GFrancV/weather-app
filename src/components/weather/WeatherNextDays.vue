<template>
	<div style="height: 100%" class="row row-cols-lg-6 row-cols-3 gy-3">
		<div v-for="weather in weatherDays" :key="weather.dt" class="col">
			<div class="card-container">
				<div class="card-header">
					<div class="d-flex justify-content-center">
						<h6 class="gray">{{ getDay(weather.dt * 1000) }}</h6>
					</div>
				</div>
				<div class="line-gray"></div>
				<div class="card-content">
					<img
						class="img-fluid"
						:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
						alt="weather-icon"
					/>
					<div class="d-flex justify-content-center">
						<span class="fw-bold fs-4"> {{ getTemperature(weather.main.temp_max) }}°</span>
					</div>
				</div>
			</div>
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

<style></style>
