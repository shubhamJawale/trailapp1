import "./App.css";
import { upstate, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//npm install react-router-dom
import { Page1, Page2, Page3, Page4 ,Page5 } from "./pages.js";

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <NavMenu />
       
        <Route exact={true} path="/page1" component={Page1} />
        <Route exact={true} path="/page2" component={Page2} />
        <Route exact={true} path="/page3" component={Page3} />
        <Route exact={true} path="/page4" component={Page4} />
        <Route exact={true}  path="/page5" component={Page5}  />
        <Route exact={true} path="/" component={Page1} />
      </BrowserRouter>
      
    </div>
  );
}

//component
// name of component should be in pascal case always
function NavMenu() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark text-light d-flex justify-content-center">
      <Link to="/page1" className="text-light px-5 font-weight-bold text-decoration-none"> page1 </Link>
      <Link to="/page2" className="text-light px-5 font-weight-bold text-decoration-none"> page2 </Link>
      <Link to="/page3" className="text-light px-5 font-weight-bold text-decoration-none"> page3 </Link>
      <Link to="/page4" className="text-light px-5 font-weight-bold text-decoration-none"> page4 </Link>
      <Link to="/page5" className="text-light py-3 px-5 font-weight-normal text-decoration-none" > page5 </Link>
    </div>
  );
}

export default App;
