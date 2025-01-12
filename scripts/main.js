// Adding an image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/panda.jpg") {
    myImage.setAttribute("src", "images/red-panda.jpg");
  } else {
    myImage.setAttribute("src", "images/panda.jpg");
  }
};

/* Adding a personalized welcome message */

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) setUserName();
  localStorage.setItem("name", myName);
  myHeading.textContent = `Chinese panda is cool, ${myName}`;
}

if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Chinese panda is cool, ${storedName}`;
} else {
  setUserName();
}

myButton.onclick = () => setUserName();
