import create from "./create";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Wrapper {
  /*constructor() {
    return this.generateLayout()
  }*/
  generateLayout() {
    const footer = new Footer()
    const header = new Header()
    document.body.prepend(create("div", "wrapper", [header.generateLayout(),]));
    const main = new Main();
    main.generateGrid();
    main.generateData();
    document.querySelector(".wrapper").append(footer.generateLayout())
  }

}
export default Wrapper;
