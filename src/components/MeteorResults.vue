<template>
	<vk-grid>
		<div>
			<div v-for="meteorite in meteorites">
				<div v-for="(value, name) in meteorite">{{name}}:{{value}}</div>
			</div>
		</div>
	</vk-grid>
</template>

<script>
import MeteoriteAPI from '@/API/MeteoriteAPI'

export default {
	name: 'MeteorResults',
	data () {
		return {

		}
	},
	components: {
		//any custom components needed
	},
	watch: {
		//properties and data that needs to be tracked
	},
	computed: {
		//data that needs to be calculated
	},
	methods: {
		//any helper functions
	}

}
</script>

<style>
	
</style>