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
export const Item = styled.button`
  border: 2px solid #eeeff2;
  background-color: transparent;
  text-align: left;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 17px;
  &:focus {
    /* outline:none; */
    /* outline: 1px auto #b6bcc6; */
    outline: 2px auto #1e96d4;

    -webkit-box-shadow: 1px 1px 5px 0px #d5dce0;
    -moz-box-shadow: 1px 1px 5px 0px #d8dce0;
    box-shadow: 1px 1px 8px 0px #d8dce0;
  }
  &:hover {
    border: 2px solid #b6bcc6;
  }
  &:selected {
    border: 2px auto #1e96d4;
  }
  @media (min-width: 768px) {
    /* border: 1px solid red; */
    flex-basis: 46%;
  }
  @media (min-width: 1280px) {
    flex-basis: 49%;
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
