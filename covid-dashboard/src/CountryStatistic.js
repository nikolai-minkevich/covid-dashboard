import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

class CountryStatistic {
  constructor() {
    this.choisenItem = 0;
    this.demoList = null;
    this.demoListItems = null;
  }
  generateLayout(data) {
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
        });
        demoList[i].sort((a, b) => (a.score < b.score ? 1 : -1));
      }
    });
    this.demoList = demoList;
    const countryStatistic = new StatisticItem(
      "Countries",
      demoList[this.choisenItem],
      true,
      "countryStatistic_demo_item"
    );
    const slider = new Slider(
      `${demoListItems[this.choisenItem]}`,
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
      .querySelector(".mainContent_container")
      .append(countryStatisticContainer);
    this.setupListeners();
  }

  setupListeners() {
    document
      .querySelector(".countryStatistic__left")
      .addEventListener("click", () => {
        if (this.choisenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.choisenItem - 1);
        }
      });
    document
      .querySelector(".countryStatistic__right")
      .addEventListener("click", () => {
        if (this.choisenItem === this.demoListItems.length - 1) {
          this.changeChosenItem(0);
        } else {
          this.changeChosenItem(this.choisenItem + 1);
        }
      });
  }
  changeChosenItem(number) {
    this.choisenItem = number;
    this.changeView();
  }

  changeView() {
    document.querySelectorAll(".countryStatistic_demo_item").forEach((item, index) => {
      item.firstChild.textContent = this.demoList[this.choisenItem][
        index
      ].country;
      item.lastChild.textContent = this.demoList[this.choisenItem][index].score;
    });
    document.querySelector(".countryStatistic__nameOfItem").textContent = `${this.demoListItems[this.choisenItem]}`
  }
}
export default CountryStatistic;
