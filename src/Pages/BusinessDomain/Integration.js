import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, NavBlock, SelectNavBlock, RedSpan } from '../../components/PageStyle';
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
                        건축과 설비를 동시에 작업, 타 전문업체에 비해 신속 정확, 외주비 절감효과, 공사 수주를 위한 경쟁력 있는 입찰 내역, 폭넓은 도면과 현장 이해로 보다 상세한 실행 내역, 설계 도면을 가장 충실하게 반영한 설계(예산) 내역 등 이 모두를 위해 더욱 열과 성의를 다하겠습니다.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        ▲ <RedSpan>물량 산출 (건축, 설비, 통신, 소방)</RedSpan>
                        <br/>
                        ▲ <RedSpan>입찰 내역</RedSpan> 
                        <br/>
                        ▲ <RedSpan>실행 내역</RedSpan>
                        <br/>
                        ▲ <RedSpan>설계 내역</RedSpan>
                        <br/>
                        ▲ <RedSpan>도급 내역</RedSpan> 
                        <br/>
                        ▲ <RedSpan>설계 변경</RedSpan>
                        <br/>
                        ▲ <RedSpan>컨설팅, 기타</RedSpan>
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
    max-width: 536px;
    font-size: 18px;
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
    width: 508px;
    height: 536px;
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