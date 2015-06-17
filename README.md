# is-iterator-like
Use duck typing to check whether a Javascript object has the form of an ES6 iterator

## Install

```javascript
npm install --save is-iterator-like
```

## Explanation

This uses simple duck-typing methods to check whether a value comes in the form of an iterator (has a "next" property that can be called as a function). It isn't a sure-fire test whether something is truly an iterator, since this can't be reliably done - the only way to know for sure is to use it. However, this is close enough to be useful for unit tests, or to catch any blatant incorrect inputs that you expect to be implement iterator protocol.

## Usage

```javascript
var isIteratorLike = require('is-iterator-like');
var xd = require('transducers.js');

var iter = xd.iterator({a: 1, b: 2, c: 3});

isIteratorLike(iter); // true


