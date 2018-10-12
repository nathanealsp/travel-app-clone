import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cb/Kayak_Logo.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="titles">
          <div>Flights</div>
          <div>Hotels</div>
          <div>Cars</div>
          <div>Packages</div>
          <div>Cruises</div>
          <div>Deals</div>
          <div>More</div>
        </div>
        <div className="signIn">
          <div>Trips</div>
          <div>Sign in</div>
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 190px 700px 200px;
  padding: 9px 0;
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 2px;

  .logo {
    margin-right: 10px;
  }

  img {
    width: 100%;
  }

  .titles {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    padding: 8px;
    text-align: center;
    /* background: #ef4817; */
  }

  .signIn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
    text-align: center;
  }

  .titles div:hover {
    color: #ef4817;
  }
`;
