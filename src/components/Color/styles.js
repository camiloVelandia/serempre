import styled from 'styled-components';

export const Container = styled.section`
  & h2, h3, p{
    margin:0;
  }
  & h2{
    font-size:19.2px;
    font-weight:500;
    margin-bottom:12px
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 1280px) {
 
  }
`;
export const Cards = styled.div`
  @media (min-width: 768px) {
    display:flex;
    justify-content:space-between;
    
  }
  @media (min-width: 1280px) {
 
  }
`;
export const Item = styled.div`
  border: 1px solid #eeeff2;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 17px;
  @media (min-width: 768px) {
    /* border: 1px solid red; */
    flex-basis: 41%;
  }
  @media (min-width: 1280px) {
    flex-basis: 39%;
  }
  & h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    padding-bottom: 8px;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: #6b7280;
  }
`;
