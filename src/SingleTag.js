import { Node } from "./Node.js";
export class SingleTag extends Node {
    toString() {
        return `<${this.name}>`;
    }
}