import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

class StatisticTable {
  constructor() {
    this.choisenItem = 0;
    this.data = null;
    this.demoList = null;
    this.demoListItems = null;
    this.choisenCountryData = null;
  }
  createData(data){
    this.data = data;
    const demoListItems = [
      "total cases / deaths / recovered",
      "today cases / deaths / recovered",
      "total cases / deaths / recovered per 100000",
      "today cases / deaths / recovered per 100000",
    ];
    this.demoListItems = demoListItems;
    const totalCases = this.data.cases;
    const totalDeaths = this.data.deaths;
    const totalRecovered = this.data.recovered;
    const total = [totalCases, totalDeaths, totalRecovered];
    const totalCasesPer100000 = this.data.casesPerOneMillion * 10;
    const totalDeathsPer100000 = this.data.deathsPerOneMillion * 10;
    const totalRecoveredPer100000 = this.data.recoveredPerOneMillion * 10;
    const totalPer100000 = [
      totalCasesPer100000,
      totalDeathsPer100000,
      totalRecoveredPer100000,
    ];
    const todayCases = this.data.todayCases;
    const todayDeaths = this.data.todayDeaths;
    const todayRecovered = this.data.todayRecovered;
    const today = [todayCases, todayDeaths, todayRecovered];
    const todayCasesPer100000 = Math.round(
      this.data.todayCases / (totalCases / totalCasesPer100000)
    );
    const todayDeathsPer100000 = Math.round(
      this.data.todayDeaths / (totalDeaths / totalDeathsPer100000)
    );
    const todayRecoveredPer100000 = Math.round(
      this.data.todayRecovered / (totalRecovered / totalRecoveredPer100000)
    );
    const todayPer100000 = [
      todayCasesPer100000,
      todayDeathsPer100000,
      todayRecoveredPer100000,
    ];
    const demoList = [total, today, totalPer100000, todayPer100000];
    this.demoList = demoList;
  }
  generateLayout() {
    const casesContainer = new StatisticItem(
      "Cases",
      [this.demoList[this.choisenItem][0]],
      false,
      "statisticTable_cases"
    );
    const deathsContainer = new StatisticItem(
      "Deaths",
      [this.demoList[this.choisenItem][1]],
      false,
      "statisticTable_deaths"
    );
    const recoveredContainer = new StatisticItem(
      "Recovered",
      [this.demoList[this.choisenItem][2]],
      false,
      "statisticTable_recovered"
    );
    const slider = new Slider(
      `${this.demoListItems[this.choisenItem]}`,
      "statisticTable__left",
      "statisticTable__right",
      "statisticTable__nameOfItem"
    );
    const statisticContainer = create("div", "statistic_container__prime", [
      casesContainer,
      deathsContainer,
      recoveredContainer,
      slider,
    ]);
    document.querySelector(".mainContent_container").append(statisticContainer);
    this.setupListeners();
  }
  setupListeners() {
    document
      .querySelector(".statisticTable__left")
      .addEventListener("click", () => {
        if (this.choisenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.choisenItem - 1);
        }
      });
    document
      .querySelector(".statisticTable__right")
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
    document.querySelector(".statisticTable_cases").textContent = this.demoList[
      this.choisenItem
    ][0];
    document.querySelector(
      ".statisticTable_deaths"
    ).textContent = this.demoList[this.choisenItem][1];
    document.querySelector(
      ".statisticTable_recovered"
    ).textContent = this.demoList[this.choisenItem][2];
    document.querySelector(".statisticTable__nameOfItem").textContent = `${
      this.demoListItems[this.choisenItem]
    }`;
  }
  changeViewForChosenCountry(data){
    this.choisenCountryData = data;
    this.createData(this.choisenCountryData)
console.log("this.choisenCountryData ",this.choisenCountryData );
    this.changeView()
  }
}
export default StatisticTable;
