import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
    
  }
  & * {
    margin: 0;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 768px) {
    width: 85%;
  }
`;
export const Btn = styled.button`
  flex: 1;
  font-size: 19px;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  color: #6b7280;
  margin-bottom:12px;
  cursor:pointer;
  &.active{
    color: #000;
    border-bottom: 2px solid #000;
  }
`;
export const Box = styled.div`
  font-size: 16px;
  color: #6b7280;
  line-height:1.5;
`;
