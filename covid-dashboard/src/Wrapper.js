import create from "./create";
import Main from "./Main";
import Header from "./Header";

class Wrapper {
  /*constructor() {
    return this.generateLayout()
  }*/
  generateLayout() {
    let header = new Header()
    document.body.prepend(create("div", "wrapper", [header.generateLayout()]));
    const main = new Main();
    main.generateGrid();
    main.generateData();
  }

}
export default Wrapper;
