import Button from 'react-bootstrap/Button';

function counter_app() {
  let counter = 0;
  return(
    <>
      <Button type='reset' onClick={() => {
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
      <Button onClick={}>{counter}</Button>
    </>
  )
}

export default counter_app