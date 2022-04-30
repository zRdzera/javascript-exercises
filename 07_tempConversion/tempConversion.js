const ftoc = function(fTemp) {
  let toCelsius;

  toCelsius = (fTemp - 32) * 5/9;
  toCelsius = +toCelsius.toFixed(1); // Number(toCelsius.toFixed(0)) can be used too.

  return toCelsius;
};

const ctof = function(cTemp) {
  let toFahrenheit;

  toFahrenheit = (cTemp * 1.8) + 32;
  toFahrenheit = +toFahrenheit.toFixed(1); // Number(toFahrenheit.toFixed(0)) can be used too.

  return toFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
