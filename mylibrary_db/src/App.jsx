import { useState } from 'react'

import './App.css'


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
        PUBLISHER:"by MUZI Mavundla",
        EDITOR:"Z.P DLUDLA",
        COVERbook_DESIGN:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3KRT0kLpmZrokovQ5MTYijsFoljPuQFgBkNXx7y5g9r1PxsLaVloBnyj4jvW0Zab3dg&usqp=CAU",
        PRICE:"$50",
        FORMAT:"PDF",
        RELEASE_DATE:"2018/06/12"
  
  },{
      ISBN:"NO4",
      TITLE:"STAY",
      PAGES_NUM:"5000",
      EDITION:"First_editio",
      PUBLISHER:"by Bayanda Shezi",
      EDITOR:"bb",
      COVERbook_DESIGN:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3KRT0kLpmZrokovQ5MTYijsFoljPuQFgBkNXx7y5g9r1PxsLaVloBnyj4jvW0Zab3dg&usqp=CAU",
      PRICE:"R340",
      FORMAT:"pdf",
      RELEASE_DATE:"2020/04/04"
  
  }]
  // localStorage.setItem("Booktable",JSON.stringify(Booktable));
  // let display = JSON.parse(localStorage.getItem("Booktable"))
  let mybooks =  JSON.parse(localStorage.getItem("Booktable"))
 
  return (
    <>
     
 
    <Displaybox bookList={mybooks}/>
    

    
    <Register/>

    
    </>
      
  )
}

export default App
