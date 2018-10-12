import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
  render() {
    const { name, from, duration, flightstops, price, imageLink } = this.props.cityData;

    const style = {
      background: `url(${imageLink})`,
      backgroundSize: 'cover',
    };
    return (
      <CardWrapper>
        <div className="image" style={style} />
        <div className="card_info">
          <div className="__cardInfo">{name}</div>
          <div className="__cardInfo">{from}</div>
          <div className="__cardInfo">{duration}</div>
          <div className="__cardInfo-price">
            <div className="__card_price">
              <i className="material-icons flightOne">flight</i>
              <div className="__flightdetails">
                <div className="__cardP">{`$${price}+`}</div>
                <div className="__cardlas">{`${flightstops} stops`}</div>
              </div>
            </div>
            <button>Find Flight</button>
          </div>
        </div>
      </CardWrapper>
    );
  }
}

export default Card;
const CardWrapper = styled.div`
  border: 1px solid var(--kayak);
  width: 100%;
  height: 351px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  .image {
    /* background: url('http://www.technocrazed.com/wp-content/uploads/2015/12/Dubai-Wallpaper-26.jpg'); */
    background-size: 100% 100%;
  }

  .card_info {
    padding: 15px;
    text-align: left;
    letter-spacing: 1.2px;
  }

  .__cardInfo:nth-child(1) {
    font-weight: bolder;
  }

  .__cardInfo:nth-child(2) {
    font-weight: bolder;
    padding: 5px 0px;
    color: #6d8494;
  }

  .__cardInfo:nth-child(3) {
    font-weight: bolder;
    padding: 5px 0px;
    color: #6d8494;
  }
  .__cardInfo-price {
    display: grid;
    grid-template-columns: 1fr 50px 122px;
    grid-gap: 40px;
    position: relative;
  }

  .flightOne {
    font-size: 2.2em;
    color: var(--kayak);
    padding: 5px;
    transform: rotate(45deg);
  }

  .__card_price {
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .__cardlas {
    font-size: 0.8em;
    color: #6d8494;
  }

  button {
    background: var(--kayak);
    color: whitesmoke;
    min-width: 122px;
    height: 34px;
    outline: none;
    border: none;
    border-radius: 3px;
    letter-spacing: 1px;
    position: absolute;
    right: 0;
    top: 70%;
    transform: translateY(-50%);
  }
`;
