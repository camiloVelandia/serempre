import React from 'react';
import {Spec, Container} from './styles'

const Specification = () => {
  return (
    <Spec>
      <Container>
        <h2>Specifications.</h2>
      </Container>
      <Container>
        <h3>Dimensions</h3>
        <p>76.8 x 43.8 x 34.7 mm (earbuds and charging case)</p>
      </Container>
      <Container>
        <h3>USB Standard</h3>
        <p>USB-C</p>
      </Container>
      <Container>
        <h3>Power supply</h3>
        <p>Sennheiser 7mm dynamic driver</p>
      </Container>
      <Container>
        <h3>Frequency response (Microphone)</h3>
        <p>100 Hz to 10 kHz</p>
      </Container>
      <Container>
        <h3>Frequency response</h3>
        <p>5 - 21,000 Hz</p>
      </Container>
      <Container>
        <h3>Noise cancellation</h3>
        <p>Single-Mic ANC per earbud side</p>
      </Container>
    </Spec>
  );
};

export default Specification;