import React,{useState, useEffect} from "react";

const Cart = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

useEffect(() => {
  console.log(isModalDisplayed);
  
}, [isModalDisplayed])

  
  const handleModalDisplay = (item) => {
  setIsModalDisplayed(true);
  }
  
  return (
  <div className="cart">
    <button className="cart-button"        onClick={handleModalDisplay}>
      C
    </button>

<div className="cart-modal">
<h1>Cart</h1>


</div>
    

  
  
  
  
  
  </div>
  
  
  )
}

export default Cart;