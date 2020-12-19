import create from "./create";
import Slider from "./Slider";
import StatisticItem from "./StatisticItem";

//демолист, надо переделать на результат из апи
const demoListExample = [
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
  {
    country: "Russia",
    score: 2000,
  },
];

class CountryStatistic {
  constructor(countries) {
    this.choisenItem = 0;
    this.countries = countries;
    return this.generateLayout();
  }
  generateLayout() {
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
    console.log(this.countries, "countries");
    const demoList = [];
    for (let i = 0; i <demoListItems.length; i += 1){
      demoList.push([])
    }
    countries.map((item) => {
      demoList[0].push({
        country: item.country,
        score: item.cases,
      });
      demoList[1].push({
        country: item.country,
        score: item.deaths,
      });
      demoList[2].push({
        country: item.country,
        score: item.recovered,
      });

      demoList[3].push({
        country: item.country,
        score: item.casesPerOneMillion * 10,
      });


      demoList[4].push({
        country: item.country,
        score: item.deathsPerOneMillion * 10,
      });


      demoList[5].push({
        country: item.country,
        score: item.recoveredPerOneMillion * 10,
      });


      demoList[6].push({
        country: item.country,
        score: item.todayCases,
      });
      demoList[7].push({
        country: item.country,
        score: item.todayDeaths,
      });
      demoList[8].push({
        country: item.country,
        score: item.todayRecovered,
      });
      demoList[9].push({
        country: item.country,
        score: (item.todayCases * 100000)/item.population,
      });
      demoList[10].push({
        country: item.country,
        score: (item.todayDeaths* 100000)/item.population,
      });
      demoList[11].push({
        country: item.country,
        score: (item.todayRecovered* 100000)/item.population,
      });
    });
    for(let i =0; i<demoList.length; i+=1){
      demoList[i].sort((a, b) => (a.score < b.score ? 1 : -1));
    }
    const countryStatistic = new StatisticItem("Russia Cases", demoList[this.choisenItem], true);
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
    return countryStatisticContainer;
  }
}
export default CountryStatistic;
