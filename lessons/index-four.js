// async await

const adder = async (a, b) => {
  return a + b;
};

(getResult = async () => {
  const result = await adder(2, 2);
  console.log(result);
})();

(getResult = async () => {
  const result = await adder(2, 2);
  return result;
})().then((res) => console.log(res));

// catch

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

(getResponse = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").catch(
    (err) => {
      //throw new Error(err.message, { cause: err });
      console.log("hey! error");
    }
  );
  const status = res?.status;
  console.log(status);

  const data = await res.json();
  console.log(data);
})();
