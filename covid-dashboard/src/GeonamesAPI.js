/* API based on api.geonames.org 
http://api.geonames.org/countryCode?lat=47.03&lng=10.2&username=nikolai_minkevich

*/
class GeonamesAPI {
    constructor() {
        this.API_SERVER = 'http://api.geonames.org/';
        this.username = 'nikolai_minkevich'
    }
    /**
     * Get iso2 country code by coordinates.
     * @param {*} lat 
     * @param {*} lng 
     */
    getCountryName(lat, lng) {
        return fetch(`${this.API_SERVER}countryCode?lat=${lat}&lng=${lng}&username=${this.username}`, {
            method: "GET"
        })
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.text();
            })
            .catch(()=> 'WORLD');
    }
    /**
     * Get country info by iso2 country code.
     * 
     * If countryCode, return info for all countries.
     * @param {*} countryCode 
     */
    getCountryInfo(countryCode) {
        return fetch(`${this.API_SERVER}countryInfo?country=${countryCode}&username=${this.username}`, {
            method: "GET"
        })
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.text();
            })
            .catch(error => Error(error));
    }
}

export default GeonamesAPI;