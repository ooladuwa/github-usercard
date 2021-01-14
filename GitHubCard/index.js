import axios from "axios";

/*
STEP 1: using axios, send a GET request to the following URL
(replacing the placeholder with your Github name):
https://api.github.com/users/<your name>
*/
// const result = axios.get("https://api.github.com/users/ooladuwa");
// console.log(result);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
    */

/*
     STEP 3: Create a function that accepts a single object as its only argument.
       Using DOM methods and properties, create and return the following markup:
   
       <div class="card">
         <img src={image url of user} />
         <div class="card-info">
           <h3 class="name">{users name}</h3>
           <p class="username">{users user name}</p>
           <p>Location: {users location}</p>
           <p>Profile:
             <a href={address to users github page}>{address to users github page}</a>
           </p>
           <p>Followers: {users followers count}</p>
           <p>Following: {users following count}</p>
           <p>Bio: {users bio}</p>
         </div>
       </div>
   */
const followersArray = [
  "ooladuwa",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

function githubCardMaker(obj) {
  // instantiating elements
  const card = document.createElement("div");
  const avatar_url = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const login = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // setting class names,
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  login.classList.add("username");

  // attributes,
  avatar_url.setAttribute("src", obj.avatar_url);
  url.setAttribute("href", obj.url);

  // text
  name.textContent = obj.name;
  login.textContent = obj.login;
  location.textContent = obj.location;
  url.textContent = "follow me here";
  followers.textContent = obj.followers;
  following.textContent = obj.following;
  bio.textContent = obj.bio;

  //creating the hierarchy
  card.append(
    avatar_url,
    cardInfo,
    name,
    login,
    location,
    profile,
    followers,
    following,
    bio
  );
  profile.appendChild(url);

  //return card
  return card;
}

const cards = document.querySelector(".cards");
console.log(cards);
// let cardsArray = Array.from(cardsArray);

followersArray.forEach((follower) => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then((result) => {
      const card = githubCardMaker(result.data);
      cards.appendChild(card);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(githubCardMaker(followersArray));
});
