import { useEffect, useState, React } from 'react'
import './market.css'
import axios from 'axios';

const Market = () => {
  const [stocks, setStocks] = useState([]);
  const stocksToFetch = ['Apple', 'Microsoft', 'Amazon', 'Google', 'Facebook', 'Tesla', 'Netflix', 'Alphabet', 'IBM', 'Intel']; 



  return (
    <div className='market'>
      <div className='market-container disappear'>
        <h1 > Market Update </h1>
        <table className='market-table'>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Prev. Close</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td>$183.38</td>
              <td className='positive_change'>+10.35%</td>
              <td>$173.03</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>$406.66</td>
              <td className='positive_change'>+8.82%</td>
              <td>$397.84</td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td>$186.21</td>
              <td className='positive_change'>+1.49%</td>
              <td>$184.72</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>$168.99</td>
              <td className='positive_change'>+0.53%</td>
              <td>$168.46</td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>$451.96</td>
              <td className='positive_change'>+10.28%</td>
              <td>$441.68</td>
            </tr>
            <tr>
              <td>Tesla</td>
              <td>$181.19</td>
              <td className='positive_change'>+1.18%</td>
              <td>$180.01</td>
            </tr>
            <tr>
              <td>Draft Kings</td>
              <td>$41.82</td>
              <td className='negative_change'>-1.21%</td>
              <td>$40.27</td>
            </tr>
            <tr>
              <td>NVIDIA</td>
              <td>$887.89</td>
              <td className='positive_change'>+29.72%</td>
              <td>$858.17</td>
            </tr>
            <tr>
              <td>Netflix</td>
              <td>$579.34</td>
              <td className='positive_change'>+14.19%</td>
              <td>$565.15</td>
            </tr>
            <tr>
              <td>AMD</td>
              <td>$150.60</td>
              <td className='positive_change'>+4.44%</td>
              <td>$146.16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}



export default Market