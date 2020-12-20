import create from "./create";
import StatisticTable from "./StatisticTable";
import CountryStatistic from "./CountryStatistic";
import Covid19API from "./Covid19API";

class Main {
  constructor() {
    this.choseCountry = null;
    this.countriesData = null;
  }
  generateLayout() {
    this.countryStatistic = new CountryStatistic();
    this.statisticTable = new StatisticTable();
    document
      .querySelector(".wrapper")
      .append(create("main", "mainContent_container"));
    this.covid19API = new Covid19API();
    this.covid19API.getCountries().then((data) => {
      this.countriesData = data;
      this.countryStatistic.createData(data);
      this.countryStatistic.generateLayout();
      this.setupListeners();
    });
    this.covid19API.getAll().then((data) => {
      this.statisticTable.createData(data);
      this.statisticTable.generateLayout();
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
        this.covid19API.getCountry(this.choseCountry).then((data) => {
          this.statisticTable.changeViewForChosenCountry(data);
        });
        //this.createShowWorldResultButton()
      });
    });
    // Add mutation observer for main
    let mainContainerObserver = new MutationObserver((mutationRecords) => {
      if (mutationRecords[0].attributeName === "data-country") {
        const countryCode = document.querySelector(".mainContent_container")
          .dataset.country;
        this.countriesData.map((item) => {
          if (item.countryInfo.iso2 == countryCode.trim()) {
            this.choseCountry = item.country;
            if (document.querySelector(".countryStatistic_demo_item__chosen")) {
              document
                .querySelector(".countryStatistic_demo_item__chosen")
                .classList.remove("countryStatistic_demo_item__chosen");
            }
            const country = document.querySelector(`#${countryCode}`);
            country.classList.add("countryStatistic_demo_item__chosen");
            this.addShowWorldResultButton();
            document.querySelector(
              ".statisticTable_resultFor"
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
    const showWorldResultButton = document.querySelector(
      ".button_showWorldResult"
    );
    showWorldResultButton.classList.remove("button_showWorldResult__hidden");
    showWorldResultButton.addEventListener("click", () => {
      this.removeShowWorldResultButton()
    })
  }
  removeShowWorldResultButton(){
    const showWorldResultButton = document.querySelector(
      ".button_showWorldResult"
    );
    this.choseCountry = null;
    showWorldResultButton.classList.add("button_showWorldResult__hidden");
    this.covid19API.getAll().then((data) => {
      this.statisticTable.changeViewForChosenCountry(data);
    });
    if(document.querySelector(".countryStatistic_demo_item__chosen")){
      document.querySelector(".countryStatistic_demo_item__chosen").classList.remove("countryStatistic_demo_item__chosen")
    }
    if(document.querySelector(".statisticTable_resultFor")){
      document.querySelector(".statisticTable_resultFor").textContent = "the world"
    }
  }
}
export default Main;
