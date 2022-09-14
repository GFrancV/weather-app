<template>
	<column-chart
		:data="[
			['10AM', 2],
			['11AM', 46],
			['12PM', 28],
			['1PM', 32],
			['2PM', 46],
			['3PM', 28],
		]"
		:colors="['#c4daeb']"
		:min="0"
		:max="60"
	></column-chart>
</template>

<script>
	export default {
		name: "ChanceRain",
		props: {
			chanceRain: Array,
		},
	};
</script>

<style></style>
