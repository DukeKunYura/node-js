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
