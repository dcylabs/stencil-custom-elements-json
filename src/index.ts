import * as d from './declarations';
import { generate } from "./util";
import fs from 'fs';

export function customElements() : d.OutputTarget {
    return {
        type: 'docs-custom',
        generator(docs: d.JsonDocs){
            const customElements = generate(docs);
            fs.writeFileSync('custom-elements.json', JSON.stringify(customElements, undefined, 2))
        }
    }
}