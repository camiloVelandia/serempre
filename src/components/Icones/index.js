import React from 'react';
import {Container, Item} from './styles'

import hand from '../../assets/images/hand.png'
import noise from '../../assets/images/ond.png'
import bars from '../../assets/images/bars.png'

const Icones = () => {
  return (
    <Container>
      <Item>
        <figure>
          <img alt="icon feature" src={hand} />
        </figure>
        <p>Customizable Touch Controls </p>
      </Item>
      <Item>
        <figure>
          <img alt="icon feature" src={noise} />
        </figure>
        <p>Active Noise Cancellation </p>
      </Item>
      <Item>
        <figure>
          <img alt="icon feature" src={bars} />
        </figure>
        <p>Built-in Equalizer </p>
      </Item>
    </Container>
  );
};

export default Icones;