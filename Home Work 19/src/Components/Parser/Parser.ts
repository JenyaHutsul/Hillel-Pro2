import { InputTextParser } from "../InputTextParser";
import { InputNumberParser } from "../InputNumberParser";
import { SelectParser } from "../SelectParser";

interface textParse{
    type: string
    placholder: string
}

export function Parser(data:any){
    const arrOfInputs = [];
    if(data !== undefined){
        for(let i = 0; i < data.length; i++){
            const obj = data[i];
            if(obj.type === "text"){
                const el = new InputTextParser({
                    type: obj.type,
                    placeholder: obj.placeholder
                })
                arrOfInputs.push(el);
            }
            if(obj.type === "number"){
                const el = new InputNumberParser({
                    type: obj.type,
                    minValue: obj.minValue,
                    maxValue: obj.maxValue
                })
                arrOfInputs.push(el);
            }
            if(obj.type === "select"){
                const el = new SelectParser({
                    type: obj.type,
                })
                console.log(obj.options)
                obj.options.map(function(item:any){
                    const value = item.value;
                    const displayName = item.displayName;
                    el.addSelect({value, displayName})
                })
                arrOfInputs.push(el);
            }
        }
        arrOfInputs.forEach(item => {
            document.body.appendChild(item.render())
        })
    }
}
