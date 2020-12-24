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
    let demoItem = null;
    for (let i = 0; i < demoList.length; i += 1) {
      let demoNumber = create("span", "demo_number", `${demoList[i]}`);
      let demoCountry = null;
      // 
      if (this.showCountry) {
        //let countryHeader = document.createElement("div")
        let countryFlag = document.createElement("img")
        countryFlag.src = demoList[i].countryFlag;
        countryFlag.className = "map-flag";
        demoCountry = create("span", "demo_country", `${demoList[i].country}`,);
        //countryHeader.append(countryFlag, demoCountry)
        demoNumber = create("span", "demo_number", `${demoList[i].score}`);

        demoItem = create("div", `demo_item ${this.className}`, [countryFlag, demoCountry, demoNumber], null, ['id', `${demoList[i].countryCode}`]);
      } else {
        demoItem = create("div", `demo_item ${this.className}`, [demoNumber, demoCountry]);
      }
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
