# make-string

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
I need to convert the object to string in configurable way like removing curly braces, with single quote, etc. So I created this module. If you face any issues with this module, Free feel to create the issues https://github.com/ajay2507/make-string/issues.
 
## How to use ##

```js
const makeString = require('make-string');
makeString("make-string"); // "make-string"
makeString("make-string", {quotes: 'single'}); // 'make-string'
makeString({package:"make-string"}); // '{"package":"make-string"}'
makeString({package:"make-string"}, {braces: 'false'}); // '"package":"make-string"'
makeString({package:"make-string"}, {assignment: '='}); // '{"package"="make-string"}'
```