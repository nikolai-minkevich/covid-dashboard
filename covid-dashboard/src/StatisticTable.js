import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";
class StatisticTable {
  constructor() {
    this.chosenItem = 0;
    this.data = null;
    this.demoList = null;
    this.demoListItems = null;
    this.choisenCountryData = null;
  }
  createData(data){
    this.data = data;


    const demoListItems = [
      "total cases / deaths / recovered",
      "total cases / deaths / recovered per 100000",
      "today cases / deaths / recovered",
      "today cases / deaths / recovered per 100000",
    ];
    this.demoListItems = demoListItems;
    const totalCases = this.data.cases;
    const totalDeaths = this.data.deaths;
    const totalRecovered = this.data.recovered;
    const total = [totalCases, totalDeaths, totalRecovered];
    const coefPer1000000 = 10
    const totalCasesPer100000 = this.data.casesPerOneMillion * coefPer1000000;
    const totalDeathsPer100000 = this.data.deathsPerOneMillion * coefPer1000000;
    const totalRecoveredPer100000 = this.data.recoveredPerOneMillion * coefPer1000000;
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
    const demoList = [total,totalPer100000, today, todayPer100000];
    this.demoList = demoList;
  }
  generateLayout() {
    const statisticTableHeader = create('div', 'statisticTable_header', 
    create('div','statisticTable_header_resultFor',[
      create('div','statisticTable_header_resultFor_string',[
        create("h2", "statisticTable_resultFor", "the world")
      ] ),
      create("div", "button_showWorldResult button_showWorldResult__hidden", "results for the world")
    ])
  )
    const casesContainer = new StatisticItem(
      "Cases",
      [this.demoList[this.chosenItem][0]],
      false,
      "statisticTable_cases"
    );
    const deathsContainer = new StatisticItem(
      "Deaths",
      [this.demoList[this.chosenItem][1]],
      false,
      "statisticTable_deaths"
    );
    const recoveredContainer = new StatisticItem(
      "Recovered",
      [this.demoList[this.chosenItem][2]],
      false,
      "statisticTable_recovered"
    );
    const slider = new Slider(
      `${this.demoListItems[this.chosenItem]}`,
      "statisticTable__left",
      "statisticTable__right",
      "statisticTable__nameOfItem"
    );
    const statisticContainer = create("div", "statistic_container__prime", [
      statisticTableHeader,
      casesContainer,
      deathsContainer,
      recoveredContainer,
      slider,
    ]);
    document.querySelector(".statisticTableСell").append(statisticContainer);
    this.setupListeners();
  }
  setupListeners() {
    document
      .querySelector(".statisticTable__left")
      .addEventListener("click", () => {
        if (this.chosenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.chosenItem - 1);
        }
      });
    document
      .querySelector(".statisticTable__right")
      .addEventListener("click", () => {
        if (this.chosenItem === this.demoListItems.length - 1) {
          this.changeChosenItem(0);
        } else {
          this.changeChosenItem(this.chosenItem + 1);
        }
      });
  }
  changeChosenItem(number) {
    if (this.chosenItem !== parseInt(number)) {
      document.querySelector('.mainContent_container').setAttribute('data-chosenitem', parseInt(number)*3);
      this.chosenItem = number;
      this.changeView();
  }

  
  }

  changeView() {
    document.querySelector(".statisticTable_cases").textContent = this.demoList[
      this.chosenItem
    ][0];
    document.querySelector(
      ".statisticTable_deaths"
    ).textContent = this.demoList[this.chosenItem][1];
    document.querySelector(
      ".statisticTable_recovered"
    ).textContent = this.demoList[this.chosenItem][2];
    document.querySelector(".statisticTable__nameOfItem").textContent = `${
      this.demoListItems[this.chosenItem]
    }`;
  }
  changeViewForChosenCountry(data){
    this.choisenCountryData = data;
    this.createData(this.choisenCountryData)
    this.changeView()
  }
}
export default StatisticTable;
