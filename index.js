'use strict';

var isCallable = require('is-callable');

var isIteratorLike = function isIteratorLike(value) {
  return (typeof value !== 'undefined') && (value !== null) && isCallable(value.next);
};

module.exports = isIteratorLike;
