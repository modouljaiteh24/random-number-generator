// const myButton = document.getElementById("myButton");
// const lebel = document.getElementById("lebel");

// const max = 10;
// const min = 1;
// let ramdomNum;

// myButton.onclick = function () {
//   ramdomNum = Math.floor(Math.random() * max - min + min);
//   lebel.textContent = ramdomNum;
// };

//with addEvenListener
const sub = document.querySelector(".sub");
const myButton = document.getElementById("myButton");
const lebel = document.getElementById("lebel");

myButton.addEventListener("click", () => {
  const max = 10;
  const min = 1;

  //   ramdomNum = Math.floor(Math.random() * max - min + min);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  lebel.textContent = randomNum;

  //   lebel.textContent = ramdomNum;

  //   let button = document.createElement("button");
  //   button.textContent = "Generate";
  //   button.classList.add("button");
  //   sub.appendChild(button);

  //   myButton.addEventListener("click", () => {

  //   });
});
