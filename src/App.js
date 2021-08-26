
import "./App.css";
import { useState } from "react";
import Form from "./form.js"
import RegisterForm from "./form1";
import axios from "axios";
import { useEffect } from "react";
import { start } from "@popperjs/core";

export default function App() {
  const [list, setlist] = useState([]);




  let test = () => {
    axios.get("http://localhost:9096/gp").then(
      (response) => {
        console.log(response);
        setlist(...list, response.data);
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

          return `<h1 key={prodId}>${item.prodId}</td>`;

        }

        )

      }
    </div>
  );
}
