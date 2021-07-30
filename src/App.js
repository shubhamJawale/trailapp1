import "./App.css";
import { upstate, useState } from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
//npm install react-router-dom
//import { Page1, Page2, Page3, Page4 ,Page5 } from "./pages.js";



export default function App() {
  let [todolist, setlist]  = useState([]);
let [textinp, setinp] =useState("");

let clk= () =>{
  let listchng = [textinp ,...todolist];
  setlist(listchng);
  let str = "";
  setinp(str);

}

  let chnge =(e) =>{
    let textinp1 = e.target.value;
   
    console.log(textinp1); 
    setinp(textinp1);
    
  }

  let rstclr =() =>
  {
    setlist([]);
  }

 
/* value should be written as varibale wich we are setting in above functions cause it will help us in clearing and managing data wirtten fuylly*/
  return (
    <div className="mx-5">
      <div className="border border-danger p-5 mt-5">
      <Heading/>
      
      <input type="text" name="" id="" className="form-control" value={textinp} onChange={chnge} placeholder="Enter Task !  !   !   !  !"/>  
      <button className="btn btn-outline-danger mt-3 px-5" onClick={clk}>Add Note</button> 
      <button className="btn btn-outline-warning mx-3 mt-3 px-5" onClick={rstclr}>Clear List</button> 
        </div>  
        <div className="border border-success p-5 mt-5">
          <h1 className="alert alert-warning px-5"> TASKS </h1>
         {todolist.map((item)=>{return <h1 className="alert alert-success mt-2">{item}</h1>})}
        </div>
      
    </div>
  );
}


// component
function Heading() 
{
  return (<div className="bg-danger px-5 text-light " > <h1> TO DO LIST</h1> </div>)
}
//export default App;
