
import "./App.css";
import { useState } from "react";
// import Form from "./form.js"
// import RegisterForm from "./form1";
import axios from "axios";
import { useEffect } from "react";
// import { start } from "@popperjs/core";
import { Cardb } from "./cadrfile";

export default function App() {
  const [list, setlist] = useState([{}]);




  let test = () => {
    axios.get("http://localhost:9096/gp").then(
      (response) => {
        console.log(response);
        let data = Array.from(response.data);

        setlist(...list, data);
        //console.log(list);
      },
      (error) => {
        console.log("be5ta error alla");
      }


    )

  }
  useEffect(() => {
    test();
  });

  let [list1, setlist1] = useState([])

  let i1 = 0;
  list1 = ['hello', 'shubham', 'jawale'];
  return (
    <div>
      {
        list1.map((item) => {
          return (<div>
            {item}

          </div>);
        })

      }
    </div>
  );
}
