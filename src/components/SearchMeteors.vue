<template>
	<v-container app>
		<v-form id="search">
			<input type="text" name="query" v-model="searchQuery">
			<!-- need to figure out how to use a clear button -->
			<v-btn class="warning secondary--text" v-on:click="search()">Star Gaze</v-btn>
		</v-form>
	</v-container>
</template>

<script>
import MeteoriteAPI from '../API/MeteoriteAPI.js'

export default {
	name: "searchMeteors",
	data () {
		return {
			searchQuery: '?$order=name',
			searchStatus: 'PENDING',
			tempMeteorites: [...MeteoriteAPI.state]
		}
	},
	computed: {
		
	},
	methods: {
		submit () {
			this.$emit("search", MeteoriteAPI.getMeteors(concat(searchQuery)))
			this.tempMeteorites = []
		},
		search () {
			getMeteors(encodeURI(this.baseAPIurl + this.searchQuery))
			.then( response => {
				console.log(response)
			}).catch( error => {
				console.log(error)
				this.statusMsg = "Something went wrong."
			})
		},
		reset () {
			this.$refs.form.reset()
		},
		
	}
}
</script>

<style>
	.form-control {
		display: flex;
		align-content: space-between;
		font-size: 2rem;
		margin: 25px auto;
		position: relative;
	}

	#formSubmit{
		display: inline-flex;
		position: relative;
		text-align: center;
		margin: 0 auto;
		width: 15vw;
		height: 3vw;
		
	}
</style>