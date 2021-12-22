require("dotenv").config();
let clientID = process.env.CLIENT_ID;
let clientSECRET = process.env.CLIENT_SECRET;

//console.log(process.env);

//Selectors
const form = document.querySelector("form");

//get input
let getInput = (e) => {
  e.preventDefault();
  let userInput = form.username.value.trim();
  console.log(userInput);
  return userInput;
};

//Fetch data from API
let getData = async (userInput) => {
  url = `https://api.github.com/users${userInput}?client_id=${clientID}&client_secret=${clientSECRET}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
//Event Listener
form.addEventListener("submit", getInput);
