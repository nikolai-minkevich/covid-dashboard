import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";
class CountryStatistic {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    const countryStatistic = new StatisticItem("Russia Cases");
    const slider = new Slider("жужужу");
    const countryStatisticContainer = create("div", "statistic_container__prime countryStatistic_container__prime", [
        countryStatistic,
      slider
    ]);
    return countryStatisticContainer
  }
}
export default CountryStatistic;