import { useEffect, useState, React } from 'react'
import './market.css'
import axios from 'axios';
import { API_KEY } from '../../config';
const Market = () => {
  const [stocks, setStocks] = useState([]);
  const stocksToFetch = ['Apple', 'Microsoft', 'Amazon', 'Google', 'Facebook', 'Tesla', 'Netflix', 'Alphabet', 'IBM', 'Intel']; 

  useEffect(() => {
    const fetchStocks = async () => {
      const stocksData = [];

      for (const stock of stocksToFetch) {
        const options = {
          method: 'GET',
          url: 'https://real-time-finance-data.p.rapidapi.com/search',
          params: { query: stock, language: 'en' },
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          stocksData.push(...response.data.data.stock.slice(0, 1));
        } catch (error) {
          console.error(error);
        }
      }

      setStocks(stocksData);
    };

    fetchStocks();
  }, []);


  return (
    <div className='market'>
      <div className='market-container disappear'>
        <h1 > Market Update </h1>
        <table className='market-table'>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>24hr Change</th>
              <th>Prev. Close</th>
            </tr>
          </thead>
          <tbody>
          {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.name}</td>
                <td>{"$" + stock.price}</td>
                <td className={stock.change_percent > 0 ? "positive_change" : "negative_change"}>{stock.change_percent.toFixed(2) + "%"}</td>

                <td>{"$"+stock.previous_close}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='market-select'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>

      </div>
    </div>
  )
}



export default Market