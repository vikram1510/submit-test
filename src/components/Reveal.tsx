import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ labelFontSize: string, isHidden: boolean }>`
  display: flex;
  width: 100%;
  /* background-color: yellow; */
  
  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: ${(props) => props.labelFontSize};
    color: white;
  }
  .cover-wrapper {
    margin: 24px;
    /* max-height: 200px; */
    .header-wrapper {
      cursor: pointer;
      font-size: 36px;
      text-align: center;
      color: white;
      background-color: ${({ isHidden }) => isHidden ? 'green' : 'red'};;
    }
    flex: 1;
    position: relative;
  }
  .cover {
    height: ${({ isHidden }) => isHidden ? '100%' : '0%'};;
    background-color: white;
    transition-duration: 1s;
    transition-property: height;
    width: 100%;
    position: absolute;
    color: black;
  }
  .children-wrapper {
    padding: 16px;
    padding-top: 24px;
  }
`;

export default function Reveal(props: React.PropsWithChildren<{ label: string, fontSize?: string }>){

  const [isHidden, setIsHidden] =  useState(true);

  return (
    <Wrapper labelFontSize={props.fontSize ? props.fontSize : '40px'} isHidden={isHidden}>
      <div className="label-wrapper">
        <h1>{props.label}</h1>
      </div>
      <div className='cover-wrapper'>
        <div className='header-wrapper' onClick={() => setIsHidden(!isHidden)}>
          <p className='header'>{isHidden ? 'Click to show' : 'Click to hide'}</p>
        </div>
        <div className='cover' />
        <div className='children-wrapper'>
          {props.children}
        </div>
      </div>
    </Wrapper>
  );

}
