import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainbanner.png';

const Banner = () => {
    return (
        <Background>
            <Content>
                안전한 가나다라 마바사아 자차카타파하.
            </Content>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 30vh;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        height: 15vh;
  }
`;

const Content = styled.div`
    width: 80vw;
    padding: 0 10vw;
    position: absolute;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.7vw;
    font-weight: 600;
    @media screen and (max-width: 840px) {
        height: 15vh;
        font-size: 16px;
  }
`;
export default Banner;