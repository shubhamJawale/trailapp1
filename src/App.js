import logo from './logo.svg';
import './App.css';
import { upstate, useState } from "react";

// this program demonstrates a staless vrables even though syntactally iit is correct but the c0ounter is limited with scope and its value can not be updated








function App() {
  let [count, setCount] = useState(0);

  let incr = () => {
    console.log(count);
    count += 1;
    setCount(count);
  }


  let rset = () => {
    count = 0;
    setCount(count);
  }

  return (


    <div>
      < h1 > trail app</h1 >
      <button onClick={incr}>  press me</button>
      <button onClick={rset}> reset</button>
      <h1> (¬‿¬) {count}</h1>

    </div>
  )
}

export default App;
