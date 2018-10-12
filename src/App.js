import React, { Component } from 'react';

import './App.css';

import SearchBox from './components/SearchBox';
import Header from './components/Header';
import CardList from './components/CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <CardList />
      </div>
    );
  }
}

export default App;
