import create from "./create";
class Slider{
    constructor(nameOfItem){
        this.nameOfItem = nameOfItem;
        return this.generateLayout();
    }
    generateLayout(){
        const nameOfItem = create('div', 'slider_nameOfItem', `${this.nameOfItem}`);
        create("div", "slider_container", [
            create("div", 'slider_leftArrow', "<"),
            nameOfItem,
            create("div", "slider_rightArrow", ">")
        ]
        )
    }
}
export default Slider;