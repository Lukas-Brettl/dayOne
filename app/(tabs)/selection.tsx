import {View} from "react-native";
import Introdution1 from "../components/intro/introdution1";
import Select from "../components/intro/select"
import SelectHabits from "../components/selectHabits"
import SelectAge from "../components/intro/selectAge";
import Questions from "../components/intro/questions";
import { useState } from "react";
import Introdution2 from "../components/intro/introdution2";
export default function Selection(){

    const [partNum, setPartNum] = useState(1)

    const SelectionParts = [
    ()=> <Introdution1/>,
    ()=> <SelectAge/>,
    ()=> <Introdution2/>,
    () => (
        <Select
        min={{ num: 0, message: "I don't run" }}
        max={{ num: 8, message: '8 km or more' }}
        step={2}
        text='How many kilometers do you run per week?'
       
        img={require('../assets/images/run.png')}
        />
    ),
    () => <SelectHabits text='Select 3 good habits you want to improve'/>,    
    ()=> <Questions caption='How much time do you spend on social networks?' answers={['10min/day', '30min/day', '1h/day', '2h or more']}/>
    ]
    
    return(
        <View className="flex-1 bg-[#1A1A1A] w-full justify-center items-center">
            {SelectionParts[4]()}
        </View>
    )
}