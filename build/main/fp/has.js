"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines whether the object has the specified property.
 */
function has(obj, v) {
    if (typeof v === 'undefined') {
        return false;
    }
    if (typeof v !== 'string') {
        console.warn("has(obj, v): v must be a string, v => " + v);
    }
    if (obj && obj.hasOwnProperty) {
        return obj.hasOwnProperty(v);
    }
    else {
        return false;
    }
}
exports.has = has;
