<template>
	<div style="height: 100%" v-if="!loading" class="card-background">
		<div class="card-container">
			<h4>Today's Highlight</h4>
			<div class="row row-cols-3 g-3">
				<div class="col">
					<div class="card-weather">
						Wind Status
						<div class="d-flex justify-content-between">
							<div>{{ weather.wind.speed }} m/s</div>
							<div>5:00pm</div>
						</div>
					</div>
				</div>
				<div class="col"><div class="card-weather">UV Index</div></div>
				<div class="col">
					<div class="card-weather">
						Sunrise & Sunset
						<div class="d-flex justify-content-between">
							<div>
								<i class="bi bi-sunrise"></i>
								<br />
								<span class="sub-yellow">Sunrise</span>
								<br />
								{{ weather.sys.sunrise }}
							</div>

							<div>
								<i class="bi bi-sunset"></i>
								<br />
								<span class="sub-yellow">Sunset</span>
								<br />
								{{ weather.sys.sunset }}
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Humidity
						<div class="d-flex justify-content-between">
							<div>{{ weather.main.humidity }}%</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Visibility
						<div class="d-flex justify-content-between">
							<div>{{ weather.visibility }}km</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card-weather">
						Feel Like
						<div class="d-flex justify-content-between">
							<div>{{ Math.round(weather.main.feels_like) }}°c</div>
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
</style>
