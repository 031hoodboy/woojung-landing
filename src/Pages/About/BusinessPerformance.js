import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './Pagenation.css'
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import { Title, PageBlockWrapper, BlueSpan, GreenSpan, Date, Space, NavBarWrapper, NavBlock, SelectNavBlock, MobileNavBarWrapper, MobileSelectNavBlock, MobileNavBlock, Arrow, MainImgTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import BusinessPerformanceNavbar from './BusinessPerformanceNavbar';
import TableNavbar from './TableNavbar';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 4,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        axios
            .get(`https://www.wooapi.co.kr/business/businesslist.do`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(businesslist => 
                        <BoardContent key={businesslist.idx}>
                            <Num>{businesslist.buyer}</Num>
                            <Num>{businesslist.cons_name}</Num>
                            <Num>{businesslist.fields}</Num>
                            <Num>{businesslist.regdate}</Num>
                    </BoardContent>
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };


    componentDidMount() {
        this.receivedData()
    }

    render() {

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    회사소개
                </MainImgTitle>
            </MainImg>
            <BusinessPerformanceNavbar/>
            <PageTitleWrpper>
                <PageTitle>사업실적</PageTitle>
                <TableNavbar/>
            </PageTitleWrpper>
            <NewsCardWrapper>
                <CardWrapper>
                <BoardHeader>
                        <Num>발주처</Num>
                        <Num>공사명</Num>
                        <Num>분야</Num>
                        <Num>비고</Num>
                </BoardHeader>
                    {this.state.postData}
                </CardWrapper>
                <Paginate>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </Paginate>
            </NewsCardWrapper>
                
            <Footer/>
        </PageWrapper>
    );
}
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

const NewsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 10vh 0;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 5vh 0 20vh 0;
  }
`;

const Paginate = styled.div`
    padding: 3vh auto 5vh auto;
    cursor: pointer;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
  }
  @media screen and (max-width: 780px) {
        border-top: 2px solid #8AC53F;
  }
`;

const BoardContent = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
    @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 74px;
  }
`;

const Num = styled.div`
    flex: 1;
    text-align: center;
`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
    cursor: pointer;
    @media screen and (max-width: 780px) {
        font-size: 12px;
        padding: 0;
        flex: 0;
        margin-bottom: 10px;
        font-weight: 600;
  }
`;

const RegisDate = styled.div`
    @media screen and (max-width: 780px) {
        font-size: 12px;
        padding: 0;
  }
`;

const Look = styled.div`
    min-width: 20px;
    margin: 0 20px;
    @media screen and (max-width: 780px) {
        font-size: 12px;
        padding: 0;
  }
`;

 const Wrapper = styled.div`
    display: flex;
    flex: 1;
`;

const BoardHeader = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    background-color: #8AC53F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    @media screen and (max-width: 780px) {
        display: none;
  }
`;

const BordHeaderTitle = styled.div`

`;

const BoardHeaderRegisDate = styled(Num)`

`;

export const PageTitleWrpper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1088px;
    margin: 0 auto;
    margin-top: 8vh;
    @media screen and (max-width: 1207px) {
        width: 90vw;
        flex-direction: column;
        align-items: center;
  }
  @media screen and (max-width: 880px) {
    margin-top: 8vh;
}
`;

const PageTitle = styled(Title)`
    border-bottom: 2px solid #000;
    margin: 0;
    @media screen and (max-width: 1207px) {
    margin-bottom: 10vh;
  }
    @media screen and (max-width: 880px) {
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 10vh;
  }
`;