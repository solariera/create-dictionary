"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDictionary = void 0;
const createDictionary = (key, entries) => {
    let dictionary = {};
    for (const entry of entries) {
        const index = entry[key];
        if (typeof index === 'string' && index.length) {
            dictionary = { ...dictionary, [index]: entry };
        }
        else if (typeof index === 'number' && !Number.isNaN(index)) {
            dictionary = { ...dictionary, [index]: entry };
        }
    }
    return dictionary;
};
exports.createDictionary = createDictionary;
