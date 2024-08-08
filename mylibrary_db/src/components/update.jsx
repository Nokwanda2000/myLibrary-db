//this is the component for book update
// import { Delete } from "./delete";
import { BookCard, Delete } from '../components'; //
t
import React, { useState, useEffect } from 'react';

function Update(){

    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('Booktable'));
        setBooks(stored || []);
      }, []);

    return(
        <>

        <button>Update</button>
        </>
    )

}
export default Update;