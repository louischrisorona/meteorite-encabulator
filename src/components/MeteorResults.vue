<template>
	<vk-grid divided gutter="small">
		<div>
			<li v-for="(meteorite, index) in meteorites" :item="meteorite" :key="index"> {{ meteorite }} </li>
		</div>
	</vk-grid>
</template>

<script>
export default {
	name: 'MeteorResults',
	props: {
		meteorite: {
			type: String
		}
	},
	data () {
		return {
			meteorites: []
		}
	},
	watch: {
		//properties and data that needs to be tracked
		msg: function () {
			this.meteorites.push(this.meteorite)
		}
	}
}
</script>

<style>
	
</style>