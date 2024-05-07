
# Place This Use Effect In The Market JSX

```
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
            'X-RapidAPI-Key': 'MYAPIKEY',
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
```
# Place In Between The Tbody

```
{stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.name}</td>
                <td>{"$" + stock.price}</td>
                <td className={stock.change_percent > 0 ? "positive_change" : "negative_change"}>{stock.change_percent.toFixed(2) + "%"}</td>

                <td>{"$"+stock.previous_close}</td>
              </tr>
            ))}
```


## Default

```
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


```
