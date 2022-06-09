interface TypeFieldParser {
    render(json: object): HTMLElement;
}

interface JsonType {
    type: string;
    placeholder?: string;
    minValue?: string;
    maxValue?: string;
    options?: Array<{ value: string, displayName: string }>
}


export class FormParse {
    private json: any;
    private parsers: Record<string, TypeFieldParser>;
    private el: HTMLElement;
    constructor(json: any, parsers: Record<string, TypeFieldParser>) {
        this.el = document.createElement("form");
        this.json = json;
        this.parsers = parsers;
    }

    build() {
        for (let i = 0; i < this.json.length; i++) {
            if (this.isJsonParser(this.json[i])) {
                const type = this.json[i].type;
                const _class = this.parsers[type];
                this.el.appendChild(_class.render(this.json[i]))
            }
        }
    }

    isJsonParser(json: JsonType): json is JsonType {
        if (typeof json.type === "string") {
            return true;
        }
        return false;
    }

    render() {
        return this.el;
    }

}