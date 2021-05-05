import React from 'react';
import ProteinButtons from '../comps/FoodButtonProtein';
import CarbButtons from '../comps/FoodButtonCarbs';
import VegeButtons from '../comps/FoodButtonVege';

export default{
    title:"Michael's Components/Food Button Arrays",
    component: <ProteinButtons/>,
    component: <CarbButtons/>,
    component: <VegeButtons/>
}

export const Protein = () => <ProteinButtons foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#6FC3B2"/>

export const Carbs = () => <CarbButtons/>

export const Vege = () => <VegeButtons/>