import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import HeaderNav from './HeaderNav';

const NavBar = () => {

    return (

        <Navigator>
            <Link to="/greet" style={{textDecoration: 'none'}}>
                <NavContent>회사소개</NavContent>
            </Link>
            <Link to="/license" style={{textDecoration: 'none'}}>
                <NavContent type="trigger">사업분야</NavContent>
            </Link>
            <Link to="/processing" style={{textDecoration: 'none'}}>
                <NavContent>견적의뢰</NavContent>
            </Link>
            <Link to="/introduce" style={{textDecoration: 'none'}}>
                <NavContent>커뮤니티</NavContent>
            </Link>
            <HeaderDropBlock>
                <HeaderNav/>
            </HeaderDropBlock> 
        </Navigator>
        
    );
};

const Navigator = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1024px) {
    display: none;
  }
  &:hover {
        color: #5d6b83;
        >div {
          display: block;
      }
    }
`;

const NavContent = styled.div`
    width: 15vw;
    padding: 26px 0;
    max-width: 150px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    &:hover {
        color: #0A109F;
    }
`;

const HeaderDropBlock = styled.div`
    border-top: 1px solid #D8D8D8;
    position: absolute;
    top: 71px;
    left: 0;
    width: 100%;
    height: 250px;
    position: fixed;
    background: #fff;
    display: none;
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
`;

// const DropContent = styled(NavContent)`
//     padding: 10px 46px;
//     font-size: 16px;
// `;

// const Ul = styled.div`
//     display: none;
//     position: absolute;
//     margin-top: 45px;
//     padding: 20px 20px 10px 20px;
//     text-decoration: none;
//     flex-direction: flex-end;
//     background: #fff;
//     border: 1px solid #e2e8f0;
//     border-radius: 3px;
// `;

// const Li = styled.div`
//     text-decoration: none;
//     margin-bottom: 10px;
// `;

// const DropWrapper = styled.div`
// `;
export default NavBar;
