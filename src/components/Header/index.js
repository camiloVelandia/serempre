import React from 'react';
import {Head} from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Head>
      <figure>
        <img src={logo} alt=' serempre '/>
      </figure>
    </Head>
  );
};

export default Header;