<template>
	<div class="card-container info">
		<div class="card-header info d-flex justify-content-between">
			<div>{{ getCurrentDay }}</div>
			<div>{{ getCurrentHour }}</div>
		</div>
		<div class="card-content info">
			<h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
			<div class="row align-items-center">
				<div class="col-6">
					<h1>{{ Math.round(weather.main.temp) }}°</h1>
				</div>
				<div class="col-6 justify-content-center">
					<img
						class="img-fluid"
						:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
						alt="weather-icon"
					/>
				</div>
			</div>

			<span class="alternative-color">Real feel:</span>{{ Math.round(weather.main.feels_like) }}°
			<br />
			<span class="alternative-color">Wind N-E:</span>{{ weather.wind.speed }} m/s
			<br />
			<div class="d-flex justify-content-between">
				<div><span class="alternative-color">Preasure:</span>{{ weather.main.pressure }} hPa</div>
				<div><span class="alternative-color">Sunrise:</span>{{ formatHour(weather.sys.sunrise * 1000) }}</div>
			</div>
			<div class="d-flex justify-content-between">
				<div><span class="alternative-color">Humidity:</span>{{ weather.main.humidity }} %</div>
				<div><span class="alternative-color">Sunset:</span>{{ formatHour(weather.sys.sunset * 1000) }}</div>
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

		methods: {
			formatHour(hour) {
				let date = new Date(hour);
				let hours = date.getHours() - 1 + this.weather.timezone / 3600;
				hours = hours < 0 ? Math.abs(hours) + 12 : hours;
				let minutes = date.getMinutes();

				return `${hours < 9 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
			},
		},

		computed: {
			getCurrentHour() {
				return new Date().toLocaleString("en-us", { hour: "2-digit", minute: "2-digit" });
			},

			getCurrentDay() {
				return new Date().toLocaleString("en-us", { weekday: "long" });
			},
		},
	};
</script>

<style></style>
