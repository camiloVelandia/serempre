import styled from 'styled-components';

export const Content = styled.main`
  border:1px solid red;
  
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    display:flex;
    & > section{
      width:50%
    }
  }
  
`;
