import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

class CountryStatistic {
  constructor() {
    this.chosenItem = 0;
    this.demoList = null;
    this.demoListItems = null;
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
    countries.map((item) => {
      const demoListItemsСontent = [
        item.cases,
        item.deaths,
        item.recovered,
        item.casesPerOneMillion * 10,
        item.deathsPerOneMillion * 10,
        item.recoveredPerOneMillion * 10,
        item.todayCases,
        item.todayDeaths,
        item.todayRecovered,
        (item.todayCases * 100000) / item.population,
        (item.todayDeaths * 100000) / item.population,
        (item.todayRecovered * 100000) / item.population,
      ];
      for (let i = 0; i < demoList.length; i += 1) {
        demoList[i].push({
          country: item.country,
          score: demoListItemsСontent[i],
          countryCode:  item.countryInfo.iso2
        });
        demoList[i].sort((a, b) => (a.score < b.score ? 1 : -1));
      }
    });
    this.demoList = demoList;
  }
  generateLayout() {
    const countryStatistic = new StatisticItem(
      "Countries",
      this.demoList[this.chosenItem],
      true,
      "countryStatistic_demo_item"
    );
    const slider = new Slider(
      `${this.demoListItems[this.chosenItem]}`,
      "countryStatistic__left",
      "countryStatistic__right",
      "countryStatistic__nameOfItem"
    );
    const countryStatisticContainer = create(
      "div",
      "statistic_container__prime countryStatistic_container__prime",
      [countryStatistic, slider]
    );
    //
    //document.querySelector(".mainContent_container").append(countryStatisticContainer)
    document
      .querySelector(".сountryStatisticСell")
      .append(countryStatisticContainer);
    this.setupListeners();
  }

  setupListeners() {
    document
      .querySelector(".countryStatistic__left")
      .addEventListener("click", () => {
        if(document.querySelector(".countryStatistic_demo_item__chosen")){
          document.querySelector(".countryStatistic_demo_item__chosen").classList.remove("countryStatistic_demo_item__chosen")
        }
        if (this.chosenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.chosenItem - 1);
        }
      });
    document
      .querySelector(".countryStatistic__right")
      .addEventListener("click", () => {
        if(document.querySelector(".countryStatistic_demo_item__chosen")){
          document.querySelector(".countryStatistic_demo_item__chosen").classList.remove("countryStatistic_demo_item__chosen")
        }
        if (this.chosenItem === this.demoListItems.length - 1) {
          this.changeChosenItem(0);
        } else {
          this.changeChosenItem(this.chosenItem + 1);
        }
      });
  }
  changeChosenItem(number) {
    this.chosenItem = number;
    this.changeView();
  }

  changeView() {
    document.querySelectorAll(".countryStatistic_demo_item").forEach((item, index) => {
      item.firstChild.textContent = this.demoList[this.chosenItem][
        index
      ].score;
      item.lastChild.textContent = this.demoList[this.chosenItem][index].country;
    });
    document.querySelector(".countryStatistic__nameOfItem").textContent = `${this.demoListItems[this.chosenItem]}`
  }
  
}
export default CountryStatistic;
