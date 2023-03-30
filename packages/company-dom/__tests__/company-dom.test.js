'use strict';

const companyDom = require('..');
const assert = require('assert').strict;

assert.strictEqual(companyDom(), 'Hello from companyDom');
console.info("companyDom tests passed");
