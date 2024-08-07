//this is a component for delete book
function Delete({isbn}){

    let remove = localStorage.getItem("Booktable");

    // const replace =

    function HandleDelete(){



    }

    return(
        
        <button onClick={HandleDelete()}>Delete</button>
        
    )

}
export default Delete;