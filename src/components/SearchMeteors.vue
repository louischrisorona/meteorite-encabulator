<template>
	<div>
		<form>
			<input
				type="text"
				name="meteorites"
				placeholder="Search for a meteorite"
				v-model="tempMeteorites"
				class="form-control"
				@submit="submit"
			/>
			<vk-button id="formSubmit" type="primary" v-on:click.prevent="search()">Star Gaze</vk-button>
		</form>
		<vk-spinner id="spinner" v-if="searchStatus != 'complete'"></vk-spinner>
	</div>
</template>

<script>
export default {
	name: "searchMeteors",
	data () {
		return {
			tempMeteorites: ''
		}
	},
	methods: {
		submit () {
			this.$emit("search", this.tempMeteorites)
			this.tempMeteorites = ''
		},
		search () {
			this.getMeteors('https://data.nasa.gov/resource/gh4g-9sfh.json')
			.then( response => {
				console.log(response)
				this.tempMeteorites = response
			}).catch( error => {
				console.log(error)
				this.statusMsg = "Something went wrong."
			})
		},
		getMeteors (url) {
			return new Promise((resolve, reject) => {
				const request = new XMLHttpRequest()
				request.open("GET", url)
				request.onload = () => {
					if (request.status == 200) {
						resolve(request.responseText)
					} 
					else {
						reject(Error(request.statusText))
					}
				}
				request.onerror = () => reject(Error("Network error"))
				request.send()
			})
			//.then(JSON.parse)
		}
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