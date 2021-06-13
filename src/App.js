import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import CSS from './index.css';
import { useState, useEffect } from 'react';
const user = 'Mikael';

function App() {
  const [data, setData] = useState({ items: [], volumeInfo: "", id: ""});
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
 
  return (
    <div className="container">
          <input className="bookSearch" type="text" placeholder="Enter book name" value={query} onChange={event => setQuery(event.target.value)} />
          <Button variant="danger" onClick={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${query}`)}>Enter</Button>
      <h1>Welcome, {user}</h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
      <div>
        {data.items.map(book => (
            <li>
              <img href={book.selfLink}src={book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.thumbnail}  alt="img"/>
              <a>{book.volumeInfo.title}</a>
            </li>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;