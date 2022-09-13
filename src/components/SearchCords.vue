<template>
	<form class="d-flex" role="search" @submit.prevent="getCords">
		<input
			class="form-control me-2"
			type="search"
			placeholder="Search"
			aria-label="Search"
			v-model="location"
		/>
		<button type="submit" class="btn btn-outline-success">Search</button>
	</form>
</template>

<script>
	export default {
		name: "SerchCords",
		data() {
			return {
				location: "",
				cords: "",
			};
		},

		methods: {
			getCords() {
				this.$axios.get(`${this.$locationApi}${this.location}`).then(res => {
					this.cords = res.data.data[0];
				});
			},
		},
	};
</script>

<style></style>
