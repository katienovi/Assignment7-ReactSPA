/*
  Name: Katie Williams
  Date: 04.14.2026
  CSC 372-01

  This is the ResultsDisplay.jsx component of my rock, paper, scissors project. It displays a final message based on information from
  App.jsx to see if the user won, lost, or tied. 

*/
import "../style.css";

function ResultsDisplay( {result} ){
    const finalMessage = {
        win : 'You won!',
        lose: 'You lose :(',
        tie : 'You tied!'
    }
    
    return(
        <div className="results-card">
                    <p id="final-text">Results: {finalMessage[result]}
                    </p>
        </div>

    )
}

export default ResultsDisplay;