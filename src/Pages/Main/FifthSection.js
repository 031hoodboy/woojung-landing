import React from 'react';
import styled from '@emotion/styled';
import {ExTitle, PageBlockWrapper, BlueButton, ExSubTitle, CardWrapper, ExplaneWrapper, Explane } from '../../components/PageStyle';
import PhtoImg from '../../assets/drill.png';

const FifthSection = () => {
    return (
        <Background>
            <PageBlockWrapper>
                <CardWrapper>
                    <Photo />
                    <ExplaneWrapper>
                        <Explane>
                        <ExTitle>소방 시설관리</ExTitle>
                        <ExSubTitle>최고 수준의 기술 인력으로 위험물 설계, 시공, 준공, 전반적인 종합컨설팅을 하고있습니다. 최고 수준의 기술 인력으로 위험물 설계, 시공, 준공, 전반적인 종합컨설팅을 하고.</ExSubTitle>
                        </Explane>
                        <BlueButton>더 보기</BlueButton>
                    </ExplaneWrapper>
                </CardWrapper>
            </PageBlockWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #f7fbfd;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

const Photo = styled.div`
    width: 30vw;
    min-width: 500px;
    max-width: 500px;
    height: 30vw;
    min-height: 500px;
    max-height: 500px;
    background: #fff;
    background-image: url(${PhtoImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    margin-top: 5vh;
    @media screen and (max-width: 780px) {
        width: 90vw;
        height: 90vw;
        min-width: 0;
        min-height: 0;
  }
`;

export default FifthSection;