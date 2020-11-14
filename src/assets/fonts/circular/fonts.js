import { createGlobalStyle } from 'styled-components';

import CircularBook from './Circular-Std-Book.otf';
import CircularMd from './Circular-Std-Medium.otf';
import CircularBl from './Circular-Std-Bold.otf';


export default createGlobalStyle`
 
@font-face {
    font-family: 'Circular Std Book';
     src: url(${CircularBook}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
      
        
    
}

@font-face {
    font-family: 'Circular Std';
    src: url(${CircularMd}) format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Circular Std';
    src: url(${CircularBl}) format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`;
