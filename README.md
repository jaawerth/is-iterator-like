# is-iterator-like
Use duck typing to check whether a Javascript object has the form of an ES6 iterator

## Install

```javascript
npm install --save is-iterator-like
```

## Explanation

This uses simple duck-typing methods to check whether a value comes in the form of an iterator - anything with a "next" property that can be called as a function. It isn't a sure-fire test whether a value truly implements iterator protocol, which can't be done reliably; the only way to know that for sure is to use it as an iterator. However, this method *is* suitable for tests, or to catch any blatantly incorrect inputs that you expect to be iterators.

## Usage

```javascript
var isIteratorLike = require('is-iterator-like');
var xd = require('transducers.js');

var iter = xd.iterator({a: 1, b: 2, c: 3});

isIteratorLike(iter); // true
isIteratorLike('foo'); // false
isIteratorLike(undefined); // false
```
