import React, { useState, useEffect } from "react";

const Product = ({
  id,
  title,
  description,
  colors = [],
  cost,
  amountInStock,
  addToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(0);
  const [inStock, setInStock] = useState(amountInStock);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const setColor = (color) => {
    let colors = {
      red: "#d92626",
      blue: "#2626d9",
      green: "#136c13",
      yellow: "#d9d926",
      black: "#333333",
      white: "#ffffff",
    };

    return colors[color];
  };

  const handleCartItem = () => {
    if (quantity > 0) {
      let item = {
        itemId: id,
        title: title,
        description: description,
        cost: cost,
        quantity: quantity,
        selectedColor: selectedColor ? selectedColor : colors[0],
      };

      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  };

  const onProductIncr = () => {
    if (inStock > 0) {
      setQuantity((prevState) => prevState + 1);
      setInStock((prevCount) => prevCount - 1);
    }
  };

  const onProductDecr = () => {
    if (inStock < amountInStock) {
      setQuantity((prevState) => {
        if (prevState < 1) {
          return 0;
        } else {
          return prevState - 1;
        }
      });
      setInStock((prevCount) => prevCount + 1);
    }
  };

  const resetColorInStock = () => {
    if (!inStock) {
      setSelectedColor(null);
    }
  };

  const onItemColorChange = () => {
    if (selectedItem) {
      setSelectedItem((prevState) => {
        return {
          ...prevState,
          selectedColor: selectedColor,
        };
      });
    }
  };

  useEffect(() => {
    resetColorInStock();
  }, [inStock]);

  useEffect(() => {
    handleCartItem();
  }, [quantity]);

  useEffect(() => {
    onItemColorChange();
  }, [selectedColor]);

  useEffect(() => {
    addToCart(selectedItem);
  }, [selectedItem]);

  return (
    <div className={`product ${!inStock ? "faded" : ""}`}>
      <div className="product-content">
        <img src="/item.jpg " className="product-img" />
        <div className="product-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="colors-container">
            {colors.map((color, index) => {
              if (selectedColor === "") {
                return (
                  <span
                    key={index}
                    id={index}
                    className="product-color"
                    style={{ backgroundColor: setColor(color) }}
                    onClick={() => setSelectedColor(color)}
                  ></span>
                );
              } else {
                return (
                  <span
                    className={`product-color ${
                      selectedColor === color ? "selected" : "unselected"
                    }`}
                    style={{ backgroundColor: setColor(color) }}
                    onClick={() => setSelectedColor(color)}
                  ></span>
                );
              }
            })}
          </div>
          <p className="product-cost">
            ${cost} <span className="product-quantity">x {quantity}</span>
          </p>
          {inStock ? (
            <span style={{ color: "#136c13" }}>In Stock!</span>
          ) : (
            <span style={{ color: "#d92626" }}>Not in Stock</span>
          )}
        </div>
      </div>
      <div className="product-actions">
        <button
          className="product-button decrement"
          onClick={onProductDecr}
          disabled={quantity < 1 ? true : false}
        >
          <img src="/minus_1.svg" className="icon" />
        </button>
        <button className="product-button increment" onClick={onProductIncr}>
          <img src="/plus_1.svg" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Product;
