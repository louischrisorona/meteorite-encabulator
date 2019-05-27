import axios from 'axios'

const baseURL = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

const state = {
	meteorites: null
}

const actions = {
	callApi ({ commit }, query) {
		return new Promise((resolve, reject) => {
			let url = encodeURI('https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=100' + query)
			commit('resetMeteorites')
			axios.get(query)
				.then(response => {
					commit('setMeteorites', response.data)
					resolve()
				})
				.catch(error => {
					reject(error)
				})
		})
	},
	clearResult ({ commit }) {
		commit('resetMeteorites')
	}
}

const getters = {
	getMeteorites (state) {
		return state.meteorites
	},
	getError (state) {
		return state.error
	}
}

const mutations = {
	setMeteorites (state, query) {
		state.meteorites = query
	},
	resetMeteorites (state) {
		state.meteorites = null
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}