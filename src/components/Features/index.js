import React, { useContext } from 'react';
import { Feature } from './styles';
import PriceContext from '../../context/PriceContext';


import FeatureCard from '../FeatureCard';

const Features = (props) => {

  const {title, title1, title2, desc1, desc2, price}= props
  const priceContext = useContext(PriceContext);
  const { setPrice } = priceContext;
  const finalPrice = parseInt(price);
  
  console.log(priceContext.price)
  const asd =()=>{
    console.log(hola)
  }
  return (
    <Feature>
      <h2>{title}</h2>

      <FeatureCard title={title1} desc={desc1}  />
      <FeatureCard
        title={title2}
        desc={desc2}
        price={price}
        
      />
    </Feature>
  );
};

export default Features;