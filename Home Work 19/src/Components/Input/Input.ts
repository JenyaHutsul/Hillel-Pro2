import "./style.css"

export class Input{
    private readonly el : HTMLInputElement;

    constructor(){
        this.el = document.createElement("input");
    }

    render() : HTMLInputElement{
        return this.el;
    }
}