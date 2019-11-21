# make-string [![Build Status](https://travis-ci.org/pajaydev/make-string.svg?branch=master)](https://travis-ci.org/pajaydev/make-string)

make-string converts all data types to string as JSON.toString. 

## Installation ##

``` bash
npm install make-string
```
## Usage ##

```js
const makeString = require('make-string');
makeString(25); // '25'
```
## Why? ##
I need to convert the object to string in configurable way like removing curly braces, with single quote, etc. So I created this module. If you face any issues with this module, Free feel to create the issues [here](https://github.com/pajaydev/make-string/issues).
 
## options ##
Options can be passed as optional second param to makeString to configure few things.
```json
quotes: "single" | "double" | "no"(no quotes)  - "double"(default)
braces: "true" | "false" - "true"(default)
assignment: "=" (any assignment operator)
```
## How to use ##

```js
const makeString = require('make-string');
makeString("make-string"); // "make-string"
makeString("make-string", {quotes: 'single'}); // 'make-string'
makeString("make-string", {quotes: 'no'}); // make-string
makeString({package:"make-string"}); // '{"package":"make-string"}'
makeString({package:"make-string"}, {braces: 'false'}); // '"package":"make-string"'
makeString({package:"make-string"}, {assignment: '='}); // '{"package"="make-string"}'
makeString({package:"make-string"}, {assignment: '=', quotes:'no'}); // '{package=make-string}'
makeString({package:"make-string",author:"Ajay"}, {assignment: '=', quotes:'no', seperator:'&'}); // '{package=make-string&author=ajay}'
```