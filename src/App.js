import logo from './logo.svg';
import './App.css';
import { upstate, useState } from "react";

// this program demonstrates a staless vrables even though syntactally iit is correct but the c0ounter is limited with scope and its value can not be updated








function App() {
  let [count, setCount] = useState(0);
  let [icon, seticon] = useState("(¬‿¬)")
  let incr = () => {
    console.log(count);
    count += 1;
    setCount(count);
    seticon("(*-*)");


  }


  let rset = () => {
    count = 0;
    setCount(count);
    seticon("(¬‿¬)");
  }

  return (


    <div className="container-lg px-lg  border border-danger p-100 m-100 mt-5 ">
      < h1 > Trail App</h1 >
      <button onClick={incr} className="btn btn-outline-primary rounded m-2">  press me</button>
      <button onClick={rset} className="btn btn-outline-danger rounded m-2"> reset</button>
      <h1 className="text-success"> {icon} {count}</h1>

    </div>
  )
}
export default App;
