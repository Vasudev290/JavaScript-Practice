// let count = 0;
// const getData = () => {
//   console.log("fetching data..!", count++);
// };
// const debounceFun = function (func, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// };
// const betterFun = debounceFun(getData, 300);

let count = 0;
const getData = () => {
  console.log("fetch data..!", count++);
};

function debounceFun(fun, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(context, args);
    }, delay);
  };
}

const betterFun = debounceFun(getData, 300);
