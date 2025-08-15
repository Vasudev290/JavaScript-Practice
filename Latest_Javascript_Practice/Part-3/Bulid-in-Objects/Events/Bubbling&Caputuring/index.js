document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation()
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked!");
  },
  true
);
