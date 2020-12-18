import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";
//демолист, надо переделать на результат из апи
const demoListExample = [
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  },
  {
    country: "Russia",
    score: 2000
  }
]



class StatisticTable {
  constructor(results) {
    this.results = results;
    this.choisenItem = 0;
    return this.generateLayout();
  }
  generateLayout() {
    const totalCases = this.results.cases;
    const totalDeaths =this.results.deaths;
    const totalRecovered =this.results.recovered;
    const total = [totalCases, totalDeaths, totalRecovered];
    const todayCases = this.results.todayCases;
    const todayDeaths = this.results.todayDeaths;
    const todayRecovered = this.results.todayRecovered;
    const today = [todayCases, todayDeaths, todayRecovered];
    const demoList =[total, today]
    const casesContainer = new StatisticItem("Cases", [demoList[this.choisenItem][0]], false);
    const deathsContainer = new StatisticItem("Deaths", [demoList[this.choisenItem][1]], false);
    const recoveredContainer = new StatisticItem("Recovered", [demoList[this.choisenItem][2]], false);
    const slider = new Slider("жужужу");
    const statisticContainer = create("div", "statistic_container__prime", [
      casesContainer,
      deathsContainer,
      recoveredContainer,
      slider
    ]);
    return statisticContainer
  }
}
export default StatisticTable;
