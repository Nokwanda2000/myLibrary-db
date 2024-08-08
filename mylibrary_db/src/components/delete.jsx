//this is a component for delete book
import React, { useState, useEffect } from 'react';

function Delete({ ISBN }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('Booktable'));
   setBooks(storedBooks || [])
    
  }, []);

  const handleDelete = () => {
    const updatedBooks = books.filter((item) => item.ISBN !== ISBN);
    setBooks(updatedBooks);
    console.log(updatedBooks)
    localStorage.setItem('Booktable', JSON.stringify(updatedBooks));
  };

  return (
    <button style={{backgroundColor:"lightRed"}} onClick={handleDelete}>Delete</button>
  );
}

export default Delete;
