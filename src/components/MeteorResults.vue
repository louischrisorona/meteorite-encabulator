<template>
	<v-container app>
		<v-data-table
			:headers="headers"
			:items="meteorites"
			:search="search"
			:pagination.sync="pagination"
			class="elevation-1"
			prev-icon="arrow-left"
			next-icon="arrow-right"
			sort-icon="arrow-down"
		>
			<template v-slot:items="props">
				<td v-for="(meteor, key) in meteorites" :key=key>
						{{ props.meteor.name }}
				</td>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
import MeteoriteAPI from '../API/MeteoriteAPI.js'

export default {
	name: 'MeteorResults',	
	data () {
		return {
			headers: [
				{
					text: 'Meteorite',
					align: 'left',
					sortable: false,
					value: 'name'
				},
				{ text: 'Name', value: 'name' },
				{ text: 'ID', value: 'id' },
				{ text: 'Name Type', value: 'nametype' },
				{ text: 'Recclass', value: 'recclass' },
				{ text: 'Mass', value: 'mass' },
				{ text: 'Fall', value: 'fall' },
				{ text: 'Year', value: 'year' },
				{ text: 'Reclat', value: 'reclat' },
				{ text: 'Reclong', value: 'reclong' },
				{ text: 'Latitude', value: 'geolocation.latitude' },
				{ text: 'Longitude', value: 'geolocation.longitude' },
			],
			meteorites: [MeteoriteAPI],
			sortOrders: {},
			sortKey: 1
		}
	},
	computed: {
		filteredMeteors () {
			let sortKey = this.sortKey
			let meteors = this.meteorites
			if(this.searchStatus == "AWAITING"){
				meteors = meteors.filter(function (row) {
					return Object.keys(row).some(function (key) {
						return String(row[key]).toLowerCase().indexOf(sortKey) > -1
					})
				})
			}
			if (this.searchStatus == "COMPLETE") {
				meteors = meteors.slice().sort(function (a, b) {
					a = a[sortKey]
					b = b[sortKey]
					return (a === b ? 0 : a > b ? 1 : -1)
				})
			}
			return meteors
		}
	},
	filters: {
		capitalize: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	},
	methods: {
		sortBy: function (key) {
			this.sortKey = key
			this.sortOrders[key] = this.sortOrders[key] * -1
		}
	}
}
</script>

<style>
	table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>