// import Button from 'react-bootstrap/Button';
import { useState, CSSProperties } from 'react';
import { Button } from 'react-bootstrap';

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
        onClick={increase_counter}>+</Button>
        <Button
        style={styles.counter}  
        >{counter}</Button>
        <Button 
        style={styles.counter}
        onClick={decrease_counter}>
          -
        </Button>
      </div>
    </>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100',
    width:'100',
  },
  button: {
    margin: '5px',
  },
  counter: {
    fontSize: '2rem',
    margin: '10px',
    height: '100',
    width: '500',
  },
};
export default counter_app