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
    console.log('countries', countries);
    const demoList = [];
    for (let i = 0; i < demoListItems.length; i += 1) {
      demoList.push([]);
    }
    const k = 1000000
    
    countries.map((item) => {
      let casesPer1000000 = Math.round(item.cases*k/item.population);
      if(casesPer1000000 ==NaN|| undefined){casesPer1000000 = 0}
  
      let deathsPer1000000 = Math.round(item.deaths*k/item.population);
      if(deathsPer1000000 ==NaN|| undefined){deathsPer1000000 = 0}
  
      let recoveredPer1000000 = Math.round(item.cases*k/item.population);
      if(recoveredPer1000000 ==NaN|| undefined){recoveredPer1000000 = 0}
  
      let todayCasesPer1000000 = Math.round(item.todayCases*k/item.population);
      if(todayCasesPer1000000 ==NaN|| undefined){todayCasesPer1000000 = 0}
  
      let todayDeathsPer1000000 = Math.round(item.todayDeaths*k/item.population);
      if(todayDeathsPer1000000 == NaN || undefined){todayDeathsPer1000000 = 0}
  
      let todayRecoveredPer1000000 = Math.round(item.todayRecovered*k/item.population);
      if(todayRecoveredPer1000000 ==NaN|| undefined){todayRecoveredPer1000000 = 0}
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
        demoList[i].push({
          country: item.country,
          score: demoListItemsСontent[i],
          countryCode:  item.countryInfo.iso2,
          countryFlag: item.countryInfo.flag
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
