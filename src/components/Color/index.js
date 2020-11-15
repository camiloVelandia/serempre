import React from 'react';
import {Container, Cards, Item} from './styles'

const Color = () => {
  return (
    <Container>
      <h2>Choose your finish.</h2>
      <Cards>
        <Item>
          <h3>Ivory White</h3>
          <p>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True.
          </p>
        </Item>
        <Item>
          <h3>Matte Black</h3>
          <p>
            Of all of the celestial bodies that capture our attention and
            fascination as astronomers.
          </p>
        </Item>
      </Cards>
    </Container>
  );
};

export default Color;