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
export default {
	name: "searchMeteors",
	data () {
		return {
			searchQuery: ''
		}
	},
	computed: {
		getMeteors (url) {
			return new Promise((resolve, reject) => {
				const request = new XMLHttpRequest()
				request.open("GET", url)
				request.onload = () => {
				if (request.status == 200) {
					resolve(request.responseText)
				} else {
					reject(Error(request.statusText))
				}
			}
			request.onerror = () => reject(Error("Network error"))
			request.send()
			})
		}
	},
	methods: {
		submit () {
			this.$emit("search", this.tempMeteorites)
			this.tempMeteorites = ''
		},
		search () {
			getMeteors('https://data.nasa.gov/resource/gh4g-9sfh.json')
			.then( response => {
				console.log(response)
				this.tempMeteorites = response
			}).catch( error => {
				console.log(error)
				this.statusMsg = "Something went wrong."
			})
		},
		
			//.then(JSON.parse)
		},
		reset () {
			this.$refs.form.reset()
		},
		loadMeteors () {
			
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