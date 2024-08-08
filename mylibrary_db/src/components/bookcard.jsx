import Delete from "./delete"
function Bookcard({book}){

return(
  <>
    <div style={{
      width:'340px',
      height:"490px",
      backgroundColor:"white",
      boxShadow:"11px 11px  #c4f1e6",
      // borderColor:"rgb(230, 270, 250)",
      border:"1px solid  #98d2e4",
      borderRadius:"10px",
      padding:"10px",
      marginRight:"10px"
      
     
      

    }}>
       <div>
        <img src={book.COVERbook_DESIGN}></img>
      </div> 
      
      <div>

        <h3 style={{
          float:"left"
        }}
        >{book.TITLE}</h3>
        <br></br>
      </div>
      <br></br>
      <span>
      <p style={{
        float:"left",
        marginRight:"50px"
      }}>{book.PUBLISHER}</p>
      <br></br>
      </span>
      <br></br>
      <span style={{fontSize:"30px",
                    float:'left',
                    marginLeft:"-210px"
      }}>{book.PRICE}</span>


<br></br>
<br></br>

<Delete ISBN={book.ISBN}/>
    </div>

    
   </>    
)
}
export default Bookcard;