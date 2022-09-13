<template>
	<div class="card-background">
		<div class="card-container">
			<img
				:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
				alt="weather-icon"
			/>
			<h1>{{ Math.round(weather.main.temp) }}°c</h1>
			<div class="d-flex">
				<img
					:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
					alt="weather-icon"
					width="34"
					class="me-2"
				/>
				<h4>{{ weather.weather[0].description }}</h4>
			</div>
			<div class="line-divider"></div>
			<i class="bi bi-geo-alt-fill"></i>
			{{ weather.name }}, {{ weather.sys.country }}
			<br />
			<i class="bi bi-calendar3"></i>
			{{ getCurrentDate }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "WeatherInfo",
		props: {
			weather: Object,
		},
		data() {
			return {};
		},

		methods: {
			formatSunrise(sunrise) {
				let date = new Date(sunrise);
				let hours = date.getHours();
				let minutes = date.getMinutes();

				return `${hours < 9 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
			},
		},

		computed: {
			getCurrentDate() {
				return new Date().toLocaleString("en-us", {
					day: "numeric",
					month: "short",
					year: "numeric",
					hour: "2-digit",
					minute: "2-digit",
				});
			},
		},
	};
</script>

<style></style>
