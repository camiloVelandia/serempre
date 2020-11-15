import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 768px) {
    display:flex;
  }
`;
export const Item = styled.div`
  margin-bottom:40px;
  & figure{
    margin:0 auto;
    width:27px;
    height:27px;
  }
  & img{
    height:100%;
    object-fit:contain;
  }
  & p{
    font-size:14px;
    line-height:1.4;
    text-align:center;
  }
  @media (min-width: 768px) {
    flex:1;
  }
`;
