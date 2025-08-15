// function throtlling(fun, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fun.apply(this, args);
//     }
//   };
// }

// const handleClick = () => {
//   console.log("Button clicked at:", new Date().toLocaleTimeString());
// };

// const btn = document.querySelector("button");
// btn.addEventListener("click", throtlling(handleClick, 1000));

function throtlling(fun, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fun.apply(this, args)
    }
  };
}

const handleClick = () => {
  console.log("Button CLICKED Times:", new Date().toLocaleTimeString())
}

const btn = document.querySelector("button");
btn.addEventListener("click", throtlling(handleClick, 1000))