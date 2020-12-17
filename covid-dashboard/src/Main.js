import create from "./create";
import StatisticTable from "./StatisticTable";
class Main {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {

    return create("main", "mainContent_container", new StatisticTable());
  }
}
export default Main;
