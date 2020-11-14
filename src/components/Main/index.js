import React from 'react';
import {Content} from './styles'

import Specification from '../Specification'
import Features from '../Features'

const Main = () => {
  return (
    <Content>
      <section></section>
      <section>
        <Features
          title="Would you like to add extended warranty coverage?."
          aditionalPrice="25"
          title1="2 years coverage"
          desc1="For the past 75 years, Sennheiser has put sound first."
          title2="3 years coverage"
          desc2="For the past 75 years, Sennheiser has put sound first."
          price="75"
        />
        <Features
          title="Features."
          aditionalPrice="25"
          title1="Features."
          title2="Customizable controls"
          price="25"
        />
        <Specification />
      </section>
    </Content>
  );
};

export default Main;