let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
 
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1: Change the text of the title to something shorter.
function headTitle(){
  const mainTitle = document.querySelector("#main-title");
 mainTitle.textContent = "Dom Toretto's Homepage";
}headTitle()

  // Part 2: change the background-color to a new color
  function chgBkgdColor(){
  document.body.style.backgroundColor = "lightblue";
}chgBkgdColor()

  // Part 3: Select DOM's Favorite Things list and remove the last list item.
  function removeFav(){
    const favList = document.querySelector('#favorite-things');
    if(favList.hasChildNodes()){
      favList.removeChild(favList.children[5])
    }
  }removeFav()
  console.log(document.querySelector('#favorite-things'));

  // Part 4: Select all .special-title class elements and change their font-sizeto 2rem
function chgFontSpecials(){
  const specialTitle = document.querySelectorAll(".special-title");
  for(let i=0; i<specialTitle.length; i++){
    specialTitle[i].style.fontSize = "2rem";
  }
}
chgFontSpecials();

console.log(document.querySelectorAll(".special-title"));

  // Part 5:Access the Past Races list and remove Chicago.
function removePastRace(){
  const pastRaces = document.querySelector('#past-races');
  if(pastRaces.hasChildNodes()){
    pastRaces.removeChild(pastRaces.children[3])
  }

}removePastRace()
console.log(document.querySelector('#past-races'));

  // Part 6: add to DOM's Past Races list.Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
function addPastRace(){
  const pastRaces = document.createElement("li");
  const newRace = document.createTextNode("New York City");
  pastRaces.appendChild(newRace);
  document.querySelector("#past-races").appendChild(newRace);
}addPastRace()
console.log(document.querySelector('#past-races'));

  // Part 7: Create a new .blog-post corresponding to the new city added in Part 6.
function addClass (){
  const blogs = document.querySelector(".main");
  const newBlog = document.createElement("div");

  newBlog.classList.add("blog-post.purple");
  blogs.appendChild(newBlog)
}
addClass()
console.log(document.querySelector(".main"))

  // Part 8: add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.


  // Part 9:Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.The mouseouthandler should toggle the class .purple. The mouseenterhandler should toggle the class .red.




});
