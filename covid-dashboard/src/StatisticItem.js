import create from "./create";

class StatisticItem {
  constructor(itemName, demoList, showCountry, className, countryFlag = "https://disease.sh/assets/img/flags/in.png") {
    this.demoList = demoList;
    this.itemName = itemName;
    this.showCountry = showCountry;
    this.className = className;
    this.countryFlag = countryFlag;
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
        let countryFlag = create("img", "map-flag", this.countryFlag);
        demoNumber = create("span", "demo_number", `${demoList[i].score}`);
        demoCountry = create("span", "demo_country", `${demoList[i].country}`);
        demoItem = create("div", `demo_item ${this.className}`, [countryFlag, demoNumber, demoCountry], null, ['id', `${demoList[i].countryCode}`]);
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
