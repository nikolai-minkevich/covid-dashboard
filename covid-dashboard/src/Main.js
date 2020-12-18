import create from "./create";
import StatisticTable from "./StatisticTable";
import CountryStatistic from "./CountryStatistic";
import Covid19API from "./Covid19API"
class Main {
  /*constructor() {
    //return this.generateLayout();
  }*/
  test(){
    console.log("skjldsdfsljf");
  }
  generateLayout() {
    const covid19API = new Covid19API();
    covid19API.getCountries().then(data => {
      document.querySelector('.wrapper').append(
        create("main", "mainContent_container", [new CountryStatistic(data), new StatisticTable()])
      )
    });

    //return ;
  }
}
export default Main;
