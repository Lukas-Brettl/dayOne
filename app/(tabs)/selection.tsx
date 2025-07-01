import {  SafeAreaView} from "react-native";
import Select from "../components/select"
import SelectHabits from "../components/selectHabits"
import { useState } from "react";
export default function Selection(){

    const [partNum, setPartNum] = useState(1)

    const SelectionParts = [
    () => (
        <Select
        min={{ num: 0, message: "I don't run" }}
        max={{ num: 8, message: "8 km or more" }}
        step={2}
        text="How many kilometers do you run per week?"
       
        img={require('../assets/images/run.png')}
        />
    ),
    () => <SelectHabits text="Select 3 good habits you want to improve"/>
    ]
    
    return(
        <SafeAreaView className="flex-1 bg-[#1A1A1A] w-full justify-center items-center">
        {SelectionParts[1]()}
        </SafeAreaView>
    )
}