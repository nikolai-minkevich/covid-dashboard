import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";
class StatisticTable {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    const casesContainer = new StatisticItem("Cases");
    const deathsContainer = new StatisticItem("Deaths");
    const recoveredContainer = new StatisticItem("Recovered");
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
