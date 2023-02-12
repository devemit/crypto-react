import { useState, useEffect } from 'react';
import axios from 'axios';
import Token from './Token';

const Explore = () => {
  const API =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(API).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);
  return (
    <div className='px-10 max-w-[1200px] mx-auto py-24 md:grid grid-cols-2 bg-slate-100 '>
      <div id='left'>
        <h1 className='text-4xl md:text-4xl lg:text-5xl  font-bold text-black max-w-md md:py-10'>
          Explore top Crypto's like Bitcoin,Ethereum and Cardano.
        </h1>
        <h2 className='text-gray-900 text-lg py-2  font-semibold '>
          See all avaiable assets: Cryptocurrencies and NFT's
        </h2>
        <div className='py-10'>
          <button className='bg-green-600 text-white px-7 py-2 text-lg rounded-tr-2xl rounded-bl-2xl cursor-pointer font-semibold'>
            See More Coins
          </button>
        </div>
      </div>
      <div id='right'>
        <div className='cursor-pointer'>
          <Token data={data} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
