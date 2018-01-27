import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    userInput: ''
  }
  onInputChange = (e) => {
    const userInput = e.target.value;
    this.setState((prevState) => {
      return {userInput}
    }, () => {
      this.props.findMatches(this.state.userInput);
    });
  }
  render() {
    return (
      <form className="search-form">
        <input 
          type="text" className="search" placeholder="City or State"
          value={this.state.userInput} 
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default Searchbar;
