import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product';

class App extends Component {

  render() {
    const cats = categories.map((cat) => {  // map( () => {} )
      return <button key={cat}>{cat}</button>
    })
    const items = inventory.map((item, i) => {
      const { name, description, price } = item
      return (
        <Product
          key={`${name}-i`}
          title={name}
          desc={description}
          price={price}
        />)
    })
    return (
      <div className="App">
        <h1>Show products here</h1>
        <div>
          {cats}
        </div>
        <div className="inventory">
          {items}
        </div>
      </div>
    );
  }
}

export default App;
