
import "./App.css";
import { useState } from "react";
// import Form from "./form.js"
// import RegisterForm from "./form1";
import axios from "axios";
import { useEffect } from "react";
// import { start } from "@popperjs/core";
import { Cardb } from "./cadrfile";

export default function App() {
  const [list, setlist] = useState([{ prodId: 0, productName: 'shubham', productCategory: 'shubham', price: 23.45 }]);

  setlist(...list, { prodId: 1, productName: 'shubham', productCategory: 'shubham', price: 23.45 });


  let test = () => {
    axios.get("http://localhost:9096/gp").then(
      (response) => {
        //console.log(response);
        let data = response.data;
        console.log(response.data[0]);
        //setlist(...list, { prodId: 0, productName: 'shubham', productCategory: 'shubham', price: 23.45 });
        //console.log(list);
      },
      (error) => {
        console.log(error);
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
        list.map((item) => {
          return (<div key={item.prodId}>
            <p> {item.prodId}
              {item.productName}
              {item.productCategory}
              {item.price}
            </p>

          </div>);
        })

      }
    </div>
  );
}
