import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {PageWrapper} from '../../components/PageStyle';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import Banner from './Banner';

const Main = () => {
    return (
        <PageWrapper>
            <Header/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
                <Banner/>
            <Footer/>
        </PageWrapper>
    );
}


export default Main;