import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, PageBlockWrapper, BlueSpan, GreenSpan, Date, Space } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/profile.png';
import ArrowImg from '../../assets/arrow.png';
import {css} from '@emotion/react';

const Greet = () => {

    const [open, setopen] = useState(false);
    const onToggle = () => {
        setopen(!open);
    }

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    회사소개
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper open={open} >
                    <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>회사소개<Arrow/> </SelectNavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업자등록증 및 면허증</NavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>조직도</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>찾아오시는 길</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>회사소개</MobileSelectNavBlock>
                        </Link>
                        <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>사업자등록증 및 면허증</MobileNavBlock>
                        </Link>
                        <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>조직도</MobileNavBlock>
                        </Link>
                        <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>찾아오시는 길</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>회사소개</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <HelloWrapper>
                    <ProfileWrapper>
                        <Descrip>
                            21세기는 <BlueSpan>새로운 지식과 정보, 디지털 경영방식</BlueSpan>이 요구되는 시기입니다. <br/>
                            따라서 저희 우정에이치앤씨(주)의 모든 임직원은 <BlueSpan>철저한 Service Mind의 함양</BlueSpan>과,<br/>
                            고객 위주의새로운 신공법의 기술개발로 선진적인 현장 운영에 최선의 노력을 다하고자 합니다.<br/>
                            <br/>
                            당사는 <GreenSpan>최고 수준의 기술 인력</GreenSpan>을 바탕으로 <GreenSpan>고품질 서비스와 친절한 고객 상담</GreenSpan>으로<br/>
                            고객에게 만족을 드리고자 임직원 모두가 최선을 다할 것을 약속드립니다.<br/>
                            귀사의 위험물시설, 소방시설 운영을 정상화하고 귀사의 위험물, 소방안전의식을 함양하는데<br/>
                            일조하여 시설관계인께서 안전한 환경에서 근무하도록 노력하겠습니다.<br/>
                        </Descrip>
                        <Hello>
                            <Date>2003. 10.<Space/><DateDescrip>원엔지니어링 설립</DateDescrip></Date> 
                            <Date>2006. 12.<Space/><DateDescrip> 우정엔지니어링(주) 변경</DateDescrip></Date> 
                            <Date>2014. 04.<Space/><DateDescrip>우정에이치앤씨(주) 변경</DateDescrip></Date> 
                        </Hello>
                    </ProfileWrapper>
                    <Profile/>

                </HelloWrapper>
            </PageBlockWrapper>
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

const MainImgTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1088px;
    margin: 0 auto;
    @media screen and (max-width: 1207px) {
      width: 100vw;
      display: flex;

      align-items: center;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    width: 1088px;
    margin: 5vh auto 5vh auto;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (max-width: 1208px) {
        width: 80vw;
        justify-content: center;
  }
    @media screen and (max-width: 780px) {
        width: 90vw;
  }
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

const Hello = styled.div`
    margin-top: 5vh;
    font-size: 30px;
    @media screen and (max-width: 780px) {
        font-size: 19px;
        text-align: center;
  }
`;

const Profile = styled.div`
    width: 320px;
    height: 480px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3vh;
    @media screen and (max-width: 1024px) {
       min-width: 60vw;
       height: 45vw;
       margin: 3vh auto;
  }
  @media screen and (max-width: 780px) {
       min-width: 90vw;
       height: 75vw;
       margin: 3vh auto;
  }
`;

const Arrow = styled.div`
    width: 17px;
    height: 9px;
    background-image: url(${ArrowImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: none;
    position: absolute;
    right: 5%;
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

const Descrip = styled.div`
    width: 47vw;
    font-size: 18px;
    line-height: 35px;
    font-weight: 300;
    max-width: 755px;
  @media screen and (max-width: 1024px) {
        width: 70vw;
  }
  @media screen and (max-width: 780px) {
       width: 90vw;
       margin: 0 auto;
  }
`;

const DateDescrip = styled.span`
    font-size: 18px;
    line-height: 35px;
    font-weight: 300;
    @media screen and (max-width: 1480px) {
        font-size: 16px;
  }
`;

const NavBarWrapper = styled.div`
    width: 100vw;
    height: 58px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #D9D9D9;
    align-items: center;
    @media screen and (max-width: 780px) {
        width: calc(100vw - 1px);
        height: 50px;
        flex-direction: column;
        justify-content: flex-end;
        border: none;
        ${props => props.open && css`
        height: 204px;
    `}
    }
`;

const MobileNavBarWrapper = styled(NavBarWrapper)`
    display: none;
    flex-direction: column;
    ${props => props.open && css`
        display: flex;
    `}
`;

const NavBlock = styled.div`
    width: 15vw;
    min-width: 200px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    @media screen and (max-width: 780px) {
        display: none;
        border: none;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    font-weight: 700;
    color: #000;
    border-left: 1px solid #D9D9D9;
    @media screen and (max-width: 780px) {
        font-size: 18px;
        width: 100vw;
        display: flex;
        min-height: 49px;
        border-bottom: 1px solid #D9D9D9;
        text-align: center;
    }
`;

const MobileNavBlock = styled(NavBlock)`
        height: 49px;
        font-size: 18px;
    @media screen and (max-width: 780px) {
        display: flex;
        font-size: 18px;
        width: 100vw;
        border-bottom: 1px solid #D9D9D9;
    }
`;

const MobileSelectNavBlock = styled(SelectNavBlock)`
    display: none;
    @media screen and (max-width: 780px) {
        display: none;
    }
`;

export default Greet;