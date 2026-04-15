/*
  Name: Katie Williams
  Date: 04.14.2026
  CSC 372-01

  This is the PlayerThrow.jsx component of my rock, paper, scissors project. It handles user input when they select an image, changes
  the image to be highlighted, sets the users choice and displays what the user selected in text. 
*/
import "../style.css";


function PlayerThrow({selected, setPlayerChoice}){

    return (
    <>
      <div className="card">
        <div className="container">
            <img id ="rock-img" src="Images/rock.PNG" alt="rock" 
            className = {selected === 'rock' ? 'selected' : ''}
            onClick={() => setPlayerChoice('rock')} />

            <img id = "paper-img" src="Images/paper.PNG" alt="paper" 
            className = {selected === 'paper' ? 'selected' : ''}
            onClick={() => setPlayerChoice('paper')}/>

            <img id = "scissors-img" src="Images/scissors.PNG" alt="scissors" 
            className = {selected === 'scissors' ? 'selected' : ''}
            onClick={() => setPlayerChoice('scissors')}/>

            <p id="user-text">Your throw: {selected}</p>
        </div>
    </div>

    </>
  );

}


export default PlayerThrow;