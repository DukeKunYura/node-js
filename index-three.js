// копирование массива в массив и в объект
items = [
  { itemOne: "one" },
  { itemTwo: "two", itemThree: { one: 1, two: 2, tree: { three: 3 } } },
];

let one;
one = [...items];
const two = { ...items };

items[0]["itemTwo"] = "two";

console.log(one);
console.dir(two, { depth: null });

// множества и хешмапы

const setItems = new Set(items);
console.log(setItems);

const objOne = { name: "name", surname: "surname" };
// const arrOne = Object.entries(objOne);
// console.log(arrOne);

const mapItems = new Map();
let i = 0;
items.forEach((item) => {
  mapItems.set(i, item);
  i++;
});
console.log(mapItems);

const mapItemsTwo = new Map([
  ...Object.entries(items[0]),
  ...Object.entries(items[1]),
]);
console.log(mapItemsTwo);

// цвета в консоли
// console.log("\x1b[1;33m" + 5555 + "\t" + "\x1b[1;35m" + 1 + "\x1b[1;37m");

// замыкание
const generatePass = (symbols) => {
  const max = symbols.length;
  return (length) => {
    let pass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      pass = pass + symbols[index];
    }
    return pass;
  };
};

const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
const generatePassFromQwerty12 = generatePass(symbols);
const pass = generatePassFromQwerty12(6);
console.log(pass);
