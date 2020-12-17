import create from "./create";

class StatisticItem {
  constructor(itemName, demoList, showCountry) {
    this.demoList = demoList;
    this.itemName = itemName;
    this.showCountry = showCountry;
    return this.generateLayout();
  }
  generateLayout() {
    const statisticList = create("ul", "statistic_list");
    const demoList = this.demoList;
    for (let i = 0; i < demoList.length; i += 1) {
      const demoNumber = create("span", "demo_number", `${demoList[i].score}`);
      let demoCountry = null;
      if (this.showCountry) {
        demoCountry = create(
          "span",
          "demo_country",
          `${demoList[i].country}`
        );
      }
      const demoItem = create("div", "demo_item", [demoNumber, demoCountry]);
      statisticList.append(demoItem);
    }

    const statisticItemContainer = create("div", "statistic_container", [
      create("h2", "statistic_header", `${this.itemName}`),
      statisticList,
    ]);
    return statisticItemContainer;
  }
}

export default StatisticItem;
