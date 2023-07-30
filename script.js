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

  // Part 1 Change the text of the title to something shorter.
function headTitle(){
  const mainTitle = document.querySelector("#main-title");
 mainTitle.textContent = "Dom Toretto's Homepage";
}headTitle()

  // Part 2 change the background-color to a new color
  function chgbkgdColor(){
  document.body.style.backgroundColor = "lightblue";
}chgbkgdColor()

  // Part 3 Select DOM's Favorite Things list and remove the last list item.
  function removeFav(){
    const favList = document.querySelector('#favorite-things');
    if(favList.hasChildNodes()){
      favList.removeChild(favList.children[5])
    }
  }removeFav()
  console.log(document.querySelector('#favorite-things'));

  // Part 4


  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
