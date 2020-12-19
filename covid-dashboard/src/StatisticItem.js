import create from "./create";









class StatisticItem {
  constructor(itemName, demoList, showCountry, className) {
    this.demoList = demoList;
    this.itemName = itemName;
    this.showCountry = showCountry;
    this.className = className;
    return this.generateLayout();
  }
  generateLayout() {
    const statisticList = create("ul", "statistic_list");
    const demoList = this.demoList;
    for (let i = 0; i < demoList.length; i += 1) {
      let demoNumber = create("span", "demo_number", `${demoList[i]}`);
      let demoCountry = null;
      if (this.showCountry) {
        demoNumber = create("span", "demo_number", `${demoList[i].score}`);
        demoCountry = create(
          "span",
          "demo_country",
          `${demoList[i].country}`
        );
      }
      const demoItem = create("div", `demo_item ${this.className}`, [demoNumber, demoCountry]);
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
