//this component creates a new book
 

export function addbook(book){
 let mybooks =  JSON.parse(localStorage.getItem("Booktable"))
 mybooks.push(book)
 localStorage.setItem("Booktable", JSON.stringify(mybooks))
setInterval()

  
      

   //  console.log(book)
   //  console.log(mybooks)
 
 
}
