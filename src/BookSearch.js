import React from 'react';
import { Button } from 'react-bootstrap';
import Books from './Books';

const BookSearch = (props) => {
    return (
        <div class="search-area">
            <form action="">
            <input onChange={props.handleSearch} type="text"></input>
            <Button type="submit" variant="danger">Search</Button>
            </form>
        </div>
    );
} 

export default BookSearch;