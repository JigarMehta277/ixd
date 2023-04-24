window.onload = function(){


var Artistic = document.getElementById("Artistic");
var Bookworm= document.getElementById("Bookworm");
var Foodie =document.getElementById("Foodie");
var Introvert =document.getElementById("Introvert");
var Techie =document.getElementById("Techie");
var Grocery =document.getElementById("Grocery");
var Coffee =document.getElementById("Coffee");
var Studying =document.getElementById("Studying");
var Walks =document.getElementById("Walks");
var Shopping =document.getElementById("Shopping");

Artistic.addEventListener("click", displayArtistic);
Bookworm.addEventListener("click", displayBookworm);
Foodie.addEventListener("click", displayFoodie);
Introvert.addEventListener("click", displayIntrovert);
Techie.addEventListener("click", displayTechie);
Grocery.addEventListener("click", displayGrocery);
Coffee.addEventListener("click", displayCoffee);
Studying.addEventListener("click", displayStudying);
Walks.addEventListener("click", displayWalks);
Shopping.addEventListener("click", displayShopping);

function displayArtistic(){
  Artistic.style.backgroundColor = "lightblue";
}
function displayBookworm(){  
  Bookworm.style.backgroundColor = "lightblue";
}
function displayFoodie(){  
  Foodie.style.backgroundColor = "lightblue";
}
function displayIntrovert(){  
  Introvert.style.backgroundColor = "lightblue"; 
}
function displayTechie(){  
  Techie.style.backgroundColor = "lightblue";
}
function displayGrocery(){  
  Grocery.style.backgroundColor = "lightblue";
}
function displayCoffee(){  
  Coffee.style.backgroundColor = "lightblue";
}
function displayWalks(){  
  Walks.style.backgroundColor = "lightblue";
}
function displayShopping(){  
  Shopping.style.backgroundColor = "lightblue";
}
function displayStudying(){  
  Studying.style.backgroundColor = "lightblue";
}
}






