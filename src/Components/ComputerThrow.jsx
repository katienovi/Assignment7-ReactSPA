/*
  Name: Katie Williams
  Date: 04.14.2026
  CSC 372-01

  This is the ComputerThrow.jsx component of my rock, paper, scissors project. It includes the use of a useEffect and functions to
  cycle through images before the computer decides on a final choice, and displays the chosen option along with its name.
*/
import { useEffect, useState } from 'react'
import "../style.css";

function ComputerThrow({choice}){
    //Setting the cycling to false to start.
    const [activeChanging, setActiveChanging] = useState(false);
    //Setting the current image to the question mark as a default.
    const [currentImage, setCurrentImage] = useState('question-mark');


    useEffect( () => {

        //If it's question mark, that means they haven't picked anything yet and we shouldn't be cycling through images.
        if (choice === 'question-mark'){
            return;
        }

        //If its not question mark, we can start cycling.
        setActiveChanging(true);
        //Array of possible options for the computer.
        const computerOptions = ['rock', 'paper', 'scissors']
       

        //This function uses an interval to randomly cycle through images and set them as the current image.
        function changingImage() {
            const randomImages = computerOptions[Math.floor(Math.random() * 3)];
            setCurrentImage(randomImages);
        }


        //This function clears the interval, sets the cycling to false, and sets the current iamge as the final computer choice.
        function finalImage() {
            clearInterval(interval);
            setActiveChanging(false);
            setCurrentImage(choice);
        }

         const interval = setInterval(changingImage, 500);
         setTimeout(finalImage, 3000);

    }, [choice]);

    return(
        <div className="computer-card">
        <div className="computer-container">
            <img id="computer-img" src={`Images/${currentImage}.PNG`} alt="computers throw"/>

            <p id="computer-text"> {currentImage === 'question-mark' ? "Select an option!" : `Computers throw: ${currentImage}`}</p>
        </div>
    </div>
    )
}


export default ComputerThrow;