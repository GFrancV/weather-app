<template>
	<div class="card-container info">
		<div class="card-header info d-flex justify-content-between">
			<div>Monday</div>
			<div>11:45 PM</div>
		</div>
		<div class="card-content info">
			<div class="row align-items-center">
				<div class="col-6">
					<h1>{{ Math.round(weather.main.temp) }}°</h1>
				</div>
				<div class="col-6">
					<img
						class="img-fluid"
						:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
						alt="weather-icon"
					/>
				</div>
			</div>

			<span class="alternative-color">Real feel:</span>20
			<br />
			<span class="alternative-color">Wind N-E:</span>20 m/s
			<br />
			<div class="d-flex justify-content-between">
				<div><span class="alternative-color">Preasure:</span>10000 MB</div>
				<div><span class="alternative-color">Sunrise:</span>14:00 AM</div>
			</div>
			<div class="d-flex justify-content-between">
				<div><span class="alternative-color">Humidity:</span>10000 %</div>
				<div><span class="alternative-color">Sunset:</span>18:00 AM</div>
			</div>
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

		methods: {},

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
