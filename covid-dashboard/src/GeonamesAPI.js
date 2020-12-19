/* API based on api.geonames.org 
http://api.geonames.org/countryCode?lat=47.03&lng=10.2&username=nikolai_minkevich

*/
class GeonamesAPI {
    constructor() {
        this.API_SERVER = 'http://api.geonames.org/';
        this.username = 'nikolai_minkevich'
    }
    getCountryName(lat, lng) {
        console.log('OK' + lat + lng);
        return fetch(this.API_SERVER + `countryCode?lat=${lat}&lng=${lng}&username=${this.username}`, {
            method: "GET"
        })
            .then(response => {
                console.log('r',response);
                if (!response.ok) throw Error(response.statusText);
                return response.text();
            })
            .catch(error => console.log(error));
    }
}

export default GeonamesAPI;