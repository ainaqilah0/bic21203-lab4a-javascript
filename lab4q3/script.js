//select button & ordered lists
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

//function to generate numbers
function generateNumbers(){

//clear existing list
numberList.replaceChildren();

//loop from 1 to 5
for (let i=1; i<=5; i++){

//list item
let listItem = document.createElement("li");
listItem.textContent = "The number is " + i;

//append list item
numberList.appendChild(listItem);
}}

//event listener
generateBtn.addEventListener("click", generateNumbers);