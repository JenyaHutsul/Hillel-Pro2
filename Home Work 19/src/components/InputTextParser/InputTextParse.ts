interface PropsText {
    type: "text"
    placeholder: string
}

interface TypeFieldParser {
    render(json: PropsText): HTMLElement;
}

export class InputTextParser implements TypeFieldParser {
    constructor() {
    }

    render(props: PropsText) {
        const el = document.createElement("input")
        el.type = props.type;
        el.placeholder = props.placeholder;
        return el;
    }
}

