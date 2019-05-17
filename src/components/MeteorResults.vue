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

export default {
	components: {
		//any custom components needed
	},
	watch: {
		//properties and data that needs to be tracked
	},
	computed: {
		//data that needs to be calculated
	},
	data () {
		return {
		//necessary data to render
		}
	},
	methods: {
		//any helper functions
	}

}
</script>

<style>
	
</style>