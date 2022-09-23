import React from 'react'

const Receipt = ({info}) => {
  return (
   <div className="output__section">
   <h4>Output</h4>
   <div className="output__info">
     <p>Customer Name:</p>
     <span>{info.userName}</span>
   </div>
   <div className="output__info">
     <p>List of Items :</p>
     <span>{info.items}</span>
   </div>
   <div className="output__info">
     <p>Total Amount :</p>
     <span>{info.total}$</span>
   </div>
   <div className="output__info">
     <p>Payment Method :</p>
     <span>{info.payment}</span>
   </div>
   <div className="output__info">
     <p>Date :</p>
     <span>{info.date}</span>
   </div>
   <div className="output__info">
     <p>Time :</p>
     <span>{info.time}</span>
   </div>
 </div>
  )
}

export default Receipt