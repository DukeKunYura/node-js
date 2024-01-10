const objOne = {
  name: "Ivan",
  age: 6,
  adress: { street: "street" },
};

console.log(objOne.adress.street);
console.log(objOne.adress?.adress?.adress);
