import Addbook from "./addbook";
import React, { useState } from 'react';

function Register(){

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        alert("Succesful")
        
      };

      const [book, setBook] = useState({
        ISBN: '',
        TITLE: '',
        PAGES_NUM: '',
        EDITION: '',
        PUBLISHER: '',
        EDITOR: '',
        COVER_BOOK_DESIGN: '',
        PRICE: '',
        FORMAT: '',
        RELEASE_DATE: '',
      });
    return(
        <>
        <div style={{display:"flex"}}>
<div style={{
    width:"370px",
    height:"600px",
    backgroundColor:"#847cf0",
    borderRadius:"20px",
  

}}>



</div>
<div style={{
    height:"600px",
    width:"400px",
    backgroundColor:"white",
    float:"left",
    marginRight:"-300px",
    boxShadow:"11px 11px  #e4e4ee ",
    borderRadius:"20px",
    alignContent:"center"
  

}}>


  
    <p style={{
        fontSize:"20px"
    }}>Create an Account</p>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="ISBN"
          value={book.ISBN}
          placeholder="ISBN"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <input
          type="text"
          name="TITLE"
          value={book.TITLE}
          placeholder="Title"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <input
          type="number"
          name="PAGES_NUM"
          value={book.PAGES_NUM}
          placeholder="Pages"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <input
          type="text"
          name="EDITION"
          value={book.EDITION}
          placeholder="Edition"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        
        <input
          type="text"
          name="PUBLISHER"
          value={book.PUBLISHER}
          placeholder="Publisher"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
    
        
        <input
          type="text"
          name="EDITOR"
          value={book.EDITOR}
          placeholder="Editor"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        
        <input
          type="text"
          name="COVER_BOOK_DESIGN"
          value={book.COVER_BOOK_DESIGN}
          placeholder="Cover Design"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        
        <input
          type="text"
          name="PRICE"
          value={book.PRICE}
          placeholder="Price"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>

        
        <input
          type="text"
          name="FORMAT"
          value={book.FORMAT}
          placeholder="Format"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
    
        
        <input
          type="date"
          name="RELEASE_DATE"
          value={book.RELEASE_DATE}
          placeholder="Release Date"
          onChange={handleChange}
        />
      </label>
      <br />
      <br/>
      <button style={{
        backgroundColor:"blue",
        width:"200px",
        color:"white"
      }} type="submit">Register</button>
    </form>

</div>


  </div>      
        <Addbook/>
        </>


    )

}
export default Register;