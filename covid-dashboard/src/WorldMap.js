import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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
        let mymap = L.map('mapid').setView([51.505, -0.09], 13);
        let accessToken = 'pk.eyJ1Ijoibm1pbmtldmljaCIsImEiOiJjazVqeGVnYjEwN2trM29ybWtrdDBvOXFzIn0.0y70HLurlAEtyMY-ahO4CA'
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
    }
}

export default WorldMap;