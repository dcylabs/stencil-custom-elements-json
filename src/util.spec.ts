import * as d from './declarations';
import * as path from 'path';
import * as fs from 'fs';
import { generate } from "./util";


describe('generator', () => {

    it('should work with basic data', () => {
        const jsonDocs = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../tests/simple-json-docs.json'), 'utf8')) as d.JsonDocs;
        const customElements = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../tests/simple-custom-elements.json'), 'utf8'));
        expect(generate(jsonDocs)).toEqual(customElements);
    });

});
