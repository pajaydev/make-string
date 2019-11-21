'use strict';

const makeString = require('./index');
const expect = require('chai').expect;
const assert = require('assert');

describe("test toString method", () => {
    it("test string with  quotes", () => {
        const str = makeString("ajay");
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify("ajay"));
    });

    it("test string without quotes", () => {
        const str = makeString("ajay", { quotes: 'no' });
        expect(str).to.be.a('string');
        expect(str).to.equal('ajay');
    });

    it("test Boolean with  quotes", () => {
        const str = makeString(true);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(true));
    });

    it("test Boolean without quotes", () => {
        const str = makeString(true, { quotes: 'double' });
        expect(str).to.be.a('string');
        expect(str).to.equal('true');
    });

    it("test null value to string", () => {
        const str = makeString(null);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(null));
    });

    it("test number to string", () => {
        const str = makeString(25);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(25));
    });

    it("test Empty Object to string", () => {
        const sampleObject = {}
        const str = makeString(sampleObject);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleObject));
    });

    it("test Object to string", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose"
        }
        const str = makeString(sampleObject);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleObject));
    });

    it("test Object with boolean to string", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose",
            single: true
        }
        const str = makeString(sampleObject);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleObject));
    });

    it("test Object with Date to string", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose",
            dateOfBirth: new Date()
        }
        const str = makeString(sampleObject);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleObject));
    });

    it("test Object to string without braces", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose"
        }
        const str = makeString(sampleObject, { braces: 'false' });
        expect(str).to.be.a('string');
        expect(str).to.equal('"name":"Ajay","city":"san jose"');
    });

    it("test Object to string without braces and different assignment", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose"
        }
        const str = makeString(sampleObject, { braces: 'false', assignment: '=' });
        expect(str).to.be.a('string');
        expect(str).to.equal('"name"="Ajay","city"="san jose"');
    });

    it("test Object to string without braces and different seperator", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose"
        }
        const str = makeString(sampleObject, { braces: 'false', assignment: '=', seperator: '&', quotes: 'no' });
        expect(str).to.be.a('string');
        expect(str).to.equal('name=Ajay&city=san jose');
    });

    it("test Object to string with and without quotes", () => {
        const sampleObject = {
            name: "Ajay",
            city: "san jose"
        }
        const str = makeString(sampleObject);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleObject));
        const withoutQuotes = makeString(sampleObject, { quotes: 'no' });
        expect(withoutQuotes).to.equal("{name:Ajay,city:san jose}");
        const singleQuotes = makeString(sampleObject, { quotes: 'single' });
        expect(singleQuotes).to.equal("{'name':'Ajay','city':'san jose'}");
    });

    it("test Array to string", () => {
        const sampleArray = ["New York", "San Jose", "Charlotte"];
        const str = makeString(sampleArray);
        expect(str).to.be.a('string');
        expect(str).to.equal(JSON.stringify(sampleArray));
    });

    it("test Array to string without braces", () => {
        const sampleArray = ["New York", "San Jose", "Charlotte"];
        const str = makeString(sampleArray, { braces: 'false' });
        expect(str).to.be.a('string');
        expect(str).to.equal('"New York","San Jose","Charlotte"');
    });

});