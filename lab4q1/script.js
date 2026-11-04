
	// Select paragraph and button
	const message = document.getElementById("message");
	const button = document.getElementById("changeBtn");
	
	//function to change the message 
	function changeMessage(){
	     message.textChange = "Hello there!";
		 }
		 
	// add event listener to the button	 
	button.addEventListener("click", changeMessage);