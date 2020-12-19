import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

class StatisticTable {
  constructor() {
    this.choisenItem = 0;
    this.demoList = null;
    this.demoListItems = null;
    //return this.generateLayout();
  }
  generateLayout(data) {
    this.countries = data;
    console.log("this.countries", this.countries);
    const demoListItems = [
      "total cases / deaths / recovered",
      "today cases / deaths / recovered",
      "total cases / deaths / recovered per 100000",
      "today cases / deaths / recovered per 100000",
    ];
    this.demoListItems =  demoListItems;
    const totalCases = this.countries.cases;
    const totalDeaths = this.countries.deaths;
    const totalRecovered = this.countries.recovered;
    const total = [totalCases, totalDeaths, totalRecovered];
    const totalCasesPer100000 = this.countries.casesPerOneMillion * 10;
    const totalDeathsPer100000 = this.countries.deathsPerOneMillion * 10;
    const totalRecoveredPer100000 = this.countries.recoveredPerOneMillion * 10;
    const totalPer100000 = [
      totalCasesPer100000,
      totalDeathsPer100000,
      totalRecoveredPer100000,
    ];
    const todayCases = this.countries.todayCases;
    const todayDeaths = this.countries.todayDeaths;
    const todayRecovered = this.countries.todayRecovered;
    const today = [todayCases, todayDeaths, todayRecovered];
    const todayCasesPer100000 = Math.round(
      this.countries.todayCases / (totalCases / totalCasesPer100000)
    );
    const todayDeathsPer100000 = Math.round(
      this.countries.todayDeaths / (totalDeaths / totalDeathsPer100000)
    );
    const todayRecoveredPer100000 = Math.round(
      this.countries.todayRecovered / (totalRecovered / totalRecoveredPer100000)
    );
    const todayPer100000 = [
      todayCasesPer100000,
      todayDeathsPer100000,
      todayRecoveredPer100000,
    ];
    const demoList = [total, today, totalPer100000, todayPer100000];
    this.demoList = demoList;
    const casesContainer = new StatisticItem(
      "Cases",
      [demoList[this.choisenItem][0]],
      false,
      "statisticTable_cases"
    );
    const deathsContainer = new StatisticItem(
      "Deaths",
      [demoList[this.choisenItem][1]],
      false,
      "statisticTable_deaths"
    );
    const recoveredContainer = new StatisticItem(
      "Recovered",
      [demoList[this.choisenItem][2]],
      false,
      "statisticTable_recovered"
    );
    const slider = new Slider(
      `${demoListItems[this.choisenItem]}`,
      "statisticTable__left",
      "statisticTable__right",
      "statisticTable__nameOfItem"
    );
    //console.log(slider.classList);
    const statisticContainer = create("div", "statistic_container__prime", [
      casesContainer,
      deathsContainer,
      recoveredContainer,
      slider,
    ]);
    document
    .querySelector(".mainContent_container")
    .append(statisticContainer);
    this.setupListeners();
  }
  setupListeners() {
    document
      .querySelector(".statisticTable__left")
      .addEventListener("click", () => {
        //console.log("ks;flss;f;sf");
        if (this.choisenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.choisenItem - 1);
        }
      });
    document
      .querySelector(".statisticTable__right")
      .addEventListener("click", () => {
        //console.log('kljdsfksjkjlsfslkf');
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

    document.querySelector(".statisticTable_cases").textContent = `${this.demoList[this.choisenItem][0]}`
    document.querySelector(".statisticTable_deaths").textContent = `${this.demoListItems[this.choisenItem][1]}`
    document.querySelector(".statisticTable_recovered").textContent = `${this.demoListItems[this.choisenItem][2]}`
    /*document.querySelectorAll(".statisticTable_demo_item").forEach((item, index) => {
      item.firstChild.textContent = this.demoList[this.choisenItem][
        index
      ].country;
      item.lastChild.textContent = this.demoList[this.choisenItem][index].score;
    });*/
    document.querySelector(".statisticTable__nameOfItem").textContent = `${this.demoListItems[this.choisenItem]}`
  }
}
export default StatisticTable;
