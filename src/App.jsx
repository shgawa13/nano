import React from "react";
import { useState } from "react";
import items from "../data";
import Navbar from "./components/Navbar";
import { format } from 'date-fns'
import InfoBox from "./components/InputBox";
import Products from "./components/Products";
import Receipt from "./components/Receipt";

const App = () => {

  const [info , setInof]=useState({
    userName: "",
    items:0,
    total:0, 
    payment:"",
    date:'',
    time:''
  })
  
  const addInfo =(data)=>{
    // getting the info from the inputBox as a data
    const theDate = new Date();
    const h = theDate.getHours()%12;
    const date =`${format(new Date(),'yyyy/MM/dd')}`
    const time = `${format(new Date(),`${h}:mm:ss`)}`
  // we set the new info to the form
  setInof(prevInfo=>{
    return{
      ...prevInfo,
      userName: data.userName,
      date:date,
      time:time,
      payment:data.payment
    }
  })
  
}

// here we  add the items and the total
const addItem =(price)=>{
  setInof(prevState =>{
    return{
      ...prevState,
      items: prevState.items + 1,
      total: prevState.total + price
    }
  })
  
}

  return (
    <div className="container">
      <Navbar item={info.items} />
      <section className="fixed__container products__section">
        {/* Products  */}
        <Products items={items} addItem={addItem}/>
        {/*  Input and Output Information */}
        <section className="customer__info">
          {/* Input Information */}
          <InfoBox addInfo={addInfo}/>
          {/* Output Information */}
            <Receipt info={info}/>
        </section>
      </section>
    </div>
  );
};

export default App;
