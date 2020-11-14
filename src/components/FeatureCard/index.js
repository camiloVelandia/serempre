import React from 'react';

import {Card, Price} from './styles'

const FeatureCard = (props) => {
  return (
    <Card>
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
    {props.price ?  <Price><p> {`+${props.price}`}</p></Price> : ''}
    </Card>
  );
};

export default FeatureCard;