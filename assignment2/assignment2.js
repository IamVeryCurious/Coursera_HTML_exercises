var color=["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
var my_position=Math.floor(Math.random()*color.length);
function color_game()
{
  var guess_input=prompt("I am thinking of one of these colors:"+"\n\n"
                +color.join()+"\n\n"+"What color am I thinking of?");
  var guesses=0;
  var guess_position;
  var quit=false;
  while(true)
  {
    if(guess_input==null)
    {
      quit=true;
      break;
    }
    guess_position=color.indexOf(guess_input);
    guesses++;
    if(guess_position == -1)
      alert("Sorry,I don't recognize your color."+"\n\n"+"Please try again.");
    else if(guess_position > my_position)
      alert("Sorry,your guess is not correct!"+"\n\n"
        +"Hint: your color is alphabetically higher than mine."+"\n\n"
        +"Please try again.");
    else if(guess_position < my_position)
      alert("Sorry,your guess is not correct!"+"\n\n"
      +"Hint: your color is alphabetically lower than mine."+"\n\n"
      +"Please try again.");
    else
      break;
    guess_input=prompt("I am thinking of one of these colors:"+"\n\n"
                +color.join()+"\n\n"+"What color am I thinking of?");
  }
  document.bgColor=color[my_position];
  if(quit)
  alert("Game over!"+"\n\n"+"The color is "+color[my_position]+".");
  else
  alert("Congratulations! You have guessed the color!"+"\n\n"
    +"It took you "+guesses+" to finish the game!"+"\n\n"
    +"You can see the color in the background");
}
