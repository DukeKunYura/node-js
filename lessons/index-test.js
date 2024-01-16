console.log("hey");

const tup = {
  one: [1, 2, 3],
  two: [4, 5, 6],
  three: "ooo",
  four: { one: 1, two: { oneOne: [1, 3, 6] } },
};

const tup2 = {
  one: [1, 2, 3],
  two: [4, 5, 6],
  three: "ooo",
  four: { one: 1, two: { oneOne: [1, 3, 6] } },
};

// console.log(JSON.stringify(tup) === JSON.stringify(tup2));
// console.log(tup == tup2);

// console.log(typeof tup);

let countW = 1;

let arr = [];

for (let [name, value] of Object.entries(tup)) {
  arr.push({ name: name, value: value });
}

console.log(arr);

const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

// массив файлов для каждого месяца
const filesByMonth = [];
months.forEach((month) => {
  filesByMonth[month] = [];
});

console.log(filesByMonth["январь"]);

// const arrStr = [ 'январь' = [] , 'февраль' = []];

// console.log(arrStr[0]);

const funFan = (elem) => {
  elem.toString();
};
console.log(funFan({ name: 77 }));
let anyThings = ["44", 33, { 55: 77 }];

console.log(anyThings.forEach(funFan));

console.log("--------");

const stringE = { name: 5 };

const names = [];

names[stringE] = [2, 5, 7];

console.log(names["[object Object]"]);
