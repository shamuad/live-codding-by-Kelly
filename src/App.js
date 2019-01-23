import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Item from './Item.js';

class App extends Component {

  state = {
    name: "Kelley",
    newItemText: "Kell",
    list: [
      "Bananas",
      "Milk",
      "Jeans",
      "Cheese",
      "Sneakers",
      "Milk",
    ],
  };

  handleChange = (event) => {
    this.setState({
      newItemText: event.target.value,
    });

    //console.log(this.state.new)
  }


  addItem = () => {

    this.setState({
      list: [
        ...this.state.list,
        this.state.newItemText,
      ],
      newItemText: '',
    });

  }

  
  removeItem = (i) => {

    console.log("remove item")
    
    let newList = [...this.state.list];
    newList.splice(i, 1);

    this.setState({
      list: newList,
    });

    // what item to remove??
    // this.setState
  }

  render() {

    let funkyName = this.state.name
      .split('')
      .map(letter => letter.toUpperCase())
      .join(' ');

    return (
      <div>
        <h1>{funkyName}'s shopping cart</h1>
        <p>Number of items: {this.state.list.length}</p>
        <ul>
          {this.state.list.map((item, i) =>
          <li>
            <Item hello={item}
                  remove={() => this.removeItem(i)}>
            </Item>
          </li>
          )}
          <li>
            <input value={this.state.newItemText} onChange={this.handleChange} />
            <button onClick={this.addItem}>Add</button><br />
            You may add: {this.state.newItemText}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
