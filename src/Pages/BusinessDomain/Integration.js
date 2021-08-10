import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, NavBlock, SelectNavBlock, BlueSpan, GreenSpan } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/calculator.png';

const AutomotiveParts = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    사업분야
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                    <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물 인허가/설계</NavBlock>
                    </Link>
                    <Link to="/management-agency" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물 안전관리대행</NavBlock>
                    </Link>
                    <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방시설안전관리/점검</NavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방 공사/위험물 공사</NavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>친환경 자동차 부품</NavBlock>
                    </Link>
                    <Link to="/integration" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>내역(적산)</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>내역(적산)</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                        우정에이치앤씨(주)는 풍부한 경험을 겸비한 회사로써, 위험물안전관리법에 의거한 제조소등의 위치/구조 또는 설비에 적합하도록 <BlueSpan>설치허가 및 변경허가의 대행 업무</BlueSpan>를 해드리고 있습니다.
                        <br/>
                        <br/>
                        설치허가 및 변경허가 접수 후, 완공검사 필증 교부까지 마무리 지어드립니다. 또한 고객의 작업장에 알맞도록 지정배수를 계산하여 품목변경도 해드리고 있으며 제조소 등의 <GreenSpan>용도폐지, 지위승계 신고 대행</GreenSpan>도 해드리고 있습니다.
                        <br/>
                        <br/>
                        위험물의 인허가에 관한 신뢰할 수 있는 인허가를 약속드리며, 위험물 시설의 인허가 절차 등에 관한 많은 어려움을 가지고 있었을 것이라 여깁니다.
                        <br/>
                        <br/>
                        당사는 <BlueSpan>위험물 설계, 시공, 완공까지 전반적인 종합컨설팅회사</BlueSpan>로써 항상 신뢰할 수 있는 서비스로 귀사의 부가가치 창출에 기여하겠습니다.
                    </Descrip>
                </HelloWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const Descrip = styled.div`
    max-width: 640px;
    font-size: 20px;
    line-height: 32px;
    @media screen and (max-width: 1155px) {
        margin-top: 5vh;
  }
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 5vh auto 15vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1155px) {
        justify-content: center;
  }
`;

const Profile = styled.div`
    width: 400px;
    height: 450px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        max-width: 640px;
        width: 90vw;
        height: 60vw;
  }
`;


export default AutomotiveParts;