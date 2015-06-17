'use strict';
require('es6-shim');
var expect         = require('chai').expect;
var isIteratorLike = require('../index');

var decorateNextNoOp = function makeIterator(value) {
  if ((typeof value === 'undefined') || value === null) {
    throw new TypeError('Value must be defined and not null.');
  }
  value.next = function() {};
  return value;
};

var iterators = {
  array: [].values(),
  mapEntries: new Map().entries(),
  mapValues: new Map().keys(),
  setValues: new Set().values()
};
var falsoes = {
  arbitrary: { next: function() {} },
  array: decorateNextNoOp([]),
  object: decorateNextNoOp({}),
  string: decorateNextNoOp(new String('hi'))
};

describe('Positive responses', function() {
  it('iterators should return true', function() {
    expect(isIteratorLike(iterators.array)).to.be.true;
    expect(isIteratorLike(iterators.mapEntries)).to.be.true;
    expect(isIteratorLike(iterators.mapValues)).to.be.true;
    expect(isIteratorLike(iterators.setValues)).to.be.true;
  });
  it('fakes should identify as iterator-like', function() {
    Object.keys(falsoes).forEach(function(key) {
      expect(isIteratorLike(falsoes[key])).to.be.true;
    });
  });
});

describe('Negative responses', function() {
  it('null and undefined should return false', function() {
    expect(isIteratorLike(null)).to.be.false;
    expect(isIteratorLike(undefined)).to.be.false;
  });
  it('object with non-callable next property should return false', function() {
    expect(isIteratorLike({})).to.be.false;
    expect(isIteratorLike({ next: 'test' })).to.be.false;
  });
});
