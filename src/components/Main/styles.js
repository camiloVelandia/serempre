import styled from 'styled-components';

export const Content = styled.main`
  border:1px solid red;
  margin-bottom:180px;
  @media (min-width: 768px) {
  margin-bottom:120px;
  }
  @media (min-width: 1280px) {
  margin-bottom:190px;
    display:flex;
    & > section{
      width:50%
    }
  }
  
`;
