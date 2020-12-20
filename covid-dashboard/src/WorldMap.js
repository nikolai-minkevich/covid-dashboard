import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import GeonamesAPI from './GeonamesAPI';

class WorldMap {

    constructor() {

    }

    generateLayout() {
        console.log('worldmap generateLayout');
        let worldMap = document.createElement('div');
        worldMap.id = 'mapid';
        setTimeout(() => {
            document.querySelector('.mainContent_container').firstChild.after(worldMap);
            this.init();
        }, 1500)



    }

    init() {
        console.log('worldmap init');
        let mymap = L.map('mapid').setView([30.0, 60.0], 2);

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 13,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoibm1pbmtldmljaCIsImEiOiJjazVqeGVnYjEwN2trM29ybWtrdDBvOXFzIn0.0y70HLurlAEtyMY-ahO4CA'
        }).addTo(mymap);

        var popup = L.popup();
        let geonamesAPI = new GeonamesAPI();
        function onMapClick(e) {
            console.log(e.latlng.toString());
            geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(data => {
                console.log(data);
                popup
                .setLatLng(e.latlng)
                .setContent(data)
                .openOn(mymap);
            });
            
        }

        mymap.on('click', onMapClick);
    }
}

export default WorldMap;