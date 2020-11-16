import React, { useContext } from 'react';
import PriceContext from '../../context/PriceContext';


import {Card, Price} from './styles'

const FeatureCard = (props) => {
  const priceContext = useContext(PriceContext);
  const {setPrice}= priceContext
  const {price}= priceContext
  const finalPrice = parseInt(props.price)
  

  return (
    <Card
      onClick={() => {
        finalPrice
          ? setPrice(price + finalPrice)
          : setPrice(295.95);
      }}
    >
      <div>
        <h3>{props.title}</h3>
        {props.desc ? <p>{props.desc}</p> : ''}
      </div>
      {props.price ? (
        <Price>
          <p> {`+$${props.price}`}</p>
        </Price>
      ) : (
        ''
      )}
    </Card>
  );
};

export default FeatureCard;