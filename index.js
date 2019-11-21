'use strict';

const createString = (value, option) => {
    if (value === null) {
        return 'null';
    }
    option = option || {};

    option.braces = option.braces || "true";
    option.quotes = option.quotes || 'double';

    //stringBasedOnType();
    if (isString(value)) {
        const quote = option.quotes === 'no' ? 'double' : option.quotes;
        return quote === 'double' ? '"' + value.replace(/\\/g, '\\\\').replace('"', '\\"') + '"' : "'" + value.replace(/\\/g, '\\\\').replace('"', '\\"') + "'";
    }

    if (isBoolean(value)) {
        return '' + value;
    }

    if (isNumber(value)) {
        return '' + value;
    }

    if (Array.isArray(value)) {
        option.seperator = option.seperator || ',';
        return option.braces === "true" ? '[' + value.map((val) => {
            return makeString(val, option);
        }).join(option.seperator) + ']' : value.map((val) => {
            return makeString(val, option);
        }).join(option.seperator);
    }

    if (isDate(value)) {
        return option.quotes === 'double' ? '"' + value.toISOString() + '"' : "'" + value.toISOString() + "'";
    }

    if (isObject(value)) {
        option.seperator = option.seperator || ',';
        option.assignment = option.assignment || ':';
        const createObjString = iterateObj(value, option).join(option.seperator);
        return option.braces === "true" ? '{' + createObjString + '}' : '' + createObjString + '';
    };

    return option.quotes === 'double' ? "" : '';
}

const iterateObj = (value, option) => {
    return Object.keys(value).map((key) => {
        const modKey = (option.quotes === 'single') ? "'" + key + "'" : '"' + key + '"';
        return (typeof value[key] === 'function') ? null : modKey + option.assignment + makeString(value[key], option);
    }).filter(function (i) { return i; });
}

const isString = (value) => {
    return (value != undefined && typeof value === 'string');
}

const isBoolean = (value) => {
    return (value != undefined && typeof value === 'boolean')
}

const isObject = (value) => {
    return (value !== undefined && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]');
}

const isDate = (value) => {
    return (value != undefined && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]')
}

const isNumber = (value) => {
    return (value != undefined && typeof value === 'number')
}

const makeString = (value, option) => {
    if (option && option.quotes === 'no') {
        return createString(value, option).replace(/[""]/g, "");
    }
    return createString(value, option);
}

module.exports = makeString;