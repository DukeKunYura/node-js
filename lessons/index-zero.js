const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.PORT);

const url = "https://github.com/DukeKunYura/stack/blob/master/index.js?num=22";

const urlData = new URL(url);

//console.log(urlData);

{
  const itemsInCart = [
    { product: "Носки", quantity: 3 },
    { product: "Штаны", quantity: 1 },
    { product: "Кепка", quantity: 1 },
  ];

  // const clonedCart = [...itemsInCart];

  const clonedCart = structuredClone(itemsInCart);
  const clonedCartTwo = JSON.parse(JSON.stringify(itemsInCart));

  clonedCart[1].quantity = 5;

  // console.log(clonedCart);
  // console.log(itemsInCart);
  // console.log(clonedCartTwo);
}

function getThis() {
  console.log(this);
}

global.item = "item_string";

console.log(global.item);

//console.log(global);

// global.num = 10;

// function fnA() {
//   console.log(this);
// }

// function fnB() {
//   let num = 12;
//   fnA();
// }

// fnB();
//const { nameF } = require("nameF");
// global.nameF = function () {
//   console.log(this.nameF);
// };

// global.nameF();
// nameF();

let glo = 555;

{
  var uuu = {
    name: "hhh",
    price: 5,
    inBlock() {
      const inFun = () => {
        const ininFun = () => {
          console.log(this.name);
          console.log(glo);
        };
        ininFun();
      };
      inFun();
    },
    twoF: function () {
      function ininFun() {
        console.log(this === global);
        console.log(glo);
      }
      ininFun();
    },
  };
}

uuu.inBlock();
uuu.twoF();

function forA(arg) {
  console.log(arg + this.name);
}

//forA.apply(uuu, [7000]);

const os = require("os");
//console.log(os.platform());
//console.log(os.arch());
const cpus = os.cpus();
//console.log(os.hostname());

const cluster = require("cluster");

if (cluster.isPrimary) {
  for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
  }
} else {
  console.log(`pid= ${process.pid}`);
  setInterval(() => {
    console.log(`pid there= ${process.pid}`);
  }, 3000);
}
