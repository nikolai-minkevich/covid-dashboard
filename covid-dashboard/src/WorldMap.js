import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//import countries from '../assets/data/countries.json'

import GeonamesAPI from './GeonamesAPI';

class WorldMap {

    constructor() {
        this.worldMap = '';
        //this.countries = countries
        // this.getCountryList();
        console.log(this.countries);
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

    getCountryList() {
        return fetch('../assets/data/countries.json')
            .then(response => {
                console.log('countries', response);
                if (!response.ok) throw Error(response.statusText);
                this.countries = response.json();
            })
            .catch(error => console.log(error));

    }

    init() {
        let mymap = L.map(this.worldMap.id).setView([30.0, 60.0], 2);

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 13,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoibm1pbmtldmljaCIsImEiOiJjazVqeGVnYjEwN2trM29ybWtrdDBvOXFzIn0.0y70HLurlAEtyMY-ahO4CA'
        }).addTo(mymap);

        const geonamesAPI = new GeonamesAPI();
        function onMapClick(e) {
            geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(data => {
                document.querySelector('.mainContent_container').setAttribute('data-country', data);
                L.popup()
                    .setLatLng(e.latlng)
                    .setContent(data)
                    .openOn(mymap);
            });

        }
        mymap.on('click', onMapClick);
    }

}

export default WorldMap;