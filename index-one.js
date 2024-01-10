// переназначение undefined

// let undefined = 1;

// console.log(undefined);

// let two;

// console.log(two === undefined);
// console.log(two);

// примитивное сравнение объектов с неограниченной вложенностью
const similer = (a, b) => {
  for (key in a) {
    if (a[key] !== b[key]) {
      if (typeof a[key] === "object") {
        return similer(a[key], b[key]);
      }
      return false;
    }
  }
  return true;
};

const objA = {
  name: "one",
  surname: "two",
  age: 5,
  gender: false,
  child: {
    one: "one",
  },
};

// потеря контекста в стрелочной функции
global.objB = {
  name: "one",
  surname: "two",
  age: 5,
  gender: false,
  child: {
    one: "one1",
  },
  funOne: () => {
    return this;
  },
  getName(args) {
    const into = (...args) => {
      return { thisOf: this, args: args[0] };
    };
    return into(args);
  },
};

console.log(objA === objB);
console.log(similer(objA, objB));

// console.log(objA);
// console.log({ objA });

console.log(objB.funOne());
console.log(objB.getName(888));
