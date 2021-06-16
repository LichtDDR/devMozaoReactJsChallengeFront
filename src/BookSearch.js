import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import css from './index.css';
const user = 'Mikael';

const BookSearch = () => {
    const [data, setData] = useState({ items: [], volumeInfo: "", id: ""});
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const themes = {
      light: {
        foreground: "#000000",
        background: "#eeeeee"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
    }
    const ThemeContext = React.createContext(themes.light);

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return (
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      );
    }
    
    function Toolbar(props) {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
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
          <header>
            <nav>
              <img src="" />
              <ul>
                <li><a href="#">Perfil</a></li>
                <li><a href="#">Carrinho</a></li>
                <li><a href="#">Sobre nós</a></li>
              </ul>
            </nav>
            <input className="bookSearch" type="text" placeholder="Enter book name" value={query} onChange={event => setQuery(event.target.value)} />
            <Button variant="danger" onClick={() => setUrl(`https://www.googleapis.com/books/v1/volumes?q=${query}`)}>Enter</Button>
            <h1>Welcome, {user}</h1>
          </header>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
          <div className="book">
            {data.items.map(book => (
                  <div className="product">
                    <a href={book.selfLink}>
                      <img src={book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.thumbnail}  alt="img"/>
                    </a>
                      <div className="author">
                        {book.volumeInfo.title}
                        <h5>Authors: {book.volumeInfo.authors}</h5>
                        <Button className="buy" variant="danger">Comprar</Button>
                      </div>
                  </div>
            ))}
          </div>
          )}
        </div>
      );
}

export default BookSearch;