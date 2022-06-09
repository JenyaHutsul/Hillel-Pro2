interface TypeFieldParser {
    render(json: Options): HTMLElement;
}

interface Options {
    value: string
    displayName: string
}

export class SelectParser implements TypeFieldParser {
    protected options: any;

    constructor() {
    }
    createOptions(props: any) {
        const options = props.options;
        const arr = options.map(((item: Options): HTMLOptionElement => {
            const el = document.createElement("option");
            el.textContent = item.displayName;
            el.value = item.value
            return el;
        }))
        return arr;
    }

    render(props: any): HTMLElement {
        const arrOfOptions = this.createOptions(props);
        const el = document.createElement("select")

        arrOfOptions.forEach((element: any): void => {
            el.appendChild(element)
        });

        return el;
    }


}