import {addbook} from "./addbook";
import React, { useState } from 'react';
 
function Register(){

  const [inputs, setInputs] = useState({
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
// console.log(book)
   
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      console.log(inputs)

      const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs);
        // alert('Form successfully submitted!');
        addbook(inputs)
      }

      
    return(
        <>
        <div style={{display:"flex"}}>
<div style={{
    width:"370px",
    height:"600px",
    backgroundColor:"#847cf0",
    borderRadius:"20px",
    alignContent:"center"
  

}}>

<p style={{
  fontSize:"40px",
  color:"white"
}}

>Share your story Inspire a reader</p>
<img></img>

</div>
<div style={{
    height:"600px",
    width:"400px",
    backgroundColor:"white",
    float:"left",
    marginRight:"-300px",
    boxShadow:"11px 11px  #e4e4ee ",
    borderRadius:"20px",
    alignContent:"center",
    alignItems:"center"
  

}}>


  
    <p style={{
        fontSize:"20px"
    }}>Add a book to Library</p>


    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="ISBN"
          value={inputs.ISBN}
          placeholder="ISBN"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <br></br>
        <input
          type="text"
          name="TITLE"
          value={inputs.TITLE}
          placeholder="Title"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <br></br>
        <input
          type="number"
          name="PAGES_NUM"
          value={inputs.PAGES_NUM}
          placeholder="Pages"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <br></br>
        <input
          type="text"
          name="EDITION"
          value={inputs.EDITION}
          placeholder="Edition"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <br></br>
        <input
          type="text"
          name="PUBLISHER"
          value={inputs.PUBLISHER}
          placeholder="Publisher"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
    
        <br></br>
        <input
          type="text"
          name="EDITOR"
          value={inputs.EDITOR}
          placeholder="Editor"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <br></br>
        <input
          type="text"
          name="COVER_BOOK_DESIGN"
          value={inputs.COVER_BOOK_DESIGN}
          placeholder="Cover Design"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        
        <br></br>
        <input
          type="text"
          name="PRICE"
          value={inputs.PRICE}
          placeholder="Price"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>

        <br></br>
        <input
          type="text"
          name="FORMAT"
          value={inputs.FORMAT}
          placeholder="Format"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
    
        <br></br>
        <input
          type="date"
          name="RELEASE_DATE"
          value={inputs.RELEASE_DATE}
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
        {/* <addbook/> */}
        </>


    )

}
export default Register;