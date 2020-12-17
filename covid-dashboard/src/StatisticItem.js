import create from "./create";

class StatisticItem {
  constructor(itemName) {
    this.itemName=itemName
    return this.generateLayout();
  }
  generateLayout() {
    const  statisticItemContainer = create(
      "div",
      "statistic_container",
      [
        create("h2", "statistic_header", `${this.itemName}`),
        create("ul", "statistic_list"),
      ]
    );
    return statisticItemContainer;
  }
};

export default StatisticItem;