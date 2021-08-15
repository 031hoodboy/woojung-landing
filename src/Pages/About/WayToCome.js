import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import Map from '../../modules/MapContainer';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, PageBlockWrapper, NavBarWrapper, NavBlock, SelectNavBlock, MainImgTitle, MobileNavBarWrapper, MobileSelectNavBlock, MobileNavBlock, Arrow} from '../../components/PageStyle';
import styled from '@emotion/styled';

const WayToCome = () => {

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
                        <NavBlock>회사소개</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업자등록증 및 면허증</NavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>조직도</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>찾아오시는 길<Arrow/></SelectNavBlock>
                    </Link>                    
                    <MobileNavBarWrapper open={open}>
                        <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>회사소개</MobileNavBlock>
                        </Link>
                        <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>사업자등록증 및 면허증</MobileNavBlock>
                        </Link>
                        <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>조직도</MobileNavBlock>
                        </Link>
                        <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>찾아오시는 길</MobileSelectNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>오시는 길</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <MapContainer>
                    <Map />
                    <InfoWrapper>
                        <Info><b>주소 </b> 충청남도 천안시 서북구 백석3로 130-14, 4층(백석동)</Info>
                        <Info><b>tel</b> 041-565-7010~3</Info>
                    </InfoWrapper>
                </MapContainer>
            </PageBlockWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MapContainer = styled.div`
    width: 1088px;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 20vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        height: 60vh;
        justify-content: space-around;
        margin: 5vh auto 30vh auto;

  }
`;

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

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;


const Info = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

export default WayToCome;