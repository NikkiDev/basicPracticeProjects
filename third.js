const counter = document.querySelector("#counterValue");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

let count = 0;

increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);

function increaseCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
}

function decreaseCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
}
