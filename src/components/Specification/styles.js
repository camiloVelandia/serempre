import styled from 'styled-components';

export const Spec = styled.section`
  padding-top:30px;
  padding-bottom:96px;
@media (min-width: 768px) {
  padding-top:60px;
  padding-bottom:82px;
}
@media (min-width: 1280px) {
  padding-top:60px;
  padding-bottom:73px;
}
       `;
export const Container = styled.div`
  padding: 17px 0;
  border-bottom: 1px solid #eeeff2;
  @media (min-width: 768px) {
  justify-content: space-between;
  display: flex;
    
  }
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 19px;
    line-height: 1.24;
  }
  & h3 {
    margin: 0;
    margin-bottom:5px;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
  }
  & p {
    margin: 0;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
  }
  
`;
