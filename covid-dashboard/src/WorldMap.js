import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import GeonamesAPI from './GeonamesAPI';

class WorldMap {

    constructor() {
        this.geonamesAPI = new GeonamesAPI();
        this.worldMap = '';
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

        
        function onMapClick(e) {
            this.geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(data => {
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