const baseURL = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

const state = {
	meteorites: this.getMeteors(baseURL)
}

const actions = {
	callAPI (query) {
		return new Promise((resolve, reject) => {
			let url = encodeURI(baseURL + query)
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
	}
}

const getters = {
	getMeteors (state){
		return state
	}
}

const mutations = {

}




export default {
	state,
	actions,
	getters,
	mutations
}
	
	