import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  width: 10%;
  background-color: #4b4b4b;
  color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 100px;
  }
`;

export default function TallBanner(props: { text: string }){

  return (
    <Banner>
      {props.text.split('').map((char, i) => (
        <h1 key={i}>{char}</h1>
      ))}
    </Banner>
  );

}
