const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value ]');
let total = 0;
const outputEl = document.querySelector('.js-output span');

btnAdd.addEventListener('click', function () {
  //console.log('clicked button', valueInput.value);
  const value = Number(valueInput.value);
  total += value;
  // console.log('TOTAL', total);
  outputEl.textContent = total;
  valueInput.value = '';
});

btnReset.addEventListener('click', function () {
  outputEl.textContent = 0;
});
// const age = 37;
// console.log(age);

// alert('Hi there!');

// const type = typeof true;
// console.log(type);

// const shouldRenew = confirm('Should we renew your subscription?');
// console.log(shouldRenew);

// let element = prompt('Type something with number');
// const result = Number.parseFloat(element);
// console.log(result);
// const resultInt = Number.parseInt(element);
// console.log(resultInt);

// let salary = 13000.456789;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// console.log(Math.PI);

// const base = 5;
// const power = 3;
// console.log(Math.pow(5, 3));
// console.log(base ** power);

// console.log(Math.sqrt(64));

// const num = prompt('Number?');
// const pow = prompt('Power for Your numbet');
// console.log(Number.parseInt(Number.parseFloat(num) ** Number.parseInt(pow)));

// console.log(Math.random());

// Math.random()*(max-min)+min

// const min = prompt('Число початку діапізону');
// const max = prompt('Число останнього значення');
// console.log('Random number is ', Math.round(Math.random() * (max - min) + min));

// const meggase = '1 3 5 7 9';
// console.log(meggase.length);

// console.log('qwe' + 'rty' + ' ' + 123);
// console.log(`2 + 3 = ${2 + 3}`);

// const brand = 'SunwArt';
// const normalizedBrand = brand.toUpperCase();
// console.log(normalizedBrand);
// debugger;
// console.log(brand.slice(4));
// console.log(normalizedBrand.slice(0, 3).toLowerCase());
// debugger;
// console.log(`${brand[0]} ${brand[1]} ${brand[2]}`);

// const isEqual = 1 == true;
// console.log(isEqual);
// const isNotEqual = 1 === true;
// console.log(isNotEqual);

// const stars = 3;
// let price;
// switch (stars) {
//   case 1:
//   case 2:
//     price = 100;
//     break;
//   case 3:
//   case 4:
//     price = 200;
//     break;
//   default:
//     price = 300;
// }
// console.log(price);

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// const employees = 20;
// const minSalary = 500;
// const maxSalary = 1500;
// let totalSalary = 0;
// for (let i = 0; i < employees; i += 1) {
//   totalSalary += Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(totalSalary);
// }

// const minN = 5;
// const maxN = 24;
// let total = 0;
// for (let i = minN % 2 === 0 ? minN : minN + 1; i <= maxN; i += 2) {
//   total += i;
// }
// console.log(total);

// const minN = 5;
// const maxN = 24;
// let total = 0;
// for (let i = minN; i <= maxN; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);
