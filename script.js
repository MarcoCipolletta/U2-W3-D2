const savedNameDisplay = document.getElementById("savedNameDisplay");
const inputName = document.getElementById("inputName");

function showSavedName() {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    savedNameDisplay.style.display = "block";
    savedNameDisplay.innerText = `Nome salvato: ${savedName}`;
  } else {
    savedNameDisplay.style.display = "none";
  }
}

showSavedName();

document.getElementById("saveButton").addEventListener("click", () => {
  const name = inputName.value;
  if (name) {
    localStorage.setItem("username", name);
    inputName.value = "";
    showSavedName();
  }
});

document.getElementById("removeButton").addEventListener("click", () => {
  localStorage.removeItem("username");
  inputName.value = "";
  showSavedName();
});

let counter = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;

const counterDisplay = document.getElementById("counter");
counterDisplay.innerText = counter;

setInterval(() => {
  counter++;
  sessionStorage.setItem("counter", counter);
  counterDisplay.innerText = counter;
}, 1000);
