import create from "./create";
class Header {
  constructor() {

  }
  generateLayout() {
    let headerTitle = create("h1", null, "COVID-19 Dashboard")
    let headerDate = create("div", "header-date", "")
    //return create("header", null, create("h1", null, "COVID-19 Dashboard"));
    return create("header", null, [headerTitle, headerDate]);
  }
}
export default Header;
