import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchBox extends Component {
  render() {
    return (
      <SearchBoxWrapper>
        <div className="__search-wrap">
          <div className="__search-From">
            <input type="search" name="from" id="" />
            <i className="material-icons">flight</i>
          </div>
          <div className="__searchSwitcher">
            <i className="material-icons">swap_horiz</i>
          </div>
          <div className="__search-To">
            <input type="search" name="to" id="" />
            <i className="material-icons">flight</i>
          </div>
          <div className="__search-date">
            <input type="date" name="" id="" />
          </div>
          <button className="__search-button" type="submit">
            <i className="material-icons md__light">search</i>
          </button>
        </div>
      </SearchBoxWrapper>
    );
  }
}

const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 165px;
  margin: 0 auto;
  display: grid;
  background-image: linear-gradient(to right top, #ff6910, #fa5e13, #f45415, #ef4817, #e93c19);

  .__search-wrap {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 260px 50px 260px 250px 50px;
    grid-gap: 4px;
    padding: 55px 0;
  }

  .__searchSwitcher {
    height: 54px;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
  }

  .__searchSwitcher i {
    font-size: 2.5em;
    color: whitesmoke;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .__search-From {
    position: relative;
  }

  .__search-From i {
    position: absolute;
    top: 25%;
    left: 5%;
    transform: rotate(45deg);
    font-size: 1.5em;
    color: whitesmoke;
  }

  .__search-To {
    position: relative;
  }

  .__search-To i {
    position: absolute;
    top: 25%;
    left: 5%;
    transform: rotate(45deg);
    font-size: 1.5em;
    color: whitesmoke;
  }

  .__search-button {
    position: relative;
    height: 54px;
    border: none;
  }

  .__search-button i {
    font-size: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fa5e13;
  }
`;
