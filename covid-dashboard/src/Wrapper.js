import create from "./create";
import Main from "./Main";
import Header from "./Header";

class Wrapper {
  /*constructor() {
    return this.generateLayout()
  }*/
  generateLayout() {
    document.body.prepend(create("div", "wrapper", [new Header()]));

    const main = new Main();
    main.generateLayout();

  }

}
export default Wrapper;
