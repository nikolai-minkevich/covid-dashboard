import create from "./create";
class StatisticTable {
  constructor() {
    return generateLayout();
  }
  generateLayout() {
    const casesContainer = create(
      "div",
      "cases_container statistic_container",
      [
        create("h2", "cases_header statistic_header", "Cases"),
        create("ul", "cases_list statistic_list"),
      ]
    );
    const deathsContainer = create(
      "div",
      "deaths_container statistic_container",
      [
        create("h2", "deaths_header statistic_header", "Deaths"),
        create("ul", "deaths_list statistic_list"),
      ]
    );
    const recoveredContainer = create(
      "div",
      "recovered_container statistic_container",
      [
        create("h2", "recovered_header statistic_header", "Recovered"),
        create("ul", "recovered_list statistic_list"),
      ]
    );
    const statisticContainer = create("div", "statistic_container__prime", [
      casesContainer,
      deathsContainer,
      recoveredContainer,
    ]);
    return statisticContainer
  }
}
export default StatisticTable;
