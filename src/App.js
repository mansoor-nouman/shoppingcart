import logo from "./logo.svg";
import "./App.css";
import Shop from "./shopping";
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes,faShoppingCart);
function App() {
  let shopping = [
    {
      name: "Item One",
      price: 24.99,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      name: "Item Two",
      price: 11.99,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    },
    {
      name: "Item Three",
      price: 54.99,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      name: "Item four",
      price: 34.99,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      name: "Item five",
      price: 76,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    },
    {
      name: "Item Six",
      price: 92,
      descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    }
  ];
  let [accessArr, changeVal] = useState([]);
  const [totalval, changeTotal] = useState(0);

  let customEventMtd = ((p) => {
    accessArr.push(p);
    changeVal([...accessArr]);
    let total = (parseFloat(totalval)) + parseFloat(p.price);
    changeTotal(total.toFixed(2));
  })

  let removeItem = (index, item) => {
    document.getElementById(item.name).classList.remove("disabled");
    accessArr.splice(index, 1);
    changeVal([...accessArr]);
    let total = totalval - item.price;
    changeTotal(total.toFixed(2));
  }
  return (
    <div className="container bg-dark">
        <div className="row">
          <div class="col-lg-3">
            <h1 class="my-4 text-white">
              <FontAwesomeIcon icon="shopping-cart"/>
              Cart
            </h1>
            <div class="list-group">
              {
                accessArr.map((item,index) => {
                  return (<li key={index} className="list-group-item">
                    {item.name} - Rs {item.price}
                    <button className="badge badge-primary badge-pill btn float-right" onClick = {() => removeItem(index, item)}><FontAwesomeIcon icon="times"/></button>
                  </li>);
                })
              }
              <li class="list-group-item">
                Total
                <div class="badge badge-danger badge-pill float-right ">
                  Rs {totalval}
                </div>
              </li>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row MarPad10">
            {shopping.map((product, index) => {
            return <Shop key={index} data={product} customEvent={customEventMtd}></Shop>;
          })
          }
        </div>
      </div>
      </div>
      </div> 
  );
}

export default App;
