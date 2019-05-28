<template>
	<v-container app>
		<v-form @submit.prevent='searchMeteorites'>
			<v-layout justify-center row wrap>
				<v-flex xs8 mt-3>
					<v-layout align-center>
						<v-text-field :query="searchQuery" placeholder="Search for a meteorite" clearable solo class="mt-2"></v-text-field>
						<v-btn class="secondary--text warning mb-4" @click="searchMeteorites()" type='submit' round>
						Star Gaze
						</v-btn>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-form>
		<v-container fluid mx-1>
			<v-data-table
				content-tag="v-layout"
				row wrap
				:headers="headers"
				:items="meteorites"
				:pagination.sync="pagination"
				class="elevation-1"
				>
				<template v-slot:no-data>
	      			<v-alert :value="true" color="error" icon="warning">
	       				No meteorites found.
	      			</v-alert>
	    		</template>

				<template v-slot:items="props">
					<tr v-for="meteor in meteorites" class="text-md-center">
						<td v-for="(category, index) in meteor" class="primary--text text-md-center">
							{{ meteor[index] }}
						</td>
					</tr>
				</template>
			</v-data-table>
		</v-container>
	</v-container>
</template>

<script>

export default {
	data () {
		return {
			pagination: {
        		sortBy: 'name',
        		offset: '100'
      		},
			meteorites: [],
			headers: [
				{
					text: 'Meteorite Name',
					sortable: true,
					sortBy: 'asc',
					align: 'center',
					class: 'text-md-center',
					value: 'name',
				},
				{ text: 'ID', value: 'id' },
				{ text: 'Name Type', value: 'nametype' },
				{ text: 'RecClass', value: 'recclass' },
				{ text: 'Mass (g)', value: 'mass' },
				{ text: 'Fall', value: 'fall' },
				{ text: 'Year', value: 'year' },
				{ text: 'Latitude', value: 'reclat' },
				{ text: 'Longitude', value: 'reclong' },
				{ text: 'Geolocation', value: 'geolocation'}
			],
			baseURL: 'https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,nametype,recclass,fall,date_extract_y(year)%20as%20year,reclat,reclong&$where=name%20like%20%27%25al%25%27&$limit=100',
			offset: 100,
			searchQuery: ''
		}
	},
	methods: {
		getMeteorites () {
			fetch(this.baseURL).then(response => response.json())
				.then(data => {
					this.meteorites = data
				})
		},
		searchMeteorites () {
			if (this.searchQuery == '') {
				this.getMeteorites()
			} else {
				fetch(this.baseURL + "&$where=lower(name) like '%25" + this.searchQuery.toLowerCase() + "%25'")
					.then(response => response.json())
					.then(data => {
						this.meteorites = data
					})
			}
		}
	},
	computed: {
		currentMeteorites () {
			return this.meteorites
		}
	},
	created () {
		this.getMeteorites()
	}
}

</script>

<style>
	.v-form {
		display: inline-flex;
		width: 90vw;
		height: auto;
	}

</style>