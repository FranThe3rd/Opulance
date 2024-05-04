
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
