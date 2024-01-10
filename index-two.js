// проверка затрат на выполнение декомпозиции объекта, ~x5

const startTime = new Date();

console.log(startTime);

for (let i = 0; i < 1000000000; i++) {
  const objOne = {
    name: "Ivan",
    age: 6,
    adress: { street: "street" },
    getThisObg() {
      return this;
    },
  };

  // console.log(objOne.adress.street);
  // console.log(objOne.adress?.adress?.adress);

  //  const { name, adress } = objOne.getThisObg();

  const name = objOne.name;
  const adress = objOne.adress;

  // console.log(name);
}

const endTime = new Date();

console.log(endTime - startTime);
