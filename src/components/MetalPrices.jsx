import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MetalPrices = () => {
  const [prices, setPrices] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.metalpriceapi.com/v1/latest');
        setPrices(response.data); // Set the prices state
      } catch (err) {
        setError('Error fetching prices');
      }
    };

    fetchPrices();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Metal Prices</h1>
      {prices ? (
        <div>
          <p>Gold (XAU): {prices.rates.XAU} USD</p>
          <p>Silver (XAG): {prices.rates.XAG} USD</p>
          <p>Palladium (XPD): {prices.rates.XPD} USD</p>
          <p>Platinum (XPT): {prices.rates.XPT} USD</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MetalPrices;
