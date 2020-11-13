import { createGlobalStyle } from 'styled-components';

import CircularBook from './Circular-Std-Book.otf';
import CircularMd from './Circular-Std-Medium.otf';
import CircularBl from './Circular-Std-Bold.otf';


export default createGlobalStyle`
 
@font-face {
    font-family: 'Circular Std Book';
    src: local('Circular Std Book'), local('Circular Std Book'),
    url(${CircularBook}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
      
        
    
}

@font-face {
    font-family: 'Circular Std';
    src: local('Circular Std'), local('Circular Std'),
    url(${CircularMd}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Circular Std';
   src: local('Circular Std'), local('Circular Std'),
    url(${CircularBl}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`;
