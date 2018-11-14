'use strict';

const makeString = (value, option) => {
    if (value === null) {
        return null;
    }
    option = option || {};
    option.assignment = option.assignment || '=';
    option.seperator = option.seperator || '=';
    option.curlyBraces = option.curlyBraces || true;
    option.quotes = option.quotes === 'double' ? 'double' : 'single';

    if (isString(value)) {
        return option.quotes === 'double' ? '"' + value.replace(/\\/g, '\\\\').replace('"', '\\"') + '"' : "'" + value.replace(/\\/g, '\\\\').replace('"', '\\"') + "'";
    }

    if (isBoolean(value)) {
        return option.quotes === 'double' ? '"' + value + '"' : "'" + value + "'";
    }

    if (Array.isArray(value)) {
        // return
    }

    if () {

    }

    return option.quotes === 'double' ? "" : '';


}

const isString = (value) => {
    return (value != undefined && typeof value === 'string');
}

const isBoolean = (value) => {
    return (value != undefined && typeof value === 'boolean')
}

const isObject = (value) => {
    return (value != undefined && );
}

console.log(typeof makeString(true, { quotes: 'single' }));

console.log(JSON.stringify([1, 2, "ajay"]));