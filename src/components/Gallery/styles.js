import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 768px) {
    margin-bottom:76px;
  }
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    background-color: transparent;
    width: 31%;
    border: 2px solid #eeeff2;
    border-radius: 8px;
    text-align: center;
    padding: 20px 0;
    overflow: hidden;
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
  }
  & figure {
    width: 70px;
    margin: 0 auto;
    height: 20px;
    overflow: hidden;
    & img {
      height: 100%;
      object-fit: contain;
    }
  }
  @media (min-width: 768px) {
    & figure {
      width: 170px;
      margin: 0 auto;
      height: 45px;
      overflow: hidden;
      & img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
export const Main = styled.div`
  border: 2px solid #eeeff2;
  border-radius: 8px;
  margin-bottom: 16px;
  & figure {
    width: 328px;
    height: 228px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    & img {
      height: 100%;
      width:100%;
      object-fit: contain;
    }
  }

  @media (min-width: 768px) {
    & figure {
      width: 328px;
      height: 328px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      & img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
