# rock_paper_scissors
This repository is part of the learning at [The Odin Project](https://www.theodinproject.com/)

# Web Development 101
## PROJECT: ROCK PAPER SCISSORS

### Introduction

We’re going to make a simple implementation of grade-school classic “rock paper 
scissors”. If you don’t know what that is check the wikipedia article or this 
ridiculous step-by-step. For the moment we’re just going to play the game from 
the browser console, but we will revisit it and add a front end later so don’t 
forget to keep the code on GitHub! You might notice some ‘view in browser’ links
in the student solutions - this is coming in a later lesson. When you get there 
don’t forget to come back and add your link!

### Assignment

1. Start a new git repo for your project.
2. Create a blank HTML document with a script tag. This game is going to be played 
completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called 
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play.
4. Write a function that plays a single round of Rock Paper Scissors. The function 
should take two parameters - the playerSelection and computerSelection - and 
then return a string that declares the winner of the round like so: "You Lose! 
Paper beats Rock"
    1. make your function case insensitive (so users can input rock, ROCK, RocK or any 
other variation)
    2. Important note: you want to return the results of this function call, not 
console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
Student Solutions
Submit a solution with a pull request to this file on the Javascript Curriculum github repository. See the section on Contributing for how.

 Show Student Solutions
View Course
Next Lesson
 Improve this lesson on GitHub
Have a question?

Chat with our friendly Odin community in our Discord chatrooms!

Open Discord
Are you interested in accelerating your web development learning experience?
Get started
Thinkful
5-6 months

Job Guarantee

1-on-1 Mentorship


THE ODIN PROJECT
About
FAQ
Blog
Success Stories
Contribute
Terms of Use
