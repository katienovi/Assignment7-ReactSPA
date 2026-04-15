/*
  Name: Katie Williams
  Date: 04.14.2026
  CSC 372-01

  This is the App.jsx page of my rock, paper, scissors project. It includes the main functionality that decides the computers choice,
  sets up the players choice, decides the winner, and utilizes components to run the program.
*/

//Importing use states, styles, and components
import { useState, useEffect } from 'react'
import './App.css'
import './style.css'
import PlayerThrow from './Components/PlayerThrow';
import ComputerThrow from './Components/ComputerThrow';
import ResultsDisplay from './Components/ResultsDisplay';

function App() {
  //Setting the initial player choice to null before they choose anything.
  const [playerChoice, setPlayerChoice] = useState(null);
  //Setting the initial computer choice to question mark.
  const [computerChoice, setComputerChoice] = useState('question-mark');
  //Setting the initial result to null.
  const [result, setResult] = useState(null);

//Using a useEffect to update whenever the user selects a new choice. It selects a throw for the computer, then sends that information
//To the getFinal function to determine if they win/lose/tie.
  useEffect( () => {
    
    //Should only run when the user selects an object -> We're just checking they have so it doesnt automatically start running.
    if (playerChoice != null){
    //All possible computer throws
    const computerThrows = ['rock', 'paper', 'scissors'];
    //Selecting a random option from the above array.
    const choiceNumber = Math.floor(Math.random()*3);
    //Setting a variable (computer value) equal to the randomly chosen option.
    const computerValue = computerThrows[choiceNumber];

    //Setting the computer value to the final choice.
    setComputerChoice(computerValue);

    //Calling getFinal to deterime if they win/lose/tie.
    const finalChoice = getFinal(playerChoice, computerValue);
    //Setting the result equal to the above decision.
    setResult(finalChoice);
    }

}, [playerChoice]);

//This function contains the logic which decides if the player wins, losses, or ties.
//player = the players final choice.
//computer = the computers final choice.
  function getFinal(player, computer){
      if (player === computer){
        return "tie";
      }
      if (player === 'rock' && computer === 'scissors'){
        return "win";
      }
      if (player === 'paper' && computer === 'rock'){
        return "win"
      }
      if (player === 'scissors' && computer === 'paper'){
        return "win";
      }

      return "lose";
  } 




  return (
    <>
     <h1>Rock, Paper, Scissors, GO!</h1>

     <PlayerThrow
        selected={playerChoice}
        setPlayerChoice={setPlayerChoice}
      />

      <ComputerThrow choice={computerChoice} />
      <ResultsDisplay result={result} />

    </>
  )
}

export default App
