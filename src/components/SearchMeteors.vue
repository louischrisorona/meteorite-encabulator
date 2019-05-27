<template>
	<v-form @submit.prevent='search'>
		<v-layout justify-center row wrap>
			<v-flex xs8 row ma-1 pa-1>
				<v-text-field
					class=""
					placeholder="Search for a meteorite"
					clearable
					solo></v-text-field>
				<v-btn 
					class="secondary--text warning"
					v-on:click="search()"
					type='submit'
					>
				Star Gaze
				</v-btn>
			</v-flex>
		</v-layout>
	</v-form>
</template>

<script>

export default {
	name: "searchMeteors",
	data () {
		return {
			searchQuery: ''
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