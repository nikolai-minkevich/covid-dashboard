import create from "./create";
import StatisticTable from "./StatisticTable";
import CountryStatistic from "./CountryStatistic";
import Covid19API from "./Covid19API"
class Main {
  /*constructor() {
    //return this.generateLayout();
  }*/
  generateLayout() {
    const countryStatistic = new CountryStatistic()
    document.querySelector('.wrapper').append(create("main", "mainContent_container"))
    const covid19API = new Covid19API();
    covid19API.getCountries().then(data => {
      countryStatistic.generateLayout(data)
    });
    covid19API.getAll().then(data => {
      document.querySelector('.mainContent_container').append(
        new StatisticTable(data)
      )
    });
  }
}
export default Main;
