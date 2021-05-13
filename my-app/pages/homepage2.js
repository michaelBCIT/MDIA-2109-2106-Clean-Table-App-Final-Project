import React from 'react';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import AddItem from '../comps/HomeFoodTimerAdd';
import HeaderUI from '../comps/Header';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';
import NavBar from '../comps/NavBar/index2';
import FunFactWindow from '../comps/FunFactWindow';
import Congratulations from '../comps/congratulations-comp';


export default function Homepage() {

    const [food, setFood] = useState(null);

    useEffect(()=>{
        if(process.browser){
            var item = sessionStorage.getItem("Item");
            setFood(item);
        }
    }, []);

// --- STATE CHANGE FOR THE ADD NEW ITEM BUTTON -----------------
    const [addNew, setAddNew] = useState(false);

    var newBoxShadow = "0px 4px 5px -2px";
    if(addNew){
        var newBoxShadow = "inset 0px 0px 5px -1px"
    }

    const HandleAddNewClick = () => {
        setAddNew(!addNew);
        setTimeout(NextPage, 150)
    }

    const router = useRouter();
    const NextPage = () => {
        const routeTo = "/pantry-pick-category";
        router.push(routeTo);
    }

// --- PAGE -----------------------------------------------------
    return <MainCont>
    <Main>
    
    <HeaderCont>
        <HeaderUI></HeaderUI>
    </HeaderCont>

    <SemiCircle>
        <Txt>
        WELCOME BACK! <br></br> HEY! JUST A REMINDER THAT<br></br> YOUR GROCERIES WILL EXPIRE IN:
        </Txt>
    </SemiCircle>

    <headerWelcome></headerWelcome>


    <FoodCont>
        <div>
            {food}
        </div>

        <FoodTimer>
            <HomeFoodTimerUI 
            DAYS="1 DAYS"
            ITEM="CHICKEN"
            bgcolor="#F16D6D"
            bgcolor1="#FCD8D8"/>
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA" 
            />
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolordark="#FFC32E" bgcolorlight="#FFE4A3" barwidth="164px" darkWidth="164px"
            />
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="235px" darkWidth="235px"
            />
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="292px" darkWidth="292px"
            />
        </FoodTimer>

        <FoodTimer>
            <AddItem onClickA={HandleAddNewClick} boxShadow={newBoxShadow}></AddItem>
        </FoodTimer>
        </FoodCont>

    <FunFact>
        <FunFactWindow
        />
    </FunFact>


    <div className="navbar">
        <NavBar></NavBar>
    </div>
    </Main>
    </MainCont>
}

const Main = styled.div`
    background-color: #E7F2F0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HeaderCont = styled.div`

`;

const SemiCircle = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #59A091;
    border-top-left-radius: 500px; 
    border-top-right-radius: 500px; 
    border-bottom: 0;
    transform: rotate(180deg);
`;

const Txt = styled.div`
    transform: rotate(180deg);
    text-align:center;
    font-size: 18px;
    color: white;

    position: relative;
    top: 40px;
`;

const FoodTimer = styled.div`
margin-bottom: 15px;
align-items:center;
`;

const headerWelcome = styled.div`
`;

const FoodCont = styled.div`
    display: flex;
    flex-direction: column;
// justify-content: space-evenly;
    align-items: center;
    flex: 2;
    margin-top: 75px;
// margin-bottom: 100px;

// position: relative;
// left: 20px;

`;

const FunFact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

//   position:relative;
//   left: 35px;
//   bottom: 50px;

`;

const MainCont = styled.div`
height: 100vh;
width: 100vw;

display:flex;
justify-content: center;
align-items: center;
`;
    
