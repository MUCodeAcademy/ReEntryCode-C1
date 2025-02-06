import { useState } from 'react'
import '../CSS/App.css'
import productList from '../assets/products.json';

function App() {

  // const products = [
  //   {
  //       name: "Blue Shirt",
  //       price: 10.99,
  //       description: "This thing is blue.",
  //       image: "blueShirt.png",
  //       quantity: 1,
  //   },
  //   {
  //       name: "Yellow Shirt",
  //       price: 15.49,
  //       description: "Here is a description for the yellow shirt.",
  //       image: "yellowShirt.png",
  //       quantity: 1,
  //   },
  //   {
  //       name: "Orange Shirt",
  //       price: 1499.99,
  //       description: "Prestigious orange shirt.",
  //       image: "orangeShirt.png",
  //       quantity: 1,
  //   },
  // ];  

  return (
    <>
      <h2>Deals of the Day</h2>
      {productList.products.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
          <img src={item.image} />
        </div>
      ))}
    </>
  )
}

export default App;
