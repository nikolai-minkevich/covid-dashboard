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
    }
  ]
  
class CountryStatistic {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    const countryStatistic = new StatisticItem("Russia Cases", demoListExample, true);
    const slider = new Slider("жужужу");
    const countryStatisticContainer = create("div", "statistic_container__prime countryStatistic_container__prime", [
        countryStatistic,
      slider
    ]);
    return countryStatisticContainer
  }
}
export default CountryStatistic;