function typeDefination(val, rate, decimal = 2) {
  if (
    typeof val !== "number" ||
    typeof rate !== "number" ||
    typeof decimal !== "number"
  )
    throw console.error("Only numeric types are allowed.");

  return;
}

function calculatePercantage(val, rate, decimal = 2) {
  typeDefination(val, rate, (decimal = 2));

  return Number(parseFloat(val * (rate / 100 + 1)).toFixed(decimal));
}

function claculateMargin(val, rate, decimal = 2) {
  typeDefination(val, rate, (decimal = 2));
  return Number(parseFloat(val / (1 + rate / 100)).toFixed(decimal));
}

function calculateDiff2Values(val, rate, decimal = 2) {
  typeDefination(val, rate, (decimal = 2));
  return Number(parseFloat(((rate - val) / val) * 100).toFixed(decimal));
}

function getPercentageValue(val, rate, decimal = 2) {
  typeDefination(val, rate, (decimal = 2));
  return Number(parseFloat(val * (rate / 100)).toFixed(decimal));
}

module.exports = {
  calculatePercantage,
  claculateMargin,
  getPercentageValue,
  calculateDiff2Values,
};
