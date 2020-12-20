import create from "./create";
import Main from "./Main";
import Header from "./Header";
import WorldMap from "./WorldMap";
class Wrapper {
  /*constructor() {
    return this.generateLayout()
  }*/
  generateLayout() {
    document.body.prepend(create("div", "wrapper", [new Header()]));

    const main = new Main()
    main.generateLayout()

    const worldMap = new WorldMap()
    worldMap.generateLayout();

  }

}
export default Wrapper;
