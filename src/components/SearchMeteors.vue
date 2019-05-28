<template>
	<v-container app>
		<v-form>
			<v-layout class="ml-5" row wrap>
				<v-flex xs8 mt-3>
					<v-layout align-center>
						<v-text-field v-model.trim="searchQuery" placeholder="Search for a meteorite" clearable solo class="mt-2"></v-text-field>
						<v-btn class="secondary--text warning mb-4" @click="searchMeteorites()" round>
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
				hide-actions
				class="elevation-1"
				>
				<template v-slot:no-data>
	      			<v-alert :value="true" color="error" icon="warning">
	       				No meteorites found.
	      			</v-alert>
	    		</template>

				<template v-slot:items="props">
					<tr v-for="meteor in meteorites" class="text-md-center">
						<td v-for="(category, index) in meteor" class="primary--text">
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
        		sortBy: "name",
      		},
			meteorites: [],
			headers: [
				{
					text: 'Meteorite Name',
					sortable: true,
					sortBy: 'asc',
					align: 'center',
					value: 'name',
				},
				{ text: 'ID', value: 'id' },
				{ text: 'Name Type', value: 'nametype' },
				{ text: 'RecClass', value: 'recclass' },
				{ text: 'Mass (g)', value: 'mass' },
				{ text: 'Fall', value: 'fall' },
				{ text: 'Year', value: 'year' },
				{ text: 'Latitude', value: 'reclat' },
				{ text: 'Longitude', value: 'reclong' }
			],
			baseURL: 'https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,nametype,recclass,mass,fall,date_extract_y(year) as year,reclat,reclong&$limit=100',
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
				if(this.meteorites.length > 0){
					this.getMeteorites()
				} else {
					this.currentMeteories()
				}
			} else {
				fetch(this.baseURL.substring(0, this.baseURL.length-11) + "&$where=lower(name)%20like%20'%25" + this.searchQuery.toLowerCase() + "%25'%20&$limit=100")
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

	table.v-table thead th {
		font-size: 1.5rem !important;
		text-align: center !important;
	}

	table.v-table tbody tr td {
		font-size: 1.5rem !important;
		color: white !important;
	}
</style>