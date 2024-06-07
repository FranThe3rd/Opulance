import { useEffect, useState, React } from 'react'
import './market.css'
import axios from 'axios';
import { API_KEY } from '../../config';
import {Link as LinkScroll} from 'react-scroll'

const Market = () => {





  /**
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
  */




  const stocksDataOne = [
    {
      stock: 'Apple',
      price: '$183.38',
      change: '+10.35%',
      prevClose: '$173.03',
    },
    {
      stock: 'Microsoft',
      price: '$406.66',
      change: '+8.82%',
      prevClose: '$397.84',
    },
    {
      stock: 'Amazon',
      price: '$186.21',
      change: '-1.49%',
      prevClose: '$184.72',
    },
    {
      stock: 'Google',
      price: '$168.99',
      change: '+0.53%',
      prevClose: '$168.46',
    },
    {
      stock: 'Facebook',
      price: '$451.96',
      change: '-3.28%',
      prevClose: '$441.68',
    },
    {
      stock: 'Tesla',
      price: '$181.19',
      change: '+1.18%',
      prevClose: '$180.01',
    },
    {
      stock: 'Draft Kings',
      price: '$41.82',
      change: '-1.21%',
      prevClose: '$40.27',
    },
    {
      stock: 'NVIDIA',
      price: '$887.89',
      change: '+29.72%',
      prevClose: '$858.17',
    },
    {
      stock: 'Netflix',
      price: '$579.34',
      change: '+14.19%',
      prevClose: '$565.15',
    },
    {
      stock: 'AMD',
      price: '$150.60',
      change: '-4.44%',
      prevClose: '$146.16',
    },
  ];

  const stocksDataTwo = [
      {
        stock: 'Johnson & Johnson',
        price: '$163.12',
        change: '+0.32%',
        prevClose: '$162.80',
      },
      {
        stock: 'Visa',
        price: '$236.45',
        change: '+1.17%',
        prevClose: '$235.28',
      },
      {
        stock: 'Walmart',
        price: '$152.88',
        change: '-0.74%',
        prevClose: '$151.14',
      },
      {
        stock: 'JPMorgan Chase',
        price: '$139.21',
        change: '+0.92%',
        prevClose: '$138.29',
      },
      {
        stock: 'Coca-Cola',
        price: '$61.35',
        change: '+0.66%',
        prevClose: '$60.69',
      },
      {
        stock: 'Disney',
        price: '$92.47',
        change: '-2.18%',
        prevClose: '$90.29',
      },
      {
        stock: 'Pfizer',
        price: '$38.62',
        change: '+1.47%',
        prevClose: '$37.15',
      },
      {
        stock: 'Nike',
        price: '$109.18',
        change: '+2.35%',
        prevClose: '$106.83',
      },
      {
        stock: 'Boeing',
        price: '$208.64',
        change: '-1.12%',
        prevClose: '$207.52',
      },
      {
        stock: 'Salesforce',
        price: '$185.27',
        change: '+3.24%',
        prevClose: '$182.03',
      },
    ];

  const stocksDataThree = [
      {
        stock: 'Berkshire Hathaway',
        price: '$328,500.00',
        change: '+1.23%',
        prevClose: '$324,500.00',
      },
      {
        stock: 'Exxon Mobil',
        price: '$107.82',
        change: '-0.56%',
        prevClose: '$108.44',
      },
      {
        stock: 'Procter & Gamble',
        price: '$156.34',
        change: '+0.87%',
        prevClose: '$155.47',
      },
      {
        stock: 'Mastercard',
        price: '$374.62',
        change: '+1.51%',
        prevClose: '$373.11',
      },
      {
        stock: 'Home Depot',
        price: '$301.21',
        change: '-0.42%',
        prevClose: '$299.79',
      },
      {
        stock: 'Verizon',
        price: '$37.28',
        change: '+0.19%',
        prevClose: '$37.09',
      },
      {
        stock: 'Chevron',
        price: '$168.43',
        change: '-1.18%',
        prevClose: '$167.25',
      },
      {
        stock: 'McDonald\'s',
        price: '$288.62',
        change: '+0.74%',
        prevClose: '$287.88',
      },
      {
        stock: 'UnitedHealth Group',
        price: '$492.17',
        change: '+2.31%',
        prevClose: '$489.86',
      },
      {
        stock: 'Costco',
        price: '$519.35',
        change: '-0.63%',
        prevClose: '$517.72',
      },
    ];

  const stocksDataFour = [
      {
        stock: 'Intel',
        price: '$30.12',
        change: '+2.17%',
        prevClose: '$29.95',
      },
      {
        stock: 'Cisco',
        price: '$51.28',
        change: '+0.94%',
        prevClose: '$50.34',
      },
      {
        stock: 'IBM',
        price: '$136.71',
        change: '-0.38%',
        prevClose: '$135.33',
      },
      {
        stock: 'Oracle',
        price: '$88.24',
        change: '+1.63%',
        prevClose: '$87.61',
      },
      {
        stock: 'Comcast',
        price: '$41.16',
        change: '-1.27%',
        prevClose: '$39.89',
      },
      {
        stock: 'Lockheed Martin',
        price: '$480.55',
        change: '+0.72%',
        prevClose: '$479.83',
      },
      {
        stock: 'Caterpillar',
        price: '$217.39',
        change: '-1.44%',
        prevClose: '$215.95',
      },
      {
        stock: 'Starbucks',
        price: '$105.62',
        change: '+0.91%',
        prevClose: '$104.71',
      },
      {
        stock: 'Adobe',
        price: '$483.27',
        change: '+2.58%',
        prevClose: '$480.69',
      },
      {
        stock: 'PayPal',
        price: '$69.34',
        change: '-2.19%',
        prevClose: '$67.15',
      },
    ];



    const [stockArray, setStockArray] = useState(stocksDataOne);

    const changeStocksOne = () => {
      setStockArray(stocksDataOne);
      
    }


    const changeStocksTwo = () => {
      setStockArray(stocksDataTwo);
      
    }

    const changeStocksThree = () => {
      setStockArray(stocksDataThree);
      
    }

    const changeStocksFour = () => {
      setStockArray(stocksDataFour);
      
    }


    
  

  return (
    <div className='market'>
      <div className='market-container disappear'>
        <h1> Market Update </h1>
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
            {stockArray.map((stock) => (
              <tr key={stock.stock}>
                <td>{stock.stock}</td>
                <td>{stock.price}</td>
                <td className={stock.change.includes('+') ? 'positive_change' : 'negative_change'}>{stock.change}</td>
                <td>{stock.prevClose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='market-select'>
      <LinkScroll to='market-container' smooth={true} duration={1000}>
        <button onClick={changeStocksOne}>1</button>
        </LinkScroll>
        <LinkScroll to='market-container' smooth={true} duration={1000}>

        <button onClick={changeStocksTwo}>2</button>
        </LinkScroll>
        <LinkScroll to='market-container' smooth={true} duration={1000}>

        <button onClick={changeStocksThree}>3</button>
        </LinkScroll>
        <LinkScroll to='market-container' smooth={true} duration={1000}>

        <button onClick={changeStocksFour}>4</button>
        </LinkScroll>

      </div>
    </div>
  )
}



export default Market