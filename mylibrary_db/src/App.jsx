import { useState } from 'react'

import './App.css'
import Delete from './components/delete'
import Addbook from './components/addbook'
import Update from './components/update'
import Displaybox from './components/displaybox'
import Bookcard from './components/bookcard'
import Register from './components/register'

function App() {


  let Booktable = [{ISBN:"NO2",
    TITLE:"The fire next time",
    PAGES_NUM:"3002",
    EDITION:"First edition",
    PUBLISHER:"by Nokwanda Chonco",
    EDITOR:"Nokwazi_Mhlongo",
    COVERbook_DESIGN:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3KRT0kLpmZrokovQ5MTYijsFoljPuQFgBkNXx7y5g9r1PxsLaVloBnyj4jvW0Zab3dg&usqp=CAU",
    PRICE:"$100",
    FORMAT:"pdf",
    RELEASE_DATE:"2019/06/14"

                
  
  },{
        ISBN:"NO3",
        TITLE:"THE DAYS",
        PAGES_NUM:"2006",
        EDITION:"THIRD_ADD",
        PUBLISHER:"MUZI",
        EDITOR:"Z.P DLUDLA",
        COVERbook_DESIGN:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.characterful.co.za%2Fproduct%2Fwhere-in-the-world-are-you%2F&psig=AOvVaw2Rl3rVjZxlqOs5FataW7ei&ust=1723017954973000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCQj6X034cDFQAAAAAdAAAAABAE",
        PRICE:"$50",
        FORMAT:"PDF",
        RELEASE_DATE:"2018/06/12"
  
  },{
      ISBN:"NO4",
      TITLE:"STAY",
      PAGES_NUM:"5000",
      EDITION:"First_editio",
      PUBLISHER:"Bayanda",
      EDITOR:"bb",
      COVERbook_DESIGN:"ni mas",
      PRICE:"R340",
      FORMAT:"pdf",
      RELEASE_DATE:"2020/04/04"
  
  }]
  localStorage.setItem("Booktable",JSON.stringify(Booktable));
 
  return (
    <>
     
    <Addbook book={Booktable[0]}/>
    <Displaybox/>
    <Update/>
    <Delete/>
    <Bookcard book={Booktable[0]}/>
    <Register/>

    
    </>
      
  )
}

export default App
