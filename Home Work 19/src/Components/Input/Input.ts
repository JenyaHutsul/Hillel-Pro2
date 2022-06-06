import "./style.css"
import { props } from "../inputInterface"


export class Input{
    protected readonly el : HTMLInputElement;

    constructor(props : props){
        this.el = document.createElement("input");
        this.el.type = props.type;
    }

    render() : HTMLInputElement{
        return this.el;
    }
}