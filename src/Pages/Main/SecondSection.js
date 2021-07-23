import React from 'react';
import styled from '@emotion/styled';

import ToolImg from '../../assets/tool.png';
import RulerImg from '../../assets/ruler.png';
import BrickImg from '../../assets/brick.png';

const SecondSection = () => {
    return (
        <Background>
            <CardWrapper>
                <CardBlock>
                    <Tool/>
                    <CardTitle>최고수준의 기술인력</CardTitle>
                    <CardSubTitle>
                        최고수준의 기술인력으로<br/>
                        가나다라 마바사아 자차카타파하<br/>
                        가나다라마 바사아 자차카타파<br/>
                    </CardSubTitle>
                </CardBlock>
                <CardBlock>
                    <Ruler/>
                    <CardTitle>최고수준의 기술인력</CardTitle>
                    <CardSubTitle>
                        최고수준의 기술인력으로<br/>
                        가나다라 마바사아 자차카타파하<br/>
                        가나다라마 바사아 자차카타파<br/>
                    </CardSubTitle>
                </CardBlock>
                <CardBlock>
                    <Brick/>
                    <CardTitle>최고수준의 기술인력</CardTitle>
                    <CardSubTitle>
                        최고수준의 기술인력으로<br/>
                        가나다라 마바사아 자차카타파하<br/>
                        가나다라마 바사아 자차카타파<br/>
                    </CardSubTitle>
                </CardBlock>
            </CardWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const CardWrapper =  styled.div`
    width: 1088px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1088px) {
        width: 90vw;
        flex-direction: column;
        align-items: center;
    }
`;

const CardBlock =  styled.div`
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 1088px;
    justify-content: space-between;
    margin: 5vh 0;
    overflow: hidden;
`;

const Tool = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(${ToolImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Ruler = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(${RulerImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Brick = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(${BrickImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CardTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
`;

const CardSubTitle = styled.div`
    font-size: 16px;
`;

export default SecondSection;