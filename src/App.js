import React from 'react';
import './style.css';
import Product from './Product';

export default function App() {
  return (
    <div className="product-panel">
      <Product
        title="Product 1"
        description={String(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum convallis feugiat.'
        ).substring(0, 50)}
        colors={['red', 'green', 'blue']}
        cost={50}
        quantity={3}
        inStock={true}
      />
      <Product
        title="Product 2"
        description={String(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum convallis feugiat.'
        ).substring(0, 50)}
        cost={50}
        inStock={true}
      />
      <Product
        title="Product 3"
        description={String(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum convallis feugiat.'
        ).substring(0, 50)}
        cost={50}
        inStock={true}
      />
      <Product
        title="Product 4"
        description={String(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum convallis feugiat.'
        ).substring(0, 50)}
        cost={50}
        inStock={true}
      />
    </div>
  );
}
