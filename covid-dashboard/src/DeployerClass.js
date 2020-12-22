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
            //this.expandChart()
        })
        return deployerContainer
    }
  expand(elementClass){
    document.querySelector(`${elementClass}`).classList.toggle('expand')
  }
  /*expandChart(){
    document.querySelector(".hostForChart").classList.toggle('expandChart')
    if(document.querySelector(".expandChart")){
        document.querySelector(".hostForChart").height = 800;
        document.querySelector(".hostForChart").width = window.innerWidth;
    }else{
        document.querySelector(".hostForChart").height = 300;
        document.querySelector(".hostForChart").width = 400;
    }
  }*/



  changeTextContent(targetDiv){
    if(targetDiv.textContent ===  "+"){
        targetDiv.textContent =  "-"
    }else{
        targetDiv.textContent = "+"
    }
  }
}
export default DeployerClass;