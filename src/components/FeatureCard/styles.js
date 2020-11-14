import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 17px;
  border: 2px solid #eeeff2;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 21px;
  @media (min-width: 768px) {
    padding: 24px 24px;
  }

  & h3 {
    margin: 0;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }
  & p {
    margin: 0;
    color: #6b7280;
    font-size:14px;
    font-weight:400;
  }
`;
export const Price = styled.div`
  width:20%;
  text-align:right;
  & p{
    color: #000;
  }
`;
