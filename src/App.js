import React, {useState} from 'react'
import Icon from './Icon/Icon'
// React toastify
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './App.css'



const App = () => {

const tiktokArray = new Array(9).fill("")
const [winMessage, setWinMessage] = useState("")
const [isCross, setIsCross] = useState(true)

// Restart tthe game  
const restartGame = () => {
    tiktokArray.fill("") 
    setWinMessage("") 
    setIsCross(true)
}

// win Logic 
const winLogic = () => {
    if(tiktokArray[0] == tiktokArray[1] && tiktokArray[0] == tiktokArray[2] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[3] == tiktokArray[4] && tiktokArray[3] == tiktokArray[5] && tiktokArray[3] !== ""){
        console.log("winner is", tiktokArray[3])
      }
      else if(tiktokArray[6] == tiktokArray[7] && tiktokArray[6] == tiktokArray[8] && tiktokArray[6] !== ""){
        console.log("winner is", tiktokArray[6])
      }
      //colums 
      else if(tiktokArray[0] == tiktokArray[3] && tiktokArray[0] == tiktokArray[6] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[1] == tiktokArray[4] && tiktokArray[1] == tiktokArray[7]  && tiktokArray[1] !== ""){
        console.log("winner is", tiktokArray[1])
      }
      else if(tiktokArray[2] == tiktokArray[5] && tiktokArray[2] == tiktokArray[8] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
      //diagnoles 
      else if(tiktokArray[0] == tiktokArray[4] && tiktokArray[0] == tiktokArray[8] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[2] == tiktokArray[4] && tiktokArray[2] == tiktokArray[6] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
}

// fill tik tok array  
const fillTiktokArray = (index) => {
    if(winMessage !== ""){
        return  toast.error('Game has already ended', {
            position: "bottom-center"
            });
    }
    if(tiktokArray[index] !== ""){
        return  toast.error('This box is already filled', {
            position: "bottom-center"
            });
    }
    else{
        tiktokArray[index] =  isCross ? "cross" : "circle"
        setIsCross(!isCross)
    }
    winLogic()
}

// design of tik tok game

    return(
          <div>
            <div className='container'>
              <p>TIKTAKTOE</p>
              <div className='row'>
                <input type="text" value="x" />
                <input type="text" value="x" />
                <input type="text" value="x" /><br />
                <input type="text" value="o" />
                <input type="text" value="o" />
                <input type="text" value="o" /><br />
                <input type="text" value="x"/>
                <input type="text" value="x" />
                <input type="text" value="x" />
                <button>START</button>
              </div>
            </div>
          </div>
        // put some value in them  
        // lets connect it with a button 


    )
}
export default App