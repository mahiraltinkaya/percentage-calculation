### Features

This package includes functions that allow you to get percentages of numbers, find a number itself, find the percentage difference between two numbers, and find the percentile of a number.

# Installation :

npm install @mahiraltinkaya/percantage-calculation

# Usage:

```javascript
const {
  calculatePercantage,
  claculateMargin,
  getPercentageValue,
  calculateDiff2Values,
} = require("@mahiraltinkaya/percantage-calculation");

console.log(calculatePercantage(100, 18)); // 118
console.log(claculateMargin(118, 18)); // 100
console.log(getPercentageValue(100, 18)); // 18
console.log(calculateDiff2Values(100, 150)); // > 50%
console.log(calculateDiff2Values(150, 100)); // < 50%
```

# Options:

The 3rd parameter of each function is the decimal value. Its Default Value is set to 2. Parameters only accept numeric values.
