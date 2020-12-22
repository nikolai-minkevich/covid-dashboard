const { default: create } = require("./create")

class DeployerClass {
   constructor(elementClass){
        this.elementClass = elementClass
    }
    generateLayout() {
        const deployerContainer = create('div', 'deployer__container', "+")
        deployerContainer.addEventListener("click", (e) => {
            this.changeTextContent(e.target)
            this.expand(this.elementClass)
        })
        return deployerContainer
    }
  expand(elementClass){
    document.querySelector(`${elementClass}`).classList.toggle('expand')
  }
  changeTextContent(targetDiv){
    if(targetDiv.textContent ===  "+"){
        targetDiv.textContent =  "-"
    }else{
        targetDiv.textContent = "+"
    }
  }
}
export default DeployerClass;