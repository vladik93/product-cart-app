import React, { useState, useEffect } from "react";
import "./style.css";
import products from "./products";
import Product from "./Product";
import Cart from "./Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (cartItem) => {
    setCartItems((prevState) => {
      let filtered = prevState.filter((x) => x != null);

      return [...filtered, cartItem];
    });
    // let filteredArray = cartItems.lengthcartItems.filter(
    //   (x) => x.itemId === cartItem.itemId
    // );
    // setCartItems(() => {
    //   return [...filteredArray, cartItem];
    // });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="app">
      <Cart />
      <div className="product-panel">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              colors={product.colors}
              cost={product.cost}
              amountInStock={product.amountInStock}
              addToCart={addToCart}
            />
          );
        })}
        {/* <Product
        title="Product 1"
        description={String(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum convallis feugiat."
        ).substring(0, 50)}
        colors={["red", "green", "blue"]}
        cost={50}
        quantity={3}
        inStock={true}
        amountInStock={5}
      /> */}
      </div>
    </div>
  );
}
