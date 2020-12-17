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
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    const casesContainer = new StatisticItem("Cases", demoListExample);
    const deathsContainer = new StatisticItem("Deaths", demoListExample);
    const recoveredContainer = new StatisticItem("Recovered", demoListExample);
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
