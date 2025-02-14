import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://the-cocktail-db3.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '1b843769aemsh1aec3711bf731a1p1fa454jsn464b9efda6de',
          'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
        }
      };

      axios.request(options).then((response) => {

        console.log(response.data);
        setData(response.data);
      }).catch((error) => {
        console.error('Error fetching data:', error);
      })
    }

    return (
      <div className="container mt-4">
        <h1 className="text-center">Cocktail Data</h1>
        <div>
          <button className='btn btn-info' onClick={getData}>
            GET DATA
          </button>
        </div>
        <div className="mt-4">
          {data.length > 0 ? (
            data.map((drink, index) => (
              <div key={index}>
                <h3>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    );
  }

  export default App;
