// import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import { Button } from 'react-bootstrap';
import './App.css'

function counter_app() {
  const [counter , setCounter] = useState(0);
  const increase_counter = () => {
    setCounter(counter+1)
    console.log(counter)
  }
  const decrease_counter = () => {
    setCounter(counter-1)
    console.log(counter)
  }
  const reset_counter = () => {
    setCounter(0);
  }
  // const HeadingText = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100vh",
  //   backgroundImage:"linear-gradient(to right, #427ceb, #1dad6f)",
  // }

  // const buttonStyle = {
  //   display:"flex",
  //   flexdirection:'column',

  // }
  return(
    <div className='HeadingText'>
      <strong>Counter App</strong>
      <div className='counter-display'>
          {counter}
      </div>
      <div className='buttonStyle'>
        <Button 
        onClick={increase_counter}>
          Add
        </Button>
        <Button
        onClick={decrease_counter}>
          Subtract
        </Button>
      </div>
      <div>
        <Button
          onClick={reset_counter}>
            Reset
          </Button>
      </div>
    </div>
  )
}


export default counter_app