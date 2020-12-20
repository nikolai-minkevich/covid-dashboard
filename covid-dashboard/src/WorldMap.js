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
            document.querySelector('.mainContent_container').firstChild.after(this.worldMap);
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
                document.querySelector('.mainContent_container').setAttribute('data-country', countryCode);
                self.showCountryBounds(countryCode)

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
            if (countryInfo.countryCode._text === 'RU') {
                bounds = [
                    [Math.abs(parseFloat(countryInfo.north._text)), Math.abs(parseFloat(countryInfo.west._text))],
                    [Math.abs(parseFloat(countryInfo.south._text)), Math.abs(parseFloat(countryInfo.east._text))]
                ];
            } else {
                bounds = [
                    [parseFloat(countryInfo.north._text), parseFloat(countryInfo.west._text)],
                    [parseFloat(countryInfo.south._text), parseFloat(countryInfo.east._text)]
                ];
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
    drawRound(lat, lng, size = 500) {
        L.circle([lat, lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: size
        }).addTo(this.mymap);
    }



}

export default WorldMap;