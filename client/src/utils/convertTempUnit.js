module.exports = function convertTempUnit(tempUnit, value) {
  if (tempUnit === 'celsius') {
    return (((value - 32) * 5) / 9).toFixed(1);
  }
  if (tempUnit === 'fahrenheit') {
    return (value * (9 / 5) + 32).toFixed(1);
  }
  console.error('convertTempUnit function given an invalid unit of measure.');
  return value;
};
