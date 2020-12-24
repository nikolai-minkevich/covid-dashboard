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

    const coefPer1000000 = 1000000

    countries.map((item) => {
      if (item.population < 1) item.population = coefPer1000000;
      let casesPer1000000 = Math.round(item.cases * coefPer1000000 / item.population);
      if (isNaN(casesPer1000000) || undefined) { casesPer1000000 = 0 }

      let deathsPer1000000 = Math.round(item.deaths * coefPer1000000 / item.population);
      if (isNaN(deathsPer1000000) || undefined) { deathsPer1000000 = 0 }

      let recoveredPer1000000 = Math.round(item.cases * coefPer1000000 / item.population);
      if (isNaN(recoveredPer1000000) || undefined) { recoveredPer1000000 = 0 }

      let todayCasesPer1000000 = Math.round(item.todayCases * coefPer1000000 / item.population);
      if (isNaN(todayCasesPer1000000) || undefined) { todayCasesPer1000000 = 0 }

      let todayDeathsPer1000000 = Math.round(item.todayDeaths * coefPer1000000 / item.population);
      if (isNaN(todayDeathsPer1000000) || undefined) { todayDeathsPer1000000 = 0 }

      let todayRecoveredPer1000000 = Math.round(item.todayRecovered * coefPer1000000 / item.population);
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
        demoList[i].push({
          country: item.country,
          score: demoListItemsСontent[i],
          countryCode: item.countryInfo.iso2,
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
        if (document.querySelector(".countryStatistic_demo_item__chosen")) {
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
        if (document.querySelector(".countryStatistic_demo_item__chosen")) {
          document.querySelector(".countryStatistic_demo_item__chosen").classList.remove("countryStatistic_demo_item__chosen")
        }
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
      this.changeView();
    }


  }

  changeView() {
    document.querySelectorAll(".countryStatistic_demo_item").forEach((item, index) => {
      item.childNodes[0].src = this.demoList[this.chosenItem][index].countryFlag;
      item.childNodes[1].textContent = this.demoList[this.chosenItem][index].country;
      item.childNodes[2].textContent = this.demoList[this.chosenItem][index].score;
    });
    document.querySelector(".countryStatistic__nameOfItem").textContent = `${this.demoListItems[this.chosenItem]}`
  }

}
export default CountryStatistic;
