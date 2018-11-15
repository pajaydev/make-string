'use strict';

const makeString = (value, option) => {
    if (value === null) {
        return null;
    }
    option = option || {};
    option.assignment = option.assignment || '=';
    option.braces = option.braces || "true";
    option.quotes = option.quotes === 'double' ? 'double' : 'single';

    //stringBasedOnType();
    if (isString(value)) {
        return option.quotes === 'double' ? '"' + value.replace(/\\/g, '\\\\').replace('"', '\\"') + '"' : "'" + value.replace(/\\/g, '\\\\').replace('"', '\\"') + "'";
    }

    if (isBoolean(value)) {
        return option.quotes === 'double' ? '"' + value + '"' : "'" + value + "'";
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
        Object.keys(value).map(() => {

        });
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
    return (value !== undefined && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]');
}

const isDate = (value) => {
    return (value != undefined && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]')
}

console.log(makeString(["ajay", "prajoth", new Date()], { quotes: 'single', braces: "false" }));

console.log(typeof JSON.stringify([1, 2, "ajay"]));

var ajay = {
    name: "Ajay",
    college: "UNCC"
}
console.log(JSON.stringify(ajay));
console.log(isDate(new Date()));

