'use strict';

const makeString = (value, option) => {
    if (value === null) {
        return null;
    }
    option = option || {};

    option.braces = option.braces || "true";
    option.quotes = option.quotes || 'double';

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
        option.assignment = option.assignment || ':';
        return option.braces === "true" ? '{' + iterateObj(value, option) + '}' : '' + iterateObj(value, option) + '';
    };



    return option.quotes === 'double' ? "" : '';


}

const iterateObj = (value, option) => {
    return Object.keys(value).map((key) => {
        const modKey = (option.quotes === 'double') ? '"' + key + '"' : "'" + key + "'";
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
var ajay = {
    name: "Ajay",
    college: "uncc"
}
console.log(makeString(ajay, { braces: "false" }));

//console.log(typeof JSON.stringify([1, 2, "ajay"]));


//console.log(JSON.stringify(ajay));
console.log(isDate(new Date()));

