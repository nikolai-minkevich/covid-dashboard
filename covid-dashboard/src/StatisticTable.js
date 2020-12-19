import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";
//демолист, надо переделать на результат из апи
const demoListExample = [
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
];

class StatisticTable {
  constructor(results) {
    this.results = results;
    this.choisenItem = 0;
    return this.generateLayout();
  }
  generateLayout() {
    const demoListItems = ['total', 'today', 'total per 100000', 'today per 100000'];
    console.log(this.results);
    const totalCases = this.results.cases;
    const totalDeaths = this.results.deaths;
    const totalRecovered = this.results.recovered;
    const total = [totalCases, totalDeaths, totalRecovered];
    const totalCasesPer100000 = this.results.casesPerOneMillion * 10;
    const totalDeathsPer100000 = this.results.deathsPerOneMillion * 10;
    const totalRecoveredPer100000 = this.results.recoveredPerOneMillion * 10;
    const totalPer100000 = [
      totalCasesPer100000,
      totalDeathsPer100000,
      totalRecoveredPer100000,
    ];
    const todayCases = this.results.todayCases;
    const todayDeaths = this.results.todayDeaths;
    const todayRecovered = this.results.todayRecovered;
    const today = [todayCases, todayDeaths, todayRecovered];
    const todayCasesPer100000 = Math.round(this.results.todayCases/(totalCases / totalCasesPer100000));
    const todayDeathsPer100000 = Math.round(this.results.todayDeaths/(totalDeaths / totalDeathsPer100000));
    const todayRecoveredPer100000 = Math.round(this.results.todayRecovered/(totalRecovered / totalRecoveredPer100000));
    const todayPer100000 = [todayCasesPer100000, todayDeathsPer100000, todayRecoveredPer100000]
    const demoList = [total, today, totalPer100000, todayPer100000];
    const casesContainer = new StatisticItem(
      "Cases",
      [demoList[this.choisenItem][0]],
      false
    );
    const deathsContainer = new StatisticItem(
      "Deaths",
      [demoList[this.choisenItem][1]],
      false
    );
    const recoveredContainer = new StatisticItem(
      "Recovered",
      [demoList[this.choisenItem][2]],
      false
    );
    const slider = new Slider(`${demoListItems[this.choisenItem]}`, 'statisticTable__left', 'statisticTable__right');
    //console.log(slider.classList);
    const statisticContainer = create("div", "statistic_container__prime", [
      casesContainer,
      deathsContainer,
      recoveredContainer,
      slider,
    ]);
    return statisticContainer;
  }
  changeChoisenItem(){
    
  }
}
export default StatisticTable;
