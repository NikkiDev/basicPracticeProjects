const btn = document.querySelector("#btn");
const input = document.querySelector("#messageInput");
const showMessage = document.querySelector("#displayMessage");

btn.addEventListener("click", sendMsg);

function sendMsg() {
  let msg = input.value;

  if (msg === "") {
    window.alert("cannot send empty message");
    return;
  }

  showMessage.innerHTML = msg;
  input.value = "";
}
