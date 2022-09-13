<template>
	<div v-if="!loading">
		<div class="container card-container">
			<h1>{{ weather.name }}, {{ weather.sys.country }}</h1>
			<h4>{{ getCurrentDate }}</h4>
			<div class="row">
				<div class="col-6">
					<h1>{{ weather.main.temp }}°</h1>
				</div>
				<div class="col-6">
					<div class="row row-cols-3">
						<div class="col">
							<h4>{{ weather.main.temp_max }}°</h4>
							<h6>High</h6>
						</div>
						<div class="col">
							<h4>{{ weather.wind.speed }}m/s</h4>
							<h6>Wind</h6>
						</div>
						<div class="col">
							<h4>{{ formatSunrise(weather.sys.sunrise * 1000) }}</h4>
							<h6>Sunrise</h6>
						</div>
						<div class="col">
							<h4>{{ weather.main.temp_min }}°</h4>
							<h6>Low</h6>
						</div>
						<div class="col">
							<h4>{{ weather.clouds.all }}%</h4>
							<h6>Rain</h6>
						</div>
						<div class="col">
							<h4>{{ formatSunrise(weather.sys.sunset * 1000) }}</h4>
							<h6>Sunset</h6>
						</div>
					</div>
				</div>
			</div>
			<h5>Next 5 days</h5>
			<div class="row row-cols-5">
				<div class="col"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				weather: "",
				loading: true,
			};
		},

		created() {
			this.getWeather();
		},

		methods: {
			async getWeather() {
				await this.$axios
					.get(
						`${this.$weatherApi}/weather?id=2172797&lat=39.7436200&lon=-8.8070500&units=metric&appid=${this.$apikey}`
					)
					.then(res => {
						this.weather = res.data;
					});

				this.loading = false;
			},

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
					weekday: "long",
					day: "numeric",
					month: "long",
				});
			},
		},
	};
</script>

<style>
	.card-container {
		border-radius: 25px;
	}
</style>
