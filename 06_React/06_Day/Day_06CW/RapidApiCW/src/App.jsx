import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    const options = {
      method: "GET",
      url: "https://pizza-and-desserts.p.rapidapi.com/pizzas/1",
      headers: {
        "x-rapidapi-key": "1b843769aemsh1aec3711bf731a1p1fa454jsn464b9efda6de",
        "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setData([response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="text-center mt-5 container">
        <button className="btn btn-info" onClick={getData}>
          Get Data From API Pizza and Dessert
        </button>
        <hr />
      </div>

      <section className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="card col-12 col-md-6 col-lg-3 my-3" key={index}>
              <img
                src={item.img}
                className="card-img-top img-fluid"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Veg:</strong> {item.veg ? "Yes ✅" : "No ❌"}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <a href="#" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
