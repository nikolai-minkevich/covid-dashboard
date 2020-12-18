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
  constructor(countries) {
    this.countries = countries;
    return this.generateLayout();
  }
  generateLayout() {
    const countries = this.countries;
    const demoList =[];
    countries.map((item) => {
      demoList.push({
        country: item.country,
        score: item.cases
      })
    })
    const countryStatistic = new StatisticItem("Russia Cases", demoList, true);
    const slider = new Slider("жужужу");
    const countryStatisticContainer = create("div", "statistic_container__prime countryStatistic_container__prime", [
        countryStatistic,
      slider
    ]);
    return countryStatisticContainer
  }
}
export default CountryStatistic;