import React from "react";

const ItemCard = ({ handleChange,item, add}) => {

  
  
  return (
    <div className="item">
      <div className="item__image">
        <img src={item.image} alt="" />
      </div>
      <div className="item__content">
        <div className="item__details">
          <p>{item.name}</p>
          <span>{item.price}$</span>
        </div>
        <button onClick={()=>handleChange(item.price)}>Add To Cart</button>
      </div>
      
    </div>
  );
};

export default ItemCard;
