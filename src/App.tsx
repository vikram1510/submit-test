import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import TallBanner from './components/TallBanner';
import Reveal from './components/Reveal';
import { Country, getMyCountries } from './api';

const Page = styled.div`
  width: 100vw;
  display: flex;
  .main {
    flex-grow: 1;
  }
`;

const BigText = styled.h1`
  font-size: 48px;
  color: white;
  text-align: center;
`;

const CountryWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  .country{
    width: 200px;
  }
  img{
    height: auto;
    width: 100%;
  }
`;


const MeWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;


function App() {

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
      getMyCountries(setCountries);
  }, []);

  return (
    <Page>
      <TallBanner text='VIKRAM'/>
      <div className='main'>
        <Reveal label='Title'>
          <BigText>Full Stack Developer</BigText>
        </Reveal>
        <Reveal label='Origin'>
          {countries.length && (
            <CountryWrapper>
              <div className='country'>
                <img src={countries[0].flag} alt='Indian flag'></img>
              </div>
              <div className='country'>
                <img src={countries[1].flag} alt='British flag'></img>
              </div>
            </CountryWrapper>
          )}
        </Reveal>
        <Reveal label='Favourite Food' fontSize='36px'>
          <BigText>Burgers</BigText>
        </Reveal>
        <Reveal label='Me'>
          <MeWrapper>
              <img 
                src='https://media-exp1.licdn.com/dms/image/C5603AQFnU7K87icrpQ/profile-displayphoto-shrink_800_800/0/1575476511190?e=1618444800&v=beta&t=nzIBGEcFBa64CVQxXSh8kauT7neuy6buHZHobyfNvYI' 
                height='100%'
                width='auto'
                alt='My profile'
              />
          </MeWrapper>
        </Reveal>
      </div>
      <TallBanner text='BAGEJA'/>
    </Page>
  );
}

export default App;
