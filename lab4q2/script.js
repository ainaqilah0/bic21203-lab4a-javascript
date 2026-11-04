// Select input, button, result
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");


// function to check input
function checkInput(){
    let input = userInput.value.trim();
	let number = Number(input);

if(input === "" || !Number.isFinite(number)){
   result.textContent = "Please enter a valid number!";
   }
   
   else if (number<10){
        result.textContent = "The number is lower than 10";
		}
		
	 else if (number>10){
        result.textContent = "The number is higher than 10";
		}
		
	else{
	    result.textContent = "The number is equal to 10";
		}
	    
	}
	// event listener
	checkBtn.addEventListener("click", checkInput);
	

