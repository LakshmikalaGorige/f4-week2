import React, { useEffect, useState } from 'react';
import Data from './Data';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array triggers the effect only once, simulating componentDidMount

  return (
    <div id='heading'>
  
      <table>
        <thead id='thead'>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <Data key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;