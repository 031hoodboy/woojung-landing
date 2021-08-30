import React from 'react';
import styled from '@emotion/styled';
import FooterLogoImg from '../assets/footerlogo.png'

const Footer = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
            <Logo/>
            <InfoWrapper>
                <Content>우정에이치엔씨(주) ㅣ 대표 : 장두희 ㅣ <Content>사업자등록번호 : 312-86-64352</Content></Content>
                <Content>주소 : 충청남도 천안시 서북구 백석3로 130-14, 4층(백석동)  <Content>ㅣ TEL : 041-565-7010~3</Content></Content>
                <Content>Copyright 2021 Woojung. All Rights Reserved. </Content>
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
  @media screen and (max-width: 453px) {
        font-size: 14px;
        padding: 0;
        padding-top: 10px;
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