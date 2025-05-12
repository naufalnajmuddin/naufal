const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').trim();
const celsius = parseFloat(input);

if (isNaN(celsius)) {
  console.log("Masukkan angka suhu dalam Celsius.");
  process.exit(1);
}

const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

console.log(`Input: ${celsius}°C`);
console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
console.log(`Kelvin: ${kelvin.toFixed(2)}K`);
