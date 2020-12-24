import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
let convert = require('xml-js')
import Slider from "./Slider";

//import countries from '../assets/data/countries.json'

import GeonamesAPI from './GeonamesAPI';

class WorldMap {

    constructor() {
        this.worldMap = '';
        this.geonamesAPI = new GeonamesAPI();
        this.data = []
    }

    generateLayout() {
        this.worldMap = document.createElement('div');
        this.worldMap.id = 'mapid';
        let worldMapContainer = document.createElement('div');
        worldMapContainer.className = 'world-map-container';
        worldMapContainer.append(this.worldMap)
        setTimeout(() => {
            document.querySelector('.worldMapСell').append(worldMapContainer);
            this.init();
        }, 1500)
    }

    init() {
        this.mymap = L.map(this.worldMap.id).setView([30.0, 60.0], 2);
        // Default style id: 'mapbox/streets-v11'
        // Blue style id: 'nminkevich/ckiyzis0477jp1aqlqvezwx4l'
        // Yellow id: 'nminkevich/ckiyzpcx00d9m19o3gghoyxeo'
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 13,
            id: 'nminkevich/ckiyzpcx00d9m19o3gghoyxeo',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoibm1pbmtldmljaCIsImEiOiJjazVqeGVnYjEwN2trM29ybWtrdDBvOXFzIn0.0y70HLurlAEtyMY-ahO4CA'
        }).addTo(this.mymap);

        // Get name (and stats) of selected country

        let self = this;
        function onMapClick(e) {
            self.geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(countryCode => {
                if (countryCode !== undefined) {
                    document.querySelector('.mainContent_container').setAttribute('data-country', countryCode);
                }
            });
        }



        this.mymap.on('click', onMapClick);

        this.chosenItem = 0;
        this.demoListItems = [
            "total cases",
            "total deaths",
            "total recovered",
            "total cases per 100000",
            "total deaths per 100000",
            "total recovered per 100000",
            "today cases",
            "today deaths",
            "today recovered",
            "today cases per 100000",
            "today deaths per 100000",
            "today recovered per 100000",
        ];

        const worldMapSlider = new Slider(
            `${this.demoListItems[this.chosenItem]}`,
            "worldMap__left",
            "worldMap__right",
            "worldMap__nameOfItem"
        );
        document.querySelector('.world-map-container').append(worldMapSlider);
        this.setupListeners()
    }
    createData(data) {
        this.countries = data;
        const demoListItems = [
            "total cases",
            "total deaths",
            "total recovered",
            "total cases per 100000",
            "total deaths per 100000",
            "total recovered per 100000",
            "today cases",
            "today deaths",
            "today recovered",
            "today cases per 100000",
            "today deaths per 100000",
            "today recovered per 100000",
        ];
        this.demoListItems = demoListItems;
        const countries = this.countries;
        const demoList = [];
        for (let i = 0; i < demoListItems.length; i += 1) {
            demoList.push([]);
        }
        const k = 1000000

        countries.map((item) => {
            if (item.population < 1) item.population = k;

            let casesPer1000000 = Math.round(item.cases * k / item.population);
            if (isNaN(casesPer1000000) || undefined) { casesPer1000000 = 0 }

            let deathsPer1000000 = Math.round(item.deaths * k / item.population);
            if (isNaN(deathsPer1000000) || undefined) { deathsPer1000000 = 0 }

            let recoveredPer1000000 = Math.round(item.cases * k / item.population);
            if (isNaN(recoveredPer1000000) || undefined) { recoveredPer1000000 = 0 }

            let todayCasesPer1000000 = Math.round(item.todayCases * k / item.population);
            if (isNaN(todayCasesPer1000000) || undefined) { todayCasesPer1000000 = 0 }

            let todayDeathsPer1000000 = Math.round(item.todayDeaths * k / item.population);
            if (isNaN(todayDeathsPer1000000) || undefined) { todayDeathsPer1000000 = 0 }

            let todayRecoveredPer1000000 = Math.round(item.todayRecovered * k / item.population);
            if (isNaN(todayRecoveredPer1000000) || undefined) { todayRecoveredPer1000000 = 0 }
            const demoListItemsСontent = [
                item.cases,
                item.deaths,
                item.recovered,
                casesPer1000000,
                deathsPer1000000,
                recoveredPer1000000,
                item.todayCases,
                item.todayDeaths,
                item.todayRecovered,
                todayCasesPer1000000,
                todayDeathsPer1000000,
                todayRecoveredPer1000000,
            ];
            for (let i = 0; i < demoList.length; i += 1) {
                let coefficient = 1;
                switch (i) {
                    case 0:
                        coefficient = 0.1;
                        break;
                    case 1:
                        coefficient = 10;
                        break;
                    case 2:
                        coefficient = 0.2;
                        break;
                    case 3:
                        coefficient = 5;
                        break;
                    case 4:
                        coefficient = 250;
                        break;
                    case 5:
                        coefficient = 5;
                        break;
                    case 6:
                        coefficient = 10;
                        break;
                    case 7:
                        coefficient = 450;
                        break;
                    case 8:
                        coefficient = 20;
                        break;
                    case 9:
                        coefficient = 200;
                        break;
                    case 10:
                        coefficient = 10000;
                        break;
                    case 11:
                        coefficient = 700;
                        break;
                    default:
                        coefficient = 1;
                        break;
                }
                demoList[i].push({
                    country: item.country,
                    score: demoListItemsСontent[i],
                    countryCode: item.countryInfo.iso2,
                    countryFlag: item.countryInfo.flag,
                    lat: item.countryInfo.lat,
                    long: item.countryInfo.long,
                    caseCoefficient: coefficient,
                    caseTitle: demoListItems[i]
                });
                demoList[i].sort((a, b) => (a.score < b.score ? 1 : -1));
            }
        });
        this.demoList = demoList;
        return demoList;
    }
    setupListeners() {
        document
            .querySelector(".worldMap__left")
            .addEventListener("click", () => {
                if (this.chosenItem === 0) {
                    this.changeChosenItem(this.demoListItems.length - 1);
                } else {
                    this.changeChosenItem(this.chosenItem - 1);
                }
            });
        document
            .querySelector(".worldMap__right")
            .addEventListener("click", () => {
                if (this.chosenItem === this.demoListItems.length - 1) {
                    this.changeChosenItem(0);
                } else {
                    this.changeChosenItem(parseInt(this.chosenItem) + 1);
                }
            });
    }

    changeChosenItem(number) {
        if (this.chosenItem !== parseInt(number)) {
            document.querySelector('.mainContent_container').setAttribute('data-chosenitem', number);
            this.chosenItem = parseInt(number);
            document.querySelector(".worldMap__nameOfItem").textContent = `${this.demoListItems[this.chosenItem]}`
            this.clearMap(this.mymap);
            this.showStatisticRounds();
        }


    }

    // Trick for clear all layer and objects from map
    // https://stackoverflow.com/questions/14585688/clear-all-polylines-from-leaflet-map
    clearMap(m) {
        for (let i in m._layers) {
            if (m._layers[i]._path != undefined) {
                try {
                    m.removeLayer(m._layers[i]);
                }
                catch (e) {
                    console.log("problem with " + e + m._layers[i]);
                }
            }
        }
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
    drawRound(lat, lng, size, countryName, countryFlag, sourceName, sourceData) {
        let self = this;
        function onMapClick(e) {
            self.geonamesAPI.getCountryName(e.latlng.lat, e.latlng.lng).then(countryCode => {
                if (countryCode !== undefined) {
                    document.querySelector('.mainContent_container').setAttribute('data-country', countryCode);
                }
            });
        }
        if (isNaN(size)) size = 10000;
        L.circle([lat, lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: size
        })
            .addTo(this.mymap)
            .on('click', onMapClick)
            .bindPopup(`<img src='${countryFlag}' class='map-flag'> ${countryName} (${sourceName}: ${sourceData})`)

    }
    /**
     * Show 'statistic rounds' for all countries.
     * @param {array} data - array of data
     * @param {string} source - title of selected parameter ("cases" by default)
     * @param {number} coefficient - how much we need to multiply selected parameter (0.1 by default)
     */
    showStatisticRounds(rawData = null,) {
        if (this.data.length == 0) this.data = this.createData(rawData);

        this.data[this.chosenItem].forEach(country => {

            this.drawRound(country.lat, country.long,
                country.score * country.caseCoefficient,
                country.country, country.countryFlag,
                country.caseTitle, country.score)
        });
    }

}

export default WorldMap;