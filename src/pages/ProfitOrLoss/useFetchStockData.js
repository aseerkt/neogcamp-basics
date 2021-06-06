import { useEffect, useState } from 'react';

export default function useFetchStockData() {
  const [data, setData] = useState(null);

  console.log(process.env.REACT_APP_RAPID_API_KEY);

  useEffect(() => {
    fetch(
      'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=AMRN&region=IN',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        console.log(resData);
        setData(resData);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
}
