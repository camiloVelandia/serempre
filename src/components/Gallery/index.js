import React, {useState} from 'react';
import {Container, Options, Main} from './styles'

import img1 from '../../assets/images/aud-1.png'
import img2 from '../../assets/images/aud-2.png'
import img3 from '../../assets/images/aud-3.png'
const Gallery = () => {

  const image1 = img1
  const image2 = img2
  const image3 = img3

  const [bigImg, setBigImg]= useState(image1)

  return (
    <Container>
      <Main>
        <figure>
          <img src={bigImg} />
        </figure>
      </Main>
      <Options>
        <button
          onClick={() => {
            setBigImg(image1);
          }}
        >
          <figure>
            <img src={img1} />
          </figure>
        </button>
        <button
          onClick={() => {
            setBigImg(image2);
          }}
        >
          <figure>
            <img src={img2} />
          </figure>
        </button>
        <button
          onClick={() => {
            setBigImg(image3);
          }}
        >
          <figure>
            <img src={img3} />
          </figure>
        </button>
      </Options>
    </Container>
  );
};

export default Gallery;