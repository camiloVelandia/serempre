import styled from 'styled-components';

export const Head = styled.header`
         text-align: center;
         border-bottom: 1px solid #eeeff2;
         & figure {
           height: 50px;

           @media (min-width: 768px) {
             height: 58px;
           }
         }
         & img {
           height: 100%;
           object-fit: contain;
         }
       `;
