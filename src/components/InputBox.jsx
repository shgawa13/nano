import React from 'react'
import { useState } from 'react';


const InputBox = ({addInfo}) => {
const [data,setData] = useState({
  userName: "",
  payment:""
})

// function to get the input from the user

const handleChange = (event) => {
  const { name, value} = event.target;
  setData((prevData) => {
    return {
      ...prevData,
      [name]: value
  }
  });
  return;
};


// handle submit the data
  const handelSubmit =(e)=>{
    e.preventDefault()
    addInfo(data) 
  }

  return (
  <div>
    <form className="form" onSubmit={handelSubmit} >
        <div className="form__field">
         <label>Customer Name :</label>
        <input
          type="text"
          required
          value={data.userName}
          name="userName"
          placeholder="Enter customer name"
          onChange={handleChange}
        />
        </div>

        <div className="form__field">
        <label>Payment Method :</label>
        <select value={data.payment} 
        onChange={handleChange}
        name="payment"
        required>
          <option value="">-- Choose --</option>
          <option value="credit" >Credit</option>
          <option value="cash">Cash</option>
        </select>
        </div>
      <button>Submit</button>
    </form>
  </div>
  )
}

export default InputBox