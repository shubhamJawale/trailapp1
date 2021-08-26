
import "./App.css";
import { useState } from "react";
// import Form from "./form.js"
// import RegisterForm from "./form1";
import axios from "axios";
import { useEffect } from "react";
// import { start } from "@popperjs/core";

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

  return (
    <div>
      {


        list.map((item) => {

          return <div>
            <h1 key={item.prodId}>{item.prodId}</h1>;
            <h1>{item.productName}</h1>;
            <h1>{item.productCategory}</h1>;
            <h1>{item.price} </h1>
          </div>
        }

        )

      }
    </div>
  );
}
