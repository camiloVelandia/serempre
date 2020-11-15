import styled from 'styled-components';

export const Card = styled.button`
  margin-top: 17px;
  border: 2px solid #eeeff2;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 21px;
  background-color:transparent;
  width:100%;
  text-align:left;
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
    padding: 24px 24px;
  }

  & h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }
  & p {
    padding-top: 8px;
    margin: 0;
    color: #6b7280;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const Price = styled.div`
  width:20%;
  text-align:right;
  & p{
    color: #000;
  }
`;
