import create from "./create";
import StatisticTable from "./StatisticTable";
import CountryStatistic from "./CountryStatistic";
class Main {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    return create("main", "mainContent_container", [new CountryStatistic(), new StatisticTable()]);
  }
}
export default Main;
