import React from 'react';
import styled from 'styled-components';

const HomeFoodTimerBar = styled.div`
height: 52px;
width: 342px;
left: 0px;
top: 0px;
border-radius: 10px;
background: #FCD8D8;
letter-spacing:5px;
`;

const HomeFoodTimerItem = styled.div`
font-size: 24px;
line-height: 33px;
margin-top: -40px;
margin-left:160px;
width: 153px;
left: 162px;
top: 9px;
`;

const HomeFoodTimerDate = styled.div`
font-size: 24px;
line-height: 33px;
position:relative;
margin-top: -40px;
margin-left:23px;
z-index:2;

`;

const HomeFoodTimerDarkBar= styled.div`
position:relative;
height: 52px;
width: 126px;
margin-top: -45px;
border-radius: 10px;
background: #F16D6D;
z-index:1;
`;



const HomeFoodTimerUI = () => {

    return <div>
        <HomeFoodTimerBar></HomeFoodTimerBar>
    <HomeFoodTimerItem>CHICKEN</HomeFoodTimerItem>
    <HomeFoodTimerDarkBar></HomeFoodTimerDarkBar>
        <HomeFoodTimerDate>1 DAYS</HomeFoodTimerDate>
    </div>
}

export default HomeFoodTimerUI;

