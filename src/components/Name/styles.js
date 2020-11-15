import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom:48px;
  & *{
    margin:0;
  }
`;
export const Title = styled.div`
  margin-bottom: 48px;
  & p {
    color: #cb253c;
    font-size: 13.3px;
    line-height: 1.2;
    padding-bottom: 8px;
    text-transform:uppercase;
  }
  & h1 {
    font-size: 39px;
    font-weight: 700;
    line-height: 1.2;
  }
  & h2 {
    font-size: 27.6px;
    line-height: 1.1;
    color: #6b7280;
    font-weight: 400;
  }
  @media (min-width: 768px) {
    & h1 {
      font-size: 33px;
    }
  }
`;
export const Price = styled.div`
  & h3 {
    color: #6b7280;
    font-size:13.3px;
    margin-bottom:8px;
    text-transform:uppercase;
  }
  & p {
    font-size:40px;
    font-weight:700
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
