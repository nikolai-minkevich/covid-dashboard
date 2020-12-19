import create from "./create";
class Slider{
    constructor(nameOfItem, leftArrowClassName, rightArrowClassName, nameOfItemClassName){
        this.nameOfItem = nameOfItem;
        this.leftArrowClassName = leftArrowClassName;
        this.rightArrowClassName = rightArrowClassName;
        this.nameOfItemClassName = nameOfItemClassName;
        return this.generateLayout();
    }
    generateLayout(){
        const nameOfItem = create('div', 'slider_nameOfItem', `${this.nameOfItem}`);
        const leftArrow = create("div", 'slider_leftArrow', "<");
        const rightArrow = create("div", "slider_rightArrow", ">");
        leftArrow.classList.add(`${this.leftArrowClassName}`);
        rightArrow.classList.add(`${this.rightArrowClassName}`);
        nameOfItem.classList.add(`${this.nameOfItemClassName}`);
        const result = create("div", "slider_container", [
            leftArrow,
            nameOfItem,
            rightArrow
        ]
        )
        return result;
    }
}
export default Slider;