<template>
	<bar-chart :data="windSpeed" :colors="['#c4daeb']" :min="0" :max="30" suffix="m/s"></bar-chart>
	<div class="d-flex justify-content-between mt-3">
		<div>
			<h3 style="display: inline; margin-right: 5px">
				{{ currentSpeed }}
			</h3>
			<span class="gray fs-6">m/s</span>
		</div>
		<div class="d-flex align-items-center">
			<span class="gray fs-6">
				{{ currentHour }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ChanceRain",
		props: {
			windSpeed: Array,
			currentSpeed: Number,
		},

		computed: {
			currentHour() {
				return new Date().toLocaleString("en-us", { hour: "2-digit", minute: "2-digit" });
			},
		},
	};
</script>

<style></style>
