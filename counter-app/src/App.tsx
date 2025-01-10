// import Button from 'react-bootstrap/Button';
import { useState, CSSProperties } from 'react';
import { Button } from 'react-bootstrap';

function counter_app() {
  const [counter , setCounter] = useState(0);
  return(
    <>
      {/* <Button type='reset' onClick={() => {
        counter=0;
        console.log(`value of counter var is ${counter}`);
      }}>Reset</Button>
      <Button type='reset' 
      onClick={() => {
        counter++;
        console.log(`value of counter var is ${counter}`);
      }}>+</Button>
      <Button type='reset' 
      onClick={() => {
        counter--;
        console.log(`value of counter var is ${counter}`);
      }}
      >-</Button>
      <Button onClick={() => {}}>{counter}</Button> */}
      <div style={styles.container}>
        <Button 
        style = {styles.counter}
        onClick={(counter) => {
          // setCounter(counter+1)
        }}>Add</Button>
      </div>
    </>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    margin: '5px',
  },
  counter: {
    fontSize: '2rem',
    margin: '10px',
  },
};
export default counter_app