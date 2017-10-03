# to-negative-array
A JavaScript Package For Converting Positive Value To negative. Also works when non-numbers are present as well.

![npm](https://img.shields.io/npm/v/to-negative-array.svg) ![license](https://img.shields.io/npm/l/to-negative-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/to-negative-array.svg) 
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/to-negative-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/to-negative-array.svg)

## Features

## `npm` Install

`npm install --save to-negative-array`


## Script Tag

#### For Development
```js
<script src="https://rawgit.com/Prosen-Ghosh/to-negative-array/master/negative.js"></script>
```
#### For Production
```js
<script src="https://cdn.rawgit.com/Prosen-Ghosh/to-negative-array/7d9e5e1c/negative.js"></script>
```

## Usage

```js

const toNegative = require('to-negative-array');

toNegative([]);
//=> null

toNegative([1,2,3,4,5]);
//=> [ -1, -2, -3, -4, -5 ]

toNegative([1,2,3,4,5,{}]);
//=> [ -1, -2, -3, -4, -5, {} ]

toNegative([1,2,3,4,5,{},[]]);
//=> [ -1, -2, -3, -4, -5, {}, [] ]

toNegative([1,2,3,4,5,{},[],""]);
//=> [ -1, -2, -3, -4, -5, {}, [], '' ]

toNegative([1,2,3,4,5,{},[],"",-100]);
//=> [ -1, -2, -3, -4, -5, {}, [], '', -100 ]

toNegative(); // without parameter thid function will throw a type error
//=> TypeError: negative() expects an array parameter


```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
