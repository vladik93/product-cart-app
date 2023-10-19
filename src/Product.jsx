import React, { useState, useEffect } from 'react';

const Product = ({ id, title, description, colors = [], cost, inStock }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(selectedColor);
  }, [selectedColor]);

  const setColor = (color) => {
    let colors = {
      red: '#d92626',
      blue: '#2626d9',
      green: '#136c13',
      yellow: '#d9d926',
      black: '#333333',
      white: '#ffffff',
    };

    return colors[color];
  };

  const onProductIncr = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const onProductDecr = () => {
    setQuantity((prevState) => {
      if (prevState < 1) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <div className={`product ${quantity < 1 ? 'unfocused' : ''}`}>
      <div className="product-content">
        <img src="/item.jpg " className="product-img" />
        <div className="product-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="colors-container">
            {colors.map((color) => {
              return (
                <span
                  className={`product-color ${
                    selectedColor === color ? 'selected' : ''
                  }`}
                  style={{ background: `${setColor(color)}` }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              );
            })}

            {/* <span
              className="product-color"
              style={{ background: 'red' }}
            ></span> */}
          </div>
          <p className="product-cost">
            ${cost} <span className="product-quantity">x {quantity}</span>
          </p>
          <p>{inStock ? 'In Stock!' : 'Not In Stock'}</p>
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
