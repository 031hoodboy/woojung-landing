import React from 'react';
import styled from '@emotion/styled';
import FooterLogoImg from '../assets/footerlogo.png'

const Footer = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
            <Logo/>
            <InfoWrapper>
                <Content>(주)에스지티</Content>
                <Content>Tel 041-548-0127(대표)   041-547-0127(기업부설연구소)&nbsp;&nbsp;&nbsp;<Content>Fax 041-548-1234</Content> </Content>
                <Content>주소 : 충청남도 천안시 서북구 직산읍 모시리 215번지</Content>
                <Content>Copyright 2021 SGT CO. All Rights Reserved. </Content>
            </InfoWrapper>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}
const FooterBcakgroundBlock = styled.div`
    padding: 5vh 0vw;
    background: #000;  
    display: flex;
`;

const FooterBlock = styled.div`
    padding: 0 20vw;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 840px) {
        padding: 0 5vw;
  }
`;

const Content = styled.div`
    color: #fff;
    font-size: 16px;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 840px) {
        font-size: 14px;
  }
`;

const Logo = styled.div`
    width: 190px;
    height: 40px;
    margin: 5px 0 15px 0;
    margin-right: 5vw;
    background-image: url(${FooterLogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoWrapper = styled.div`

`;

export default Footer;