const { default: create } = require("./create")

class DeployerClass {
   constructor(elementClass){
        this.elementClass = elementClass
    }
    generateLayout() {
        const deployerContainer = create('div', 'deployer__container', "+")
        deployerContainer.addEventListener("click", () => {
            this.expand(this.elementClass)
        })
        return deployerContainer
    }
  expand(elementClass){
      
    document.querySelector(`${elementClass}`).classList.toggle('expand')
  }
}
export default DeployerClass;