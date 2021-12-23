//Selectors
const form = document.querySelector("form");

//get input
let getInput = (e) => {
  e.preventDefault();
  let userInput = form.username.value.trim();
  getData(userInput)
    .then((data) => checkData(data))
    .then((data) => addData(data))
    .catch((error) =>
      console.log(error, "Something went wrong while trying to get data")
    );
};

//Fetch data from API
let getData = async (userInput) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userInput}?client_id=${client_ID}&client_secret=${client_Secret}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, "Something went wrong when trying to get data.");
  }
};

//Event Listener
form.addEventListener("submit", getInput);
