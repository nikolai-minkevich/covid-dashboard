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
    const countryStatistic = new CountryStatistic();
    this.statisticTable = new StatisticTable();
    document
      .querySelector(".wrapper")
      .append(create("main", "mainContent_container"));
    const covid19API = new Covid19API();
    covid19API.getCountries().then((data) => {
      this.countriesData= data;
      countryStatistic.generateLayout(data);
      this.setupListeners();
    });
    covid19API.getAll().then((data) => {
      this.statisticTable.createData(data);
      this.statisticTable.generateLayout();
    });
  }
  setupListeners() {
    document.querySelectorAll(".countryStatistic_demo_item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if(document.querySelector(".countryStatistic_demo_item__chosen")){
          document.querySelector(".countryStatistic_demo_item__chosen").classList.remove("countryStatistic_demo_item__chosen")
        }
        e.stopPropagation();
        const country = e.target.closest(".countryStatistic_demo_item");
        country.classList.add("countryStatistic_demo_item__chosen")
        if (!country) return;
        this.choseCountry = country.querySelector(".demo_country").innerHTML;
        const covid19API = new Covid19API();
        covid19API.getCountry(this.choseCountry).then((data) => {
          this.statisticTable.changeViewForChosenCountry(data);
        });
      });
    });

    // Add mutation observer for main
    let mainContainerObserver = new MutationObserver(mutationRecords => {
      if (mutationRecords[0].attributeName === 'data-country') {
        const countryCode = document.querySelector('.mainContent_container').dataset.country
        console.log("countryCode", countryCode);
          this.countriesData.map((item)=>{
            if (item.countryInfo.iso2 == countryCode.trim()){
              console.log("item.countryInfo.iso2", item.countryInfo.iso2, countryCode);
            }
        });
      }
    });
    mainContainerObserver.observe(document.querySelector('.mainContent_container'), {
      attributes: true
    });
  }


}
export default Main;
