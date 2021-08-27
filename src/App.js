
import "./App.css";
import { useState } from "react";
// import Form from "./form.js"
// import RegisterForm from "./form1";
import axios from "axios";
import { useEffect } from "react";
// import { start } from "@popperjs/core";
import { Cardb } from "./cadrfile";
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [list, setlist] = useState([{}]);



  let test = () => {
    axios.get("http://localhost:9096/gp").then(
      (response) => {
        //console.log(response);
        let data = response.data;
        console.log(response.data[0]);
        // let list2 = [{ prodId: 1, productName: 'shubham', productCategory: 'shubham', price: 23.45 }];
        setlist(response.data);
        toast.success('Data Loaded');

        //setlist(...list, { prodId: 0, productName: 'shubham', productCategory: 'shubham', price: 23.45 });
        //console.log(list);
      },
      (error) => {
        console.log(error);
        console.log("be5ta error alla");
        toast.error('Sorry Something Went Wrong');
      }


    )

  }
  useEffect(() => {
    test();
  }, []);

  let [list1, setlist1] = useState([])

  let i1 = 0;
  list1 = ['hello', 'shubham', 'jawale'];
  return (
    <div className="container">
      <ToastContainer />
      {
        (list.length > 1) ?

          list.map((item) => {

            return (<div className="container  d-flex flex-column bd-highlight mb-3" key={item.prodId}>
              <div className="card  text-center p-2 bd-highlight" style={{ width: '18rem' }}>
                <div className="card-body  text-center">
                  <h5 className="card-title  text-center">{item.productName}</h5>
                  <p className="card-text  text-center">{item.productCategory}</p>
                  <p className="card-text  text-center">{item.price}</p>
                  <p className="card-text  text-center">{item.prodId}</p>
                </div>
              </div>
            </div>);
          }

          ) : <h1>Nothing To Show </h1>

      }
    </div >
  );
}


