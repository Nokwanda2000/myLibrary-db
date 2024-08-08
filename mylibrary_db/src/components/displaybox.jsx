
import Bookcard from "./bookcard"
function Displaybox({bookList}){


    return(
    <>
    <div style={{
        display:"flex"
    
    }}>

    {bookList.map(item=>(
         <Bookcard key={item.ISBN} book={item}/> 
        ))}
    </div>
    </>
    )

}
export default Displaybox;