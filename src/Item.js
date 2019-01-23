import React, { Component } from 'react';

class Item extends Component {

  state = { editing: false }

  edit = () => {
    this.setState({
      editing: true
    })
  }

  render() {

    return (
      <div>
        {!this.state.editing ?
          <div>
            Hi, I'm {this.props.hello}
            <button onClick={this.props.remove}>Remove</button>
            <button onClick={this.edit}>Edit</button>
          </div>
          : <input value={this.props.hello} />
        }
      </div>
    );
  }
}

export default Item;
