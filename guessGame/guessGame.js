//var my_number = Math.floor(Math.random() * 20);
var count = 0;

function new_game ( )
{
	count = 0;
  document.getElementById("userGuess").value = "";

  //my_number = rand ( 100 );
  
 
}


function make_guess ( )
{

  var userGuess = parseInt(document.getElementById("userGuess").value);
  var userNumber = parseInt(document.getElementById("userNumber").value);
  
  if ( userGuess > userNumber )
  {
	  count++;
    document.getElementById("results").innerHTML = "The Guess was too high!";
  }
  else if ( userGuess < userNumber )
  {
	  count++;
    document.getElementById("results").innerHTML = "The Guess was too low!";
  }
  else
  {
	  count++;
    document.getElementById("results").innerHTML = "Congratulations the number was "+ userNumber;
	document.getElementById("Count").innerHTML = "The number of guesses was "+ count;
    new_game ( );
  }
}