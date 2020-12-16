import { create } from "./create";
class Main {
  constructor(){
    return this.generateLayout()
  }
  generateLayout() {
    return create("main", "mainContent_container");
  }
}
export default Main;