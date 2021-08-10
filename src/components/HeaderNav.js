import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import SgtNoneImg from '../assets/sgtnone.png'

const HeaderNav = () => {
    return (
        <>
        <HeaderBlock>
            <LogoWrapper>
                    <Logo />
            </LogoWrapper>
            <NavigatorWrapper>
                <Navigator>
                    <Link to="/greet" style={{textDecoration: 'none'}}>
                        <NavContent>회사소개</NavContent>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none'}}>
                        <NavContent>사업자등록증</NavContent>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none'}}>
                        <NavContent>조직도</NavContent>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none'}}>
                        <NavContent>찾아오시는 길</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/license" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">위험물 인허가/설계</NavContent>
                    </Link>
                    <Link to="/management-agency" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">위험물 안전관리대행</NavContent>
                    </Link>
                    <Link to="/inspection" style={{textDecoration: 'none'}}>
                        <NavContent>소방시설안전관리/점검</NavContent>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">소방 공사/위험물 공사</NavContent>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">친환경 자동차 부품</NavContent>
                    </Link>
                    <Link to="/integration" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">내역(적산)</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="processing" style={{textDecoration: 'none'}}>
                        <NavContent>가공설비</NavContent>
                    </Link>
                    <Link to="/measure" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">측정설비</NavContent>
                    </Link>
                    <Link to="/production" style={{textDecoration: 'none'}}>
                        <NavContent>생산설비</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/introduce" style={{textDecoration: 'none'}}>
                        <NavContent>연구소 소개</NavContent>
                    </Link>
                    <Link to="/patent" style={{textDecoration: 'none'}}>
                        <NavContent type="trigger">특허 및 인증</NavContent>
                    </Link>
                </Navigator>
            </NavigatorWrapper>
        </HeaderBlock>

        </>
    );
};

const HeaderBlock = styled.div`
    width: 80vw;
    padding: 0 10vw;
    position: fixed;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #4a5568;
    background: #fff;
    z-index: 2;
    @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 15vw;
    max-width: 183px;
    min-width: 92px;
    height: 9vh;
    max-height: 82px;
    min-height: 41px;
    background-image: url(${SgtNoneImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
`;

const Navigator = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const NavContent = styled.div`
    width: 15vw;
    max-width: 150px;
    min-width: 100px;
    cursor: pointer;
    color: #000;
    padding-top: 15px;
    font-size: 16px;
    &:hover {
        color: #0A109F;
    }
`;

const NavigatorWrapper = styled.div`
    display: flex;
`;

export default HeaderNav;
