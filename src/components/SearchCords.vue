<template>
	<form class="d-flex align-items-center" role="search" @submit.prevent="getCords">
		<input
			class="search-city"
			type="search"
			placeholder="Search with the name of the city"
			aria-label="Search"
			v-model="location"
		/>
		<button type="submit" class="btn-search"><i class="bi bi-search"></i></button>
	</form>
</template>

<script>
	export default {
		name: "SerchCords",
		data() {
			return {
				location: "",
				cords: { latitude: "", longitude: "" },
			};
		},

		methods: {
			async getCords() {
				await this.$axios.get(`${this.$locationApi}${this.location}`).then(res => {
					this.cords.latitude = res.data.data[0].latitude;
					this.cords.longitude = res.data.data[0].longitude;
				});

				this.$emit("citySearch", this.cords);
			},
		},
	};
</script>

<style>
	.search-city {
		width: 100%;
		padding: 10px 15px;
		border: 1px solid #929b9f71;
		background: none;
		border-radius: 25px;
		color: white;
		height: 42px;
		outline: none;
		transition: 0.3s;
	}

	.search-city:focus {
		background: #7c7c7c2b;
	}

	.btn-search {
		margin: 0.5em;
		background: none;
		outline: none;
		padding: 10px 15px;
		color: white;
		background: none;
		border: 1px solid #929b9f;
		border-radius: 50%;
		transition: 0.3s ease-in-out;
	}

	.btn-search:hover {
		background: #7c7c7c6b;
	}
</style>
