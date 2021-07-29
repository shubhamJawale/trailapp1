import logo from './logo.svg';
import './App.css';
import { upstate, useState } from "react";

// this program demonstrates a staless vrables even though syntactally iit is correct but the c0ounter is limited with scope and its value can not be updated
function App() {
  let count = 0;

  let incr = () => {
    console.log(count);
    count += 1;
  }


  return (


    <div>
      < h1 > trail app</h1 >
      <button onClick={incr}> press me</button>
      <h1>{count}</h1>

    </div>
  )
}

export default App;
