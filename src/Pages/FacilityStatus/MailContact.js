import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import Email from '../../components/Email';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/customersupportbackground.png';
import {PageTitleWrpper, PageTitle, NavBarWrapper, MainImgTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';

const MailContact = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    견적의뢰
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                    <Link to="/quote-contact" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>견적의뢰</SelectNavBlock>
                    </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>견적의뢰</PageTitle>
                <Email/>
            </PageTitleWrpper>

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

const SelectNavBlock = styled.div`
    width: 15vw;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #000;
    @media screen and (max-width: 1207px) {
        font-size: 18px;
        width: 100vw;
        display: flex;
    }
`;

export default MailContact;