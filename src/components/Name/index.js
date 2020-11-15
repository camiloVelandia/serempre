import React from 'react';
import { Container, Title , Price} from './styles';

const Name = () => {
  return (
    <Container>
      <Title>
        <p>New release</p>
        <h1>MOMENTUM True Wireless 2</h1>
        <h2>Earbuds that put sound first</h2>
      </Title>
      <Price>
        <h3>Starting at</h3>
        <p>$295.95</p>
      </Price>
    </Container>
  );
};

export default Name;