import React from 'React';
const query = 'harry potter';

fetch("https://www.googleapis.com/books/v1/volumes?q=${query}")
const BookView = () => {
    return (
        <h4>Discover a new book</h4>
    );
}