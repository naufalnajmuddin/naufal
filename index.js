const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', (a) => {
  rl.question('Masukkan operator (+ - * /): ', (op) => {
    rl.question('Masukkan angka kedua: ', (b) => {
      const x = parseFloat(a);
      const y = parseFloat(b);
      let hasil;

      switch (op) {
        case '+': hasil = x + y; break;
        case '-': hasil = x - y; break;
        case '*': hasil = x * y; break;
        case '/': hasil = y !== 0 ? x / y : 'Tidak bisa dibagi 0'; break;
        default: hasil = 'Operator tidak valid';
      }

      console.log(`Hasil: ${hasil}`);
      rl.close();
    });
  });
});
