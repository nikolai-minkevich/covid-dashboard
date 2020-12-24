const { default: create } = require("./create")

class DeployerClass {
   constructor(elementClass, deployerClass){
        this.elementClass = elementClass
        this.deployerClass = deployerClass
    }
    generateLayout() {
        const deployerContainer = create('div', `deployer__container ${this.deployerClass}`, "+")
        deployerContainer.addEventListener("click", (e) => {
            document.querySelector("body").classList.toggle("hidden")
            document.querySelector("header").classList.toggle("header_hidden")
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