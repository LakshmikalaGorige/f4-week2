import React from 'react';

const Data = ({ coin }) => {


  const percentage=(coin.price_change_percentage_24h).toFixed(2);
  console.log(percentage)
  const color=percentage>=0?"green":"red";
  return (
    <tr className='border-bottom'>
      <td><img id="images" src={coin.image} alt="${coin.name}"></img></td>
      <td>{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
      <td className={color}>{(coin.price_change_percentage_24h).toFixed(2)}%</td>
      <td>Mkt Cap: ${coin.market_cap}</td>
    </tr>
  );
};

export default Data;