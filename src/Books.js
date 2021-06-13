import { Button } from 'react-bootstrap';
import React, { response } from 'react';
import { useState, useEffect } from 'react';
const query = 'harry potter';

const Books = () => {
    const [values, handleBookNames] = useState({ 
        books: [], 
        bookName: ''
    });

    useEffect( async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}key=AIzaSyAQAj5KCkqnAy9ZrFTVsGAyhYNgFUe-oRc`)
        const data = await response.json();
        const [book] = data.results;
        console.log(handleBookNames(book));
    }, []);
    
        return (
            <div>
                <div class="search-area">
                    <form action="">
                        <input value={values.bookName} onChange={handleBookNames} type="text"></input>
                        <Button type="submit" variant="danger">Search</Button>
                        {values && <div>{values.volumes}</div>}
                    </form>
                </div>
            </div>
        )
}

export default Books;