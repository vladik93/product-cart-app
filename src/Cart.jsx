import React, { useState, useEffect } from "react";

const Cart = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  useEffect(() => {
    console.log(isModalDisplayed);

  }, [isModalDisplayed])


  const handleModalDisplay = () => {
    setIsModalDisplayed(!isModalDisplayed);
  }

  return (
    <div className="cart">
      <button className="cart-button" onClick={handleModalDisplay}>
        C
      </button>

      {isModalDisplayed && <div className="cart-modal">
        <h3>Hello</h3>


      </div>}







    </div>


  )
}

export default Cart;