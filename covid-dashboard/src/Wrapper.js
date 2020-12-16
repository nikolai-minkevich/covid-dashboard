import create from "./create";
import Main from "./Main";
import Header from "./Header";
class Wrapper {
  constructor() {
    return this.generateLayout();
  }
  generateLayout() {
    return create("div", "wraper", [new Header(), new Main()]);
  }
}
export default Wrapper;
