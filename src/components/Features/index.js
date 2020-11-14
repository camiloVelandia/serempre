import React from 'react';
import { Feature } from './styles';

import FeatureCard from '../FeatureCard';

const Features = (props) => {

  const {title, title1, title2, desc1, desc2, price}= props

  return (
    <Feature>
      <h2>{title}</h2>

      <FeatureCard title={title1} desc={desc1} />
      <FeatureCard
        title={title2}
        desc={desc2}
        price={price}
      />
    </Feature>
  );
};

export default Features;