import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import LicenseImg1 from '../../assets/license1.png';
import LicenseImg2 from '../../assets/license2.png';
import LicenseImg3 from '../../assets/license3.png';
import LicenseImg4 from '../../assets/license4.png';

const BusinessPartner = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                회사소개
            </MainImg>
            <NavBarWrapper>
                    <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>회사소개</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>사업자등록증 및 면허증</SelectNavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>조직도</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>찾아오시는 길</NavBlock>
                    </Link>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>사업자등록증 및 면허증</PageTitle>
            </PageTitleWrpper>
            <BarkWrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Remark>사업자등록증</Remark>
                        <Block></Block>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>소방시설업등록증</Remark>
                        <Block2></Block2>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>소방시설관리업등록증</Remark>
                        <Block3></Block3>
                    </RemarkWrapper>
                    <RemarkWrapper>
                        <Remark>소방시설관리업등록증</Remark>
                        <Block4></Block4>
                    </RemarkWrapper>
                </Blockwrapper>
            </BarkWrapper>
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
    align-items: center;
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

const BarkWrapper = styled.div`
    margin-bottom: 10vh;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 20vh auto;
  }
`;

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    width: 353px;
    height: 425px;
    margin: 0;
    background-image: url(${LicenseImg1});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 780px) {
    width: 42vw;
    height: 50vw;
    margin: 0;
  }
`;

const Block2= styled(Block)`
    background-image: url(${LicenseImg2});
`;

const Block3= styled(Block)`
    background-image: url(${LicenseImg3});
`;

const Block4= styled(Block)`
    background-image: url(${LicenseImg4});
`;

const Remark = styled.div`
    font-size: 18px;
    padding: 20px;
    border-bottom: 1px solid #D0D0D0;
    text-align: center;
    @media screen and (max-width: 780px) {
        padding: 1vw 3vw;
        font-size: 3.2vw;
  }
`;

const RemarkWrapper = styled.div`
    border: 1px solid #DBDBDB;
    margin-bottom: 5vh;
    margin-right: 7.5px;
    @media screen and (max-width: 1220px) {
        margin: 0;
        margin-bottom: 5vh;
  }
`;

export default BusinessPartner;