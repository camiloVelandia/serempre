import styled from 'styled-components';

export const Foot = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f7;
  border-top: 1px solid #d2d2d7;
  padding-top: 23px;
  padding-bottom: 23px;
  padding-right:32px;
  @media (min-width: 768px) {
    padding-top: 28px;
    padding-bottom: 28px;
    padding-right:113px;
    padding-left:113px;
  }
  @media (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 64px;
    padding-right:106px;
    padding-left:112px;
  }
`;

export const Info = styled.div`
      width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    margin-bottom:16px;
  }
  & h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  & p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
    line-height: 1.2;
    padding-right: 30px;
    @media (max-width: 1280px) {
      display: none;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  width: 50%;
  justify-content:flex-end;
  @media (max-width: 768px) {
    display: block;
    width:100%;
  }
`;

export const Cost = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 32px;
  @media (max-width: 768px) {
  padding-right: 0px;
    margin-bottom:24px;
  }
  & h2 {
    font-size: 27px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
  }
  & p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
    line-height: 1.2;
  }
`;
export const Shop = styled.button`
    text-align: center;
    background-color: #1e96d4;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding: 18px 24px;
    border: 3px solid #f5f5f7;
    @media (max-width: 768px) {
      float: right;
    }
    &:hover {
      background-color: #66beeb;
    }
    &:focus {
      border: 3px solid #d8dce0;
      outline: none;
    }
  `;
export const Text = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1280px) {
    display: flex;
  }
`;