import { InputTextParser, SelectParser, InputNumberParser, FormParse } from "./components"
import json from "./components/formData.json";


const elementTypeParser = {
    text: new InputTextParser(),
    number: new InputNumberParser(),
    select: new SelectParser()
};
const formParser = new FormParse(json, elementTypeParser);

formParser.build();

document.body.appendChild(formParser.render())