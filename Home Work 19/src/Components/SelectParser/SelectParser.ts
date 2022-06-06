import "./style.css";

interface SelectParserProps{
    type : "select"
}


interface obj {
    value : number
    displayName : string
}

export class SelectParser{
    protected readonly el: HTMLSelectElement;

    constructor(props : SelectParserProps){
        this.el = document.createElement(props.type);
    }

    addSelect(obj: obj){
        const option = document.createElement("option");
        option.value = "" + obj.value;
        option.textContent = obj.displayName;

        this.el.appendChild(option);
    }

    render(){
        return this.el;
    }
}