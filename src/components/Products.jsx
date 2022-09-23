import React from 'react'
import ItemCard from './ItemCard'

const Products = ({addItem,addTotal,items,total}) => {

 
  // here we loop through products using map
  const list = items.map(item=>{
    return <ItemCard 
    key={item.id} 
    item={item}
    handleChange={addItem}
    price={item.price}
    add={addTotal}/>
  })


  return (
    <div className="items">
     {list}
    </div>
  )
}

export default Products