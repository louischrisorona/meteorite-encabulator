<template>
	<v-container app>
		<v-data-table
			:headers="this.headers"
			:items="meteorites"
			class="elevation-1"
		>
			<template v-slot:items="meteorites">
				<td v-for="key in columns"
					@click="sortBy(key)">
						{{ key | capitalize }}
					<span class="arrow" :class="sortOrders[key]>0?'asc':'desc'"></span>
				</td>
			</template>
		</v-data-table>
			<tbody>
				<tr v-for="meteor in filteredMeteors">
					<td v-for="key in columns">
						{{ meteor[key] }}
					</td>
				</tr>
			</tbody>
		</table>
	</v-container>
</template>

<script>
export default {
	name: 'MeteorResults',
	data () {
		return {
			headers: [
			{
				text: 'Name',
				align: 'center',
				sortable: false,
				value: 'name'
			},
			{text: 'Name', value: name},
			{text: 'ID', value: id},
			{text: 'Rec Class', value: recclass},
			{text: 'Rec Lat', value: reclat},
			{text: 'Rec Long', value: reclong},
			{text: 'Year', value: year},
			{text: 'Fall', value: fall},
			{text: 'Geolocation', value: {long, lat}},
			{text: 'Name Type', value: nametype},
			{text: 'Mass', value: mass}
			],
			items: [],
			sortOrders: {},
			sortKey: '',
			sortOrders: sortOrders[sortKey]
		}
	},
	computed: {
		filteredMeteors () {
			let sortKey = this.sortKey
			let filterKey = this.filterKey && this.filterKey.toLowerCase()
			let order = this.sortOrders[sortKey] || 1
			let meteors = this.meteors
			if (filterKey) {
				meteors = meteors.filter(function (row) {
					return Object.keys(row).some(function (key) {
						return String(row[key]).toLowerCase().indexOf(filterKey) > -1
					})
				})
			}
			if (sortKey) {
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