import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
let convert = require('xml-js')

//import countries from '../assets/data/countries.json'

import GeonamesAPI from './GeonamesAPI';

class WorldMap {

    constructor() {
        this.worldMap = '';
        this.geonamesAPI = new GeonamesAPI();
        //this.countries = countries
        // this.getCountryList();

        // console.log(this.countries);
    }

    generateLayout() {
        console.log('worldmap generateLayout');
        this.worldMap = document.createElement('div');
        this.worldMap.id = 'mapid';
        /* Need to fix this */
        setTimeout(() => {
            document.querySelector('.worldMapСell').append(this.worldMap);
            this.init();
        }, 1500)

    }

    // getCountryList() {
    //     return fetch('../assets/data/countries.json')
    //         .then(response => {
    //             // console.log('countries', response);
    //             if (!response.ok) throw Error(response.statusText);
    //             this.countries = response.json();
    //         })
    //         .catch(error => console.log(error));

    // }

    init() {
        this.mymap = L.map(this.worldMap.id).setView([30.0, 60.0], 2);

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 13,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoibm1pbmtldmljaCIsImEiOiJjazVqeGVnYjEwN2trM29ybWtrdDBvOXFzIn0.0y70HLurlAEtyMY-ahO4CA'
        }).addTo(this.mymap);

        // Get name (and stats) of selected country

        let self = this;
        function onMapClick(e) {
            console.log('latlng', e.latlng);
            self.geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(countryCode => {
                if (countryCode !== undefined) {
                    document.querySelector('.mainContent_container').setAttribute('data-country', countryCode);
                }

                //self.showCountryBounds(countryCode)

                // L.popup()
                //     .setLatLng(e.latlng)
                //     .setContent(data)
                //     .openOn(this.mymap);
            });

        }
        this.mymap.on('click', onMapClick);

        // Add rounds with statistic



    }
    /**
     * Fit map bounds to selected country
     * @param {string} countryCode - iso2 country code
     */
    showCountryBounds(countryCode) {
        this.geonamesAPI.getCountryInfo(countryCode).then(countryInfoXML => {
            let countryInfo = JSON.parse(convert.xml2json(countryInfoXML, { "compact": true })).geonames.country;
            let bounds = null;
            // Russia so great and we need use a special trick for fit the map for show Russia
            switch (countryCode.toUpperCase()) {
                case 'RU':
                    bounds = [
                        [Math.abs(parseFloat(countryInfo.north._text)), Math.abs(parseFloat(countryInfo.west._text))],
                        [Math.abs(parseFloat(countryInfo.south._text)), Math.abs(parseFloat(countryInfo.east._text))]
                    ];
                    break;
                case 'WORLD':
                    bounds = [
                        [-180.0, -90.0],
                        [180.0, 90.0]
                    ];
                    break;
                default:
                    bounds = [
                        [parseFloat(countryInfo.north._text), parseFloat(countryInfo.west._text)],
                        [parseFloat(countryInfo.south._text), parseFloat(countryInfo.east._text)]
                    ];
                    break;
            }

            this.mymap.fitBounds(bounds);
        });
    }
    /**
     * Draw round for statistic data
     * @param {number} lat - latitude
     * @param {number} lng - longitude
     * @param {number} size - size (1-10)
     */
    drawRound(lat, lng, size, countryName, countryFlag) {
        L.circle([lat, lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: size
        })
            .addTo(this.mymap)
            .bindPopup(`<img src='${countryFlag}' class='map-flag'> ${countryName}`);
    }
    /**
     * Show 'statistic rounds' for all countries.
     * @param {array} data - array of data
     * @param {string} source - title of selected parameter ("cases" by default)
     * @param {number} coefficient - how much we need to multiply selected parameter (0.1 by default)
     */
    showStatisticRounds(data, source = "cases", coefficient = 0.1) {
        // 

        data.forEach(country => {
            this.drawRound(country.countryInfo.lat, country.countryInfo.long, country[source] * coefficient, country.country, country.countryInfo.flag)
        });

        /*
        active: 9409
activePerOneMillion: 239.21
cases: 50677
casesPerOneMillion: 1288
continent: "Asia"
country: "Afghanistan"
countryInfo:
flag: "https://disease.sh/assets/img/flags/af.png"
iso2: "AF"
iso3: "AFG"
lat: 33
long: 65
_id: 4
__proto__: Object
critical: 93
criticalPerOneMillion: 2.36
deaths: 2110
deathsPerOneMillion: 54
oneCasePerPeople: 776
oneDeathPerPeople: 18642
oneTestPerPeople: 218
population: 39333612
recovered: 39158
recoveredPerOneMillion: 995.54
tests: 180385
testsPerOneMillion: 4586
todayCases: 141
todayDeaths: 56
todayRecovered: 359
updated: 1608485384542 */


    }

}

export default WorldMap;