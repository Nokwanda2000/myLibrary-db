//this component creates a new book
function Addbook({book}){
 let mybooks =  JSON.parse(localStorage.getItem("Booktable"))
 mybooks.push(book)

 localStorage.setItem("Booktable",JSON.stringify(mybooks))
  
      

    console.log(book)
    console.log(mybooks)
 return(
    <></>
 )
}
export default Addbook;