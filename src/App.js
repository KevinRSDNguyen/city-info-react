import React, { Component } from 'react';
import Aux from './hoc/Auxx/Auxx';
import Searchbar from './containers/Searchbar/Searchbar';
import CitiesList from './components/CitiesList/CitiesList';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    cities: null,
    matchingResults: []
  }
  componentDidMount() {
    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    axios.get(url)
      .then(({ data }) => {
        this.setState({ cities: data });
      }).catch(err => {
        alert('Could not fetch cities');
      });
  }
  findMatches = (wordToMatch) => {
    const matchingResults = this.state.cities.filter(place => {
      // Figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    });
    this.setState({ matchingResults });
  }
  render() {
    return (
      <Aux>
        <Searchbar findMatches={this.findMatches} />
        <CitiesList matchingResults={this.state.matchingResults} />
      </Aux>
    );
  }
}

export default App;
