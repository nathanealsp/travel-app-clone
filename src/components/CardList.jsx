import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import fakeData from '../fakeData';

class CardList extends Component {
  render() {
    return (
      <CardWrapper>{fakeData.map(city => <Card key={city.id} cityData={city} />)}</CardWrapper>
    );
  }
}

export default CardList;

const CardWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-top: 15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;
