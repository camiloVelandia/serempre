import React, {useContext} from 'react';
import {Foot, Info, Price ,Cost, Shop, Text} from './styles'
import PriceContext from '../../context/PriceContext'

const Footer = () => {
  const priceContext = useContext(PriceContext);
  console.log(priceContext)
  return (
    <Foot>
      <Text>
        <Info>
          <h2>Free Shipping</h2>
          <p>Get 2-day free shipping anywhere in North America.</p>
        </Info>
        <Info>
          <h2>2 years warranty</h2>
          <p>
            If anything goes wrong in the first two years, we'll replace it for
            free.
          </p>
        </Info>
      </Text>

      <Price>
        <Cost>
          <h2>${priceContext.price}</h2>
          <p>Need financing? Learn more </p>
        </Cost>
        <div>
          <Shop>Buy now</Shop>
        </div>
      </Price>
    </Foot>
  );
};

export default Footer;