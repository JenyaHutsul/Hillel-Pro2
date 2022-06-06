import "./style.css";
import { props } from "../inputInterface";
import { Input } from "../Input/Input";

interface inputTextProps extends props {
    placeholder : string
}

export class InputTextParser extends Input{
    constructor(props: inputTextProps){
        super(props)
        this.el.placeholder = props.placeholder;
    }
}
