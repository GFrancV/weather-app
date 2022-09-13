<template>
	<router-view />
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},

		computed: {},
	};
</script>

<style>
	#app {
		background-color: #191b1f;
		min-height: 100vh;
		color: white;
		overflow-x: hidden;
		padding: 25px;
		font-size: 0.7em;
		font-family: Sans Infanty;
	}

	@font-face {
		font-family: Sans Infanty;
		src: url("./assets/fonts/ProductSansInfanity.ttf");
	}

	.card-background {
		background: rgb(153, 153, 153);
		background: linear-gradient(
			135deg,
			rgba(153, 153, 153, 0.34) 10%,
			rgba(255, 198, 45, 0.2) 25%,
			rgba(0, 212, 255, 0.8) 75%,
			rgba(153, 153, 153, 0.34217436974789917) 90%
		);
		border-radius: 25px;
		overflow: hidden;
	}

	.card-container {
		color: white;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(17, 25, 40, 0.75);
		padding: 20px 30px;
	}

	span.gray {
		font-size: 0.9em;
		color: #929b9f;
	}

	.line-divider {
		min-height: 15px;
		height: 15x;
		width: 100%;
		border-top: 1px solid #929b9f;
		margin: 20px 0;
	}
</style>
