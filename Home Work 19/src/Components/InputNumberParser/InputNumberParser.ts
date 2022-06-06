import "./style.css";
import { props } from "../inputInterface";
import { Input } from "../Input";

interface numberParseProps extends props{
    minValue : string;
    maxValue : string;
}

export class InputNumberParser extends Input {
    constructor(props : numberParseProps){
        super(props);
        this.el.max = props.maxValue; //тут ts ругается, Тип "number" не может быть назначен для типа "string"
        this.el.min = props.minValue;
    }
}