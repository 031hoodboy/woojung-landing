import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

import BackgroundImg from '../../assets/mainbackgroundimg.png';
import { Title, SubTitle, ButtonWrpper, Button } from '../../components/PageStyle';

const FirstSection = () => {
    return (
        <>
        <Background>
            <ContentWrapper>
                <FirstTitle>신뢰를 바탕으로 <br/>고객님의 안전을 책임지겠습니다.</FirstTitle>
                <FirstSubTitle>최고 수준의 기술 인력으로 위험물 설계, 시공, 준공, 전반적인 종합컨설팅을 하고있습니다.</FirstSubTitle>
                <ButtonWrpper>
                    <Link to="/greet" style={{textDecoration: "none"}}>
                        <FirstButton1>회사소개</FirstButton1>
                    </Link>
                    <Link to="/contact" style={{textDecoration: "none"}}>
                        <FirstButton2>견적의뢰</FirstButton2>
                    </Link>
                </ButtonWrpper>
            </ContentWrapper>
        </Background>
        </>
    );
}
const Background = styled.div`
    width: 100%;
    height: 70vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        height: 100vw;
  }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;


const FirstTitle = styled(Title)`
    color: #fff;
    font-size: 50px;
    @media screen and (max-width: 840px) {
    font-size: 7vw;
  }
`;

const FirstSubTitle = styled(SubTitle)`
    color: #fff;
    @media screen and (max-width: 840px) {
        width: 60vw;
        font-size: 3vw;
  }
`;

const FirstButton1 = styled(Button)`
    color: #fff;
    background: #05CFFF;
`;

const FirstButton2 = styled(FirstButton1)`
    background: #63EA00;
`;

export default FirstSection;