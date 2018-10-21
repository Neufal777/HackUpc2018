function voted(){

	var buttonVote1 = document.getElementById('buttonVote1');
	var buttonVote2 = document.getElementById('buttonVote2');
	var buttonVote3 = document.getElementById('buttonVote3');

	var num_of_votes1 = document.getElementById('num_of_votes1');
	var num_of_votes2 = document.getElementById('num_of_votes2');
	var num_of_votes3 = document.getElementById('num_of_votes3');

	//we hide the buttons after the votation	
	buttonVote1.style.display = "none";
	buttonVote2.style.display = "none";
	buttonVote3.style.display = "none";

	//make visible the number of votes of each one
	num_of_votes1.style.display = "block";
	num_of_votes2.style.display = "block";
	num_of_votes3.style.display = "block";

}