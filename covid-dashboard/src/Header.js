import create from "./create";
class Header {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    return create("div", null, create("h1", null, "COVID-19 Dashboard"));
  }
}
export default Header;
