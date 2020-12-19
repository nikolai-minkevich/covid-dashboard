import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

class CountryStatistic {
  constructor() {
    this.choisenItem = 0;
    //this.countries = countries;
    //return this.generateLayout();
  }
  generateLayout(data) {
    this.countries = data
    const demoListItems = [
      "total cases",
      "total deaths",
      "total recovered",
      "total cases per 100000",
      "total deaths per 100000",
      "total recovered per 100000",
      "today cases",
      "today deaths",
      "today recovered",
      "today cases per 100000",
      "today deaths per 100000",
      "today recovered per 100000",
    ];
    const countries = this.countries;
    const demoList = [];
    for (let i = 0; i < demoListItems.length; i += 1) {
      demoList.push([]);
    }
    countries.map((item) => {
      const demoListItemsСontent = [
        item.cases,
        item.deaths,
        item.recovered,
        item.casesPerOneMillion * 10,
        item.deathsPerOneMillion * 10,
        item.recoveredPerOneMillion * 10,
        item.todayCases,
        item.todayDeaths,
        item.todayRecovered,
        (item.todayCases * 100000) / item.population,
        (item.todayDeaths * 100000) / item.population,
        (item.todayRecovered * 100000) / item.population,
      ];
      for (let i = 0; i < demoList.length; i += 1) {
        demoList[i].push({
          country: item.country,
          score: demoListItemsСontent[i],
        });
        demoList[i].sort((a, b) => (a.score < b.score ? 1 : -1));
      }
    });
    const countryStatistic = new StatisticItem(
      "Russia Cases",
      demoList[this.choisenItem],
      true
    );
    const slider = new Slider(
      `${demoListItems[this.choisenItem]}`,
      "countryStatistic__left",
      "countryStatistic__right"
    );
    const countryStatisticContainer = create(
      "div",
      "statistic_container__prime countryStatistic_container__prime",
      [countryStatistic, slider]
    );
   // this.changeChoisenItem()
   //document.querySelector(".mainContent_container").append(countryStatisticContainer)
   document.querySelector('.mainContent_container').append(countryStatisticContainer)
  }

  /*changeChoisenItem(){
    let count = 0;
    document.querySelector('.countryStatistic__left').addEventListener('click',()=>{
      count +=1;
      console.log("count", count);
    })
    document.querySelector('.countryStatistic__right').addEventListener('click',()=>{
      count -=1;
      console.log("count", count);
    })
  }*/
}
export default CountryStatistic;
