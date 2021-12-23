//Selectors

const userProfile = document.querySelector(".user-profile");
const profileInfo = document.querySelector(".profile-info");
const wrapper = document.querySelector(".wrapper");

//This function takes in the data as an object and loops through it to check if there are anny null values for each key.If there is, it replaces it with custom text and replaces that key value pair in the object and returns it.

let checkData = async (data) => {
  for ([key, value] of Object.entries(data)) {
    if (value === null) {
      data[key] = `No data available.`;
    }
  }
  return data;
};

//Updates the UI with the data recieved after it is checked
let addData = async (data) => {
  let avatarHtml = `
  <img src=${data.avatar_url} alt=${data.name}'s avatar />
  <button class="btn"><a href=${data.html_url}>View Profile</a></button>
`;

  let profileHtml = `
  <p class="title">${data.name}</p>
    <div class="grid">
        <div class="item" id="bio">Bio : ${data.bio}</div>

            <div class="item" id="locate">Location : ${data.location}</div>

            <div class="item" id="repos"><a href =${data.repos_url}>Public Repos : ${data.public_repos}</a></div>

            <div class="item" id="following"><a href="${data.gists_url}">Public Gists : ${data.public_gists}</a></div>

            <div class="item" id="followers"><a href="${data.followers_url}">Followers : ${data.followers}</a></div>

            <div class="item" id="following"><a href="${data.following_url}">Following : ${data.following}</a></div>
    </div> `;

  userProfile.innerHTML = avatarHtml;
  profileInfo.innerHTML = profileHtml;
  wrapper.style.display = "grid";
};
