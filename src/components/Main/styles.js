import styled from 'styled-components';

export const Content = styled.main`
  margin-bottom: 180px;
  padding-left: 11px;
  padding-right: 10px;
  padding-top: 48px;
  & .small {
    margin-bottom:10px;
  }
  & .big {
    display: none;
  }
  @media (min-width: 768px) {
    margin-bottom: 120px;
    padding-left: 113px;
    padding-right: 113px;
    & .small {
      display: none;
    }
    & .big {
      display: block;
    }
  }
  @media (min-width: 1280px) {
    margin-bottom: 190px;
    padding-left: 111px;
    padding-right: 111px;
    display: flex;
    justify-content:space-between;
    & > section {
      width: 48%;
    }
    
  }
`;

export const Fixed = styled.div`
  &.visible {
    @media (min-width: 1280px) {
    position: sticky;
    top: 20px;
    height:72vh;
    & section:first-child{
      margin-bottom:40px;
    }
    }
  }
  /* top:0; */
`;

