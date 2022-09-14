<template>
	<div style="height: 100%" v-if="!loading" class="card-background">
		<div class="card-container">
			<h4>Today's Highlight</h4>
			<div class="row row-cols-3 g-3">
				<div class="col">
					<div class="card-weather">
						Wind Status
						<div class="d-flex justify-content-between">
							<div>
								<h3 class="label-value">{{ weather.wind.speed }}</h3>
								<span class="alternative-color">m/s</span>
							</div>
							<div>
								<span class="alternative-color"> {{ getCurrentHour }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Clouds
						<div class="d-flex justify-content-between">
							<div>
								<h4 class="label-value">{{ weather.clouds.all }}</h4>
								<span class="alternative-color">%</span>
							</div>
							<div>
								<span class="alternative-color">{{ clouds_msg }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Sunrise & Sunset
						<div class="d-flex justify-content-between">
							<div>
								<i class="bi bi-sunrise alternative-color"></i>
								<br />
								<span class="sub-yellow">Sunrise</span>
								<br />
								<h6 class="label-value">{{ formatHour(weather.sys.sunrise * 1000, weather.timezone) }}</h6>
							</div>

							<div>
								<i class="bi bi-sunset alternative-color"></i>
								<br />
								<span class="sub-yellow">Sunset</span>
								<br />
								<h6 class="label-value">{{ formatHour(weather.sys.sunset * 1000, weather.timezone) }}</h6>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Humidity & Pressure
						<div class="d-flex justify-content-between">
							<div>
								<h4 class="label-value">{{ weather.main.humidity }}</h4>
								<span class="alternative-color">%</span>
							</div>
							<div>
								<h4 class="label-value">{{ weather.main.pressure }}</h4>
								<span class="alternative-color">hPa</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Visibility
						<div class="d-flex justify-content-between">
							<div>
								<h4 class="label-value">{{ weather.visibility / 1000 }}</h4>
								<span class="alternative-color">km</span>
							</div>
							<div>
								<i class="bi bi-eye alternative-color"></i>
								<br />
								<span class="alternative-color">{{ visibility_msg }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Feel Like
						<div class="d-flex justify-content-between">
							<div>
								<h4 class="label-value">
									<i class="bi bi-thermometer"></i>{{ Math.round(weather.main.feels_like) }}°
								</h4>
							</div>
							<div>
								<span class="alternative-color">{{ fellLike_msg }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "WeatherHighlight",
		props: {
			weather: Object,
		},
		data() {
			return {
				loading: false,
			};
		},

		methods: {
			formatHour(hour, timezone) {
				let date = new Date(hour);
				let hours = date.getHours() - 1 + timezone / 3600;
				hours = hours < 0 ? Math.abs(hours) + 12 : hours;
				let minutes = date.getMinutes();

				return `${hours < 9 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
			},
		},

		computed: {
			getCurrentHour() {
				return new Date().toLocaleString("en-us", {
					hour: "2-digit",
					minute: "2-digit",
				});
			},

			fellLike_msg() {
				return this.weather.main.feels_like == this.weather.main.temp
					? "The temperature are the same."
					: this.weather.main.feels_like < this.weather.main.temp
					? "The humidity makes it feel colder."
					: "Humidity is making it feel hotter.";
			},

			visibility_msg() {
				return this.weather.visibility < 2000
					? "Haze is affecting visibility"
					: "There is very good visibility today";
			},

			clouds_msg() {
				return this.weather.clouds.all > 60 ? "Mostly cloudy" : "Clear";
			},
		},
	};
</script>

<style>
	.card-weather {
		background: rgba(41, 41, 41, 0.35);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(6.5px);
		-webkit-backdrop-filter: blur(6.5px);
		border-radius: 10px;

		padding: 10px 8px;
	}

	.label-value {
		display: inline;
		margin-right: 8px;
	}
</style>
