import create from "./create";
import StatisticTable from "./StatisticTable";
import CountryStatistic from "./CountryStatistic";
import Covid19API from "./Covid19API";
import WorldMap from "./WorldMap";
import ChartClass from "./ChartClass";
import DeployerClass from "./DeployerClass";
import SearchBar from "./SearchBar";

class Main {
  constructor() {
    this.choseCountry = null;
    this.countriesData = null;
    this.historicalAllData = null;
  }
  generateGrid() {
    document
      .querySelector(".wrapper")
      .append(create("main", "mainContent_container"));

    const сountryStatisticDeployer = new DeployerClass(".сountryStatisticСell");

    const statisticTableDeployer = new DeployerClass(".statisticTableСell");

    const worldMapDeployer = new DeployerClass(".worldMapСell");

    const chartClassDeployer = new DeployerClass(
      ".chartClassСell",
      "chartClassDeployer"
    );
    const сountryStatisticСell = create(
      "div",
      "сountryStatisticСell",
      сountryStatisticDeployer.generateLayout()
    );
    const statisticTableСell = create(
      "div",
      "statisticTableСell",
      statisticTableDeployer.generateLayout()
    );
    const worldMapСell = create(
      "div",
      "worldMapСell",
      worldMapDeployer.generateLayout()
    );
    const chartClassСell = create(
      "div",
      "chartClassСell",
      chartClassDeployer.generateLayout()
    );
    const mapChartStatistic_container = create(
      "div",
      "mapChartStatistic_container",
      [worldMapСell, statisticTableСell, chartClassСell]
    );
    document
      .querySelector(".mainContent_container")
      .append(mapChartStatistic_container, сountryStatisticСell);
    setTimeout(() => {
      let searchBar = new SearchBar();
      searchBar.generateLayout();
    }, 2000);
  }
  generateData() {
    this.countryStatistic = new CountryStatistic();
    this.statisticTable = new StatisticTable();
    this.covid19API = new Covid19API();
    this.chartClass = new ChartClass();
    this.worldMap = new WorldMap();
    this.covid19API.getAll().then((data) => {
      const updatedDate = new Date(data.updated);
      document.querySelector('.header-date').textContent = `Data updated ${updatedDate.toISOString().toString().replace(/T/gi, ' ').slice(0, -8)}`
      this.statisticTable.createData(data);
      this.statisticTable.generateLayout();
      this.chartClass.getPopulation(data);
      this.covid19API.getHistoricalAll("all").then((data) => {
        this.historicalAllData = data
        this.chartClass.createData(data);
        this.chartClass.generateHost();
        this.chartClass.generateLayout();
      });

      this.covid19API.getCountries().then((data) => {
        this.countriesData = data;
        this.countryStatistic.createData(data);
        this.countryStatistic.generateLayout();
        this.setupListeners();
      });
    });
    this.worldMap.generateLayout();

    setTimeout(() => {
      this.covid19API.getCountries().then((data) => {
        this.worldMap.showStatisticRounds(data);
      });
    }, 3000);
  }

  generateChartCountryData() {
    this.covid19API
      .getHistoricalCountry(this.choseCountry, "all")
      .then((data) => {
        this.chartClass.getCountryData(data);
        this.chartClass.changeViewForChosenCountry(data)
      });
  }
  setupListeners() {
    document.querySelectorAll(".countryStatistic_demo_item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (document.querySelector(".countryStatistic_demo_item__chosen")) {
          document
            .querySelector(".countryStatistic_demo_item__chosen")
            .classList.remove("countryStatistic_demo_item__chosen");
        }
        this.addShowWorldResultButton();
        e.stopPropagation();
        const country = e.target.closest(".countryStatistic_demo_item");
        country.classList.add("countryStatistic_demo_item__chosen");
        if (!country) return;
        this.choseCountry = country.querySelector(".demo_country").innerHTML;
        document.querySelector(
          ".statisticTable_resultFor"
        ).textContent = this.choseCountry;
        document.querySelector(
          ".chart_resultFor"
        ).textContent = this.choseCountry;
        this.covid19API.getCountry(this.choseCountry).then((data) => {
          this.statisticTable.changeViewForChosenCountry(data);
          this.worldMap.showCountryBounds(data.countryInfo.iso2);
        });
        this.generateChartCountryData();
      });
    });
    // Add mutation observer for main
    let mainContainerObserver = new MutationObserver((mutationRecords) => {
      if (mutationRecords[0].attributeName === "data-chosenitem") {
        const chosenItem = document.querySelector(".mainContent_container").dataset.chosenitem;
        this.countryStatistic.changeChosenItem(chosenItem)
        this.chartClass.changeChosenItem(chosenItem)
        this.worldMap.changeChosenItem(chosenItem)
        if ((parseInt(chosenItem) ) % 3 === 0) {
          this.statisticTable.changeChosenItem(((parseInt(chosenItem)) / 3))
        }
      }
      if (mutationRecords[0].attributeName === "data-country") {
        const countryCode = document.querySelector(".mainContent_container")
          .dataset.country;
        if (countryCode === 'WORLD') {
          //this.removeShowWorldResultButton();
          return;
        }

        this.countriesData.map((item) => {
          if (item.countryInfo.iso2 == countryCode.trim()) {
            this.choseCountry = item.country;
            this.covid19API.getCountry(this.choseCountry).then((data) => {
              this.statisticTable.changeViewForChosenCountry(data);
            });
            this.generateChartCountryData();
            if (document.querySelector(".countryStatistic_demo_item__chosen")) {
              document
                .querySelector(".countryStatistic_demo_item__chosen")
                .classList.remove("countryStatistic_demo_item__chosen");
            }
            const country = document.querySelector(`#${countryCode}`);
            country.classList.add("countryStatistic_demo_item__chosen");
            this.addShowWorldResultButton();
            // Scroll to element
            country.parentNode.scrollTop = (country.offsetTop - country.parentNode.offsetHeight / 2 - country.offsetHeight);
            document.querySelector(
              ".statisticTable_resultFor"
            ).textContent = this.choseCountry;
            document.querySelector(
              ".chart_resultFor"
            ).textContent = this.choseCountry;
          }
        });
      }
    });
    mainContainerObserver.observe(
      document.querySelector(".mainContent_container"),
      {
        attributes: true,
      }
    );
  }
  addShowWorldResultButton() {
    document.querySelectorAll(".button_showWorldResult").forEach((item) => {
      item.classList.remove("button_showWorldResult__hidden");
      item.addEventListener("click", () => {
        this.removeShowWorldResultButton();
      });
    });
  }
  removeShowWorldResultButton() {
    document.querySelectorAll(".button_showWorldResult").forEach((item) => {
      item.classList.add("button_showWorldResult__hidden");
    });
    this.choseCountry = null;
    this.covid19API.getAll().then((data) => {
      this.statisticTable.changeViewForChosenCountry(data);
    });
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.chartClass.createData(this.historicalAllData);
    this.chartClass.changeView()
    if (document.querySelector(".countryStatistic_demo_item__chosen")) {
      document
        .querySelector(".countryStatistic_demo_item__chosen")
        .classList.remove("countryStatistic_demo_item__chosen");
    }
    if (document.querySelector(".statisticTable_resultFor")) {
      document.querySelector(".statisticTable_resultFor").textContent =
        "the world";
    }
    if (document.querySelector(".chart_demo_item__chosen")) {
      document
        .querySelector(".chart_demo_item__chosen")
        .classList.remove("chart_demo_item__chosen");
    }
    if (document.querySelector(".chart_resultFor")) {
      document.querySelector(".chart_resultFor").textContent = "the world";
    }
  }
}
export default Main;
