import { Node } from "./Node.js";
export class PairedTag extends Node {
    constructor(name, body = '') {
        super(name);
        this.body = body;
    }
    toString() {
        return `<${this.getName()}>${this.body}</${this.getName()}>`;
    }
}