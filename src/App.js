import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product';
import CategoryButton from './Category-Button'

class App extends Component {
  constructor(props) {
    super(props)
    categories.push("All")
    this.state = {
      currentCategory: 'All'
    }
  }
  setCategory(cat) {
    console.log(cat)
    this.setState({ currentCategory: cat })
  }
  render() {
    const cats = categories.map((cat) => {  // map( () => {} )
      return (
        <CategoryButton
          selected={this.state.currentCategory === cat}
          key={cat}
          label={cat}
          onClick={ (cat) => this.setCategory(cat) }
        />)
    })
    const products = inventory.filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === 'All'
    }).map((item, i) => {
      const { name, description, price } = item
      return (
        <Product
          key={`${name}-${i}`}
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
          {products}
        </div>
      </div>
    );
  }
}

export default App;
