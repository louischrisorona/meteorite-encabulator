import axios from 'axios'

const baseURL = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

const state = {
	meteorites: callAPI('setMeteorites')
}

const actions = {
	callAPI ({ commit }, query) {
		return new Promise((resolve, reject) => {
			let url = encodeURI('https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=100' + query)
			const request = new XMLHttpRequest()
			request.open("GET", url)
			request.onload = () => {
				if(request.status == 200){
					resolve(request.responseText)
				} else {
					reject(Error(request.statusText))
				}
			}
			request.onerror = () => reject(Error("Network Error"))
			request.send()
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
		state.meteorites = callAPI('setMeteorites')
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}