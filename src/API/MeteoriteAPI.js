export default {

	getMeteors (url) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest()
			request.open("GET", url)
			request.onload = () => {
				if (request.status == 200) {
					resolve(request.responseText)
				} 
				else {
					reject(Error(request.statusText))
				}
			}
			request.onerror = () => reject(Error("Network error"))
			request.send()
		})
	},
	useJSON (url){
		return getMeteors(url).then(JSON.parse);
	}
}
	useJSON("https://data.nasa.gov/resource/gh4g-9sfh.json")
		.then( response => {
			console.log("Success!", response);
		}).catch( error => {
			console.error("Failed!", error);
		})
	