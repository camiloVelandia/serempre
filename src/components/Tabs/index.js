import React, {useState} from 'react';
import { Container, Box, Btn, BtnContainer } from './styles';

const Tabs = () => {
  const [active, setActive]= useState('1')
  return (
    <Container>
      <BtnContainer>
        <Btn
          onClick={() => setActive('1')}
          className={active == 1 ? 'active' : ''}
        >
          Overview
        </Btn>
        <Btn
          onClick={() => setActive('2')}
          className={active == 2 ? 'active' : ''}
        >
          Features
        </Btn>
        <Btn
          onClick={() => setActive('3')}
          className={active == 3 ? 'active' : ''}
        >
          What's in the box?
        </Btn>
      </BtnContainer>
      <Box>
        {active == '1'
          ? 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
          : active == '2'
          ? 'content2 For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
          : active == '3'
          ? 'content3 For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
          : ''}
      </Box>
    </Container>
  );
};

export default Tabs;