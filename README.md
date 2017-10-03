# to-negative-array
A JavaScript Package For Converting Positive Value To negative. Also works when non-numbers are present as well.

![npm](https://img.shields.io/npm/v/to-negative-array.svg) ![license](https://img.shields.io/npm/l/to-negative-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/to-negative-array.svg) 

![nodei.co](https://nodei.co/npm/to-negative-array.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/to-negative-array.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/to-negative-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/to-negative-array.svg)

## Features


## `npm` Install

`npm install --save to-negative-array`


## Scripts Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
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
